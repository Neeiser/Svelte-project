<script>
	import { createEventDispatcher } from 'svelte';
	import { messageStore, addMessage, removeMessage } from '../../stores/messageStore';
	import { savedIcons, updateIconDescription } from '../../stores/store';
	import { writable } from 'svelte/store';

	const dispatch = createEventDispatcher();

	// Stati per tenere traccia di quali sezioni sono aperte
	let sections = {
		messaggi_conferma: false,
		messaggi_errore: false,
		messaggi_caricamento_attesa: false,
		messaggi_aiuto_supporto: false,
	};

	function toggleButtonContent(section) {
		showCombine = false;
		selectedSection = '';
		// Chiude tutte le sezioni, poi apre solo quella selezionata
		Object.keys(sections).forEach((key) => {
			sections[key] = key === section ? !sections[key] : false;
		});
	}

	// Input per i messaggi personalizzati
	let newMessage = '';
	let selectedSection = '';

	// Store locale per la reattività
	let messages = writable({ conferma: [], errore: [], attesa: [], supporto: [] });

	// Sincronizza lo store locale con quello globale
	messageStore.subscribe((value) => {
		messages.set(value);
	});

	// Store per le icone salvate
	let icons = [];
	savedIcons.subscribe((value) => {
		icons = value;
	});

	// Variabili per la combinazione icona + messaggio
	let showCombine = false;
	let selectedIconId = null;
	let selectedMessage = '';
	let fontColor = '#000000';
	let fontWeight = 400;

	// Funzione per aprire il form di personalizzazione
	function openCustomization(section) {
		selectedSection = section;
		newMessage = '';
	}

	// Funzione per salvare il messaggio nello store
	function saveMessage() {
		if (newMessage.trim()) {
			addMessage(selectedSection, {
				text: newMessage,
				color: fontColor,
				weight: fontWeight,
			});
			newMessage = '';
			fontColor = '#000000';
			fontWeight = 400;
		}
	}

	// Funzione per aprire la finestra di combinazione
	function openCombine(message) {
		selectedMessage = message;
		showCombine = true;
	}

	// Funzione per confermare la combinazione
	function confirmCombination() {
		console.log(selectedIconId, selectedMessage);
		if (selectedMessage) {
			updateIconDescription(Number(selectedIconId), selectedMessage);
			showCombine = false;
			closeModal();
		}
	}

	let showModal = false;

	savedIcons.subscribe((value) => {
		icons = value;
	});

	function openModal(message) {
		selectedMessage = message;
		showModal = true;
	}

	function closeModal() {
		showModal = false;
		selectedIconId = null;
	}
</script>

<div class="leftShoulder">
	{#if showModal}
		<div class="overlay">
			<div class="modal">
				<h2>Seleziona un'icona</h2>
				<div class="icon-grid">
					{#each icons as icon}
						<div
							class="icon-item {selectedIconId === icon.id ? 'active' : ''}"
							on:click={() => (selectedIconId = icon.id)}>
							<div
								class={icon.animationType || ''}
								style="animation-duration: {icon.animationSpeed || 2}s; 
		       transform: scale({icon.scale || 1})">
								{@html icon.svgContent.replace(
									'<svg',
									`
		<svg fill="${icon.fill}" stroke="${icon.stroke}"
		`
								)}
							</div>
							<p>{icon.title}</p>
						</div>
					{/each}
				</div>
				<div class="modal-actions">
					<button on:click={confirmCombination}>Salva</button>
					<button on:click={closeModal}>Annulla</button>
				</div>
			</div>
		</div>
	{/if}

	<h2 class="backButton" on:click={() => dispatch('closeFeedbackTestuale')}>
		<img src="img/freccia_sinistra.svg" class="accordion-arrow" />Back
	</h2>
	<div class="d-flex">
		<h1>Feedback e Notifiche</h1>
		<img src="img/info.svg" class="infoPoint" />
	</div>

	<div class="sectionPage4">
		<div class="accordion-item">
			<div id="feedback_testuale" class="accordion-content">
				<!-- Messaggi di Conferma -->
				<button class="buttonStyleWide" on:click={() => toggleButtonContent('messaggi_conferma')}>
					Messaggi di conferma
					<img src="img/freccia_alto.svg" alt="freccia" class="button-arrow" />
				</button>
				{#if sections.messaggi_conferma}
					<div class="button-content messaggi_style">
						<ul>
							{#each $messages.conferma as message, index}
								<li>
									<span
										class="padding-right-mess"
										style="color: {message.color}; font-weight: {message.weight}"
										>{message.text}</span>
									<button class="btn-combine" on:click={() => openModal(message)}>Combina</button>
									<button class="delete-btn" on:click={() => removeMessage('conferma', index)}
										>❌</button>
								</li>
							{/each}
						</ul>

						{#if selectedSection === 'conferma'}
							<div class="message-customization">
								<div>
									<input
										type="text"
										bind:value={newMessage}
										placeholder="Scrivi il tuo messaggio..."
										style="color: {fontColor}; font-weight: {fontWeight}" />
								</div>
								<div class="moreCustomizationText">
									<input type="color" bind:value={fontColor} />
									<input
										type="range"
										min="100"
										max="900"
										step="100"
										bind:value={fontWeight}
										on:input={() => (fontWeight = parseInt(fontWeight))} />
								</div>
								<button class="btn-save" on:click={saveMessage}>Salva</button>
							</div>
						{/if}

						{#if selectedSection == ''}
							<button class="btn-pers-testuale" on:click={() => openCustomization('conferma')}
								>Crea messaggio</button>
						{/if}
					</div>
					{#if showCombine}
						<div class="combine-box">
							<h3>Combina Messaggio con Icona</h3>
							<select bind:value={selectedIconId}>
								<option value="" disabled selected>Seleziona un'icona</option>
								{#each icons as icon}
									<option value={icon.id}>{icon.title}</option>
								{/each}
							</select>
							<button class="btn-combine" on:click={confirmCombination}
								>Conferma combinazione</button>
						</div>
					{/if}
				{/if}

				<!-- Messaggi di Errore -->
				<button class="buttonStyleWide" on:click={() => toggleButtonContent('messaggi_errore')}>
					Messaggi di errore
					<img src="img/freccia_alto.svg" alt="freccia" class="button-arrow" />
				</button>
				{#if sections.messaggi_errore}
					<div class="button-content messaggi_style">
						<ul>
							{#each $messages.errore as message, index}
								<li>
									<span class="padding-right-mess">{message.text}</span>
									<button class="btn-combine" on:click={() => openCombine(message)}>Combina</button>
									<button class="delete-btn" on:click={() => removeMessage('errore', index)}
										>❌</button>
								</li>
							{/each}
						</ul>

						{#if selectedSection === 'errore'}
							<div class="message-customization">
								<div>
									<input
										type="text"
										bind:value={newMessage}
										placeholder="Scrivi il tuo messaggio..."
										style="color: {fontColor}; font-weight: {fontWeight}" />
								</div>
								<div class="moreCustomizationText">
									<input type="color" bind:value={fontColor} />
									<input
										type="range"
										min="100"
										max="900"
										step="100"
										bind:value={fontWeight}
										on:input={() => (fontWeight = parseInt(fontWeight))} />
								</div>
								<button class="btn-save" on:click={saveMessage}>Salva</button>
							</div>
						{/if}
						{#if selectedSection == ''}
							<button class="btn-pers-testuale" on:click={() => openCustomization('errore')}>
								Crea messaggio
							</button>
						{/if}
					</div>
					{#if showCombine}
						<div class="combine-box">
							<h3>Combina Messaggio con Icona</h3>
							<select bind:value={selectedIconId}>
								<option value="" disabled selected>Seleziona un'icona</option>
								{#each icons as icon}
									<option value={icon.id}>{icon.title}</option>
								{/each}
							</select>
							<button class="btn-combine" on:click={confirmCombination}
								>Conferma combinazione</button>
						</div>
					{/if}
				{/if}

				<!-- Messaggi di Caricamento e Attesa -->
				<button
					class="buttonStyleWide"
					on:click={() => toggleButtonContent('messaggi_caricamento_attesa')}>
					Messaggi di caricamento e attesa
					<img src="img/freccia_alto.svg" alt="freccia" class="button-arrow" />
				</button>
				{#if sections.messaggi_caricamento_attesa}
					<div class="button-content messaggi_style">
						<ul>
							{#each $messages.attesa as message, index}
								<li>
									<span class="padding-right-mess">{message.text}</span>
									<button class="btn-combine" on:click={() => openCombine(message)}>Combina</button>
									<button class="delete-btn" on:click={() => removeMessage('attesa', index)}
										>❌</button>
								</li>
							{/each}
						</ul>

						{#if selectedSection === 'attesa'}
							<div class="message-customization">
								<div>
									<input
										type="text"
										bind:value={newMessage}
										placeholder="Scrivi il tuo messaggio..."
										style="color: {fontColor}; font-weight: {fontWeight}" />
								</div>
								<div class="moreCustomizationText">
									<input type="color" bind:value={fontColor} />
									<input
										type="range"
										min="100"
										max="900"
										step="100"
										bind:value={fontWeight}
										on:input={() => (fontWeight = parseInt(fontWeight))} />
								</div>
								<button class="btn-save" on:click={saveMessage}>Salva</button>
							</div>
						{/if}
						{#if selectedSection == ''}
							<button class="btn-pers-testuale" on:click={() => openCustomization('attesa')}>
								Crea messaggio
							</button>
						{/if}
					</div>
					{#if showCombine}
						<div class="combine-box">
							<h3>Combina Messaggio con Icona</h3>
							<select bind:value={selectedIconId}>
								<option value="" disabled selected>Seleziona un'icona</option>
								{#each icons as icon}
									<option value={icon.id}>{icon.title}</option>
								{/each}
							</select>
							<button class="btn-combine" on:click={confirmCombination}
								>Conferma combinazione</button>
						</div>
					{/if}
				{/if}

				<!-- Messaggi di Aiuto e Supporto -->
				<button
					class="buttonStyleWide"
					on:click={() => toggleButtonContent('messaggi_aiuto_supporto')}>
					Messaggi di Aiuto e Supporto
					<img src="img/freccia_alto.svg" alt="freccia" class="button-arrow" />
				</button>
				{#if sections.messaggi_aiuto_supporto}
					<div class="button-content messaggi_style">
						<ul>
							{#each $messages.supporto as message, index}
								<li>
									<span class="padding-right-mess">{message.text}</span>
									<button class="btn-combine" on:click={() => openCombine(message)}>Combina</button>
									<button class="delete-btn" on:click={() => removeMessage('supporto', index)}
										>❌</button>
								</li>
							{/each}
						</ul>

						{#if selectedSection === 'supporto'}
							<div class="message-customization">
								<div>
									<input
										type="text"
										bind:value={newMessage}
										placeholder="Scrivi il tuo messaggio..."
										style="color: {fontColor}; font-weight: {fontWeight}" />
								</div>
								<div class="moreCustomizationText">
									<input type="color" bind:value={fontColor} />
									<input
										type="range"
										min="100"
										max="900"
										step="100"
										bind:value={fontWeight}
										on:input={() => (fontWeight = parseInt(fontWeight))} />
								</div>
								<button class="btn-save" on:click={saveMessage}>Salva</button>
							</div>
						{/if}
						{#if selectedSection == ''}
							<button class="btn-pers-testuale" on:click={() => openCustomization('supporto')}>
								Crea messaggio
							</button>
						{/if}
					</div>
					{#if showCombine}
						<div class="combine-box">
							<h3>Combina Messaggio con Icona</h3>
							<select bind:value={selectedIconId}>
								<option value="" disabled selected>Seleziona un'icona</option>
								{#each icons as icon}
									<option value={icon.id}>{icon.title}</option>
								{/each}
							</select>
							<button class="btn-combine" on:click={confirmCombination}
								>Conferma combinazione</button>
						</div>
					{/if}
				{/if}
			</div>
		</div>
	</div>
</div>

<style scoped>
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
	}

	.modal {
		background: white;
		padding: 20px;
		border-radius: 12px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
		text-align: center;
	}

	.icon-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 16px;
		margin: 20px 0;
	}

	.icon-item {
		cursor: pointer;
		padding: 10px;
		border: 2px solid transparent;
		border-radius: 8px;
		transition: all 0.3s;
	}

	.icon-item:hover {
		border-color: #007bff;
	}

	.icon-item.active {
		border-color: #007bff;
	}

	.modal-actions {
		display: flex;
		justify-content: center;
		gap: 16px;
	}

	.modal-actions button {
		padding: 8px 16px;
		border-radius: 6px;
		cursor: pointer;
	}
	.backButton {
		position: absolute;
		top: 10px;
		font-size: 16px;
		cursor: pointer;
	}
	.leftShoulder {
		position: absolute;
		width: 490px;
		padding: 45px 20px;
		background: #fffdfe;
		border-right: 0.5px solid #949494;
		flex-shrink: 0;
	}

	.sectionPage4 {
		overflow: auto;
		height: calc(100vh - 200px);
	}

	.buttonStyleWide {
		padding: 10px;
		margin: 10px;
		width: 75%;
	}

	#feedback_testuale {
		align-items: center;
	}

	.btn-save {
		padding: 8px;
		background-color: #9f1349;
		color: #fffdfe;
		border: none;
		border-radius: 7px;
	}

	.messaggi_style {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		padding: 12px 0px;
		margin: 0px 3rem;
	}

	.btn-pers-testuale {
		padding: 8px;
		margin-top: 0px;
	}

	.messaggi_style ul {
		list-style: none;
		padding: 0;
	}

	.messaggi_style li {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: white;
		padding: 8px;
		border-radius: 4px;
		margin-bottom: 4px;
	}

	.message-customization {
		display: flex;
		flex-direction: column;
		margin-top: 12px;
		padding: 12px;
		background: #f4f4f4;
		border-radius: 8px;
		display: flex;
		gap: 8px;
	}
	.message-customization input[type='text'] {
		width: 100%;
		padding: 8px;
	}

	.delete-btn {
		padding: 4px;
		margin-left: 8px;
		margin-right: 8px;
	}

	.btn-combine {
		padding: 6px;
		margin-left: auto;
	}

	.combine-box select {
		padding: 4px;
	}

	.combine-box h3 {
		margin-bottom: 12px;
		font-size: 14px;
		font-weight: 700;
		text-align: center;
	}

	.padding-right-mess {
		padding-right: 8px;
	}

	.moreCustomizationText {
		display: flex;
		gap: 8px;
	}
</style>
