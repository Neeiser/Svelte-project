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

	// Funzione per aprire il form di personalizzazione
	function openCustomization(section) {
		selectedSection = section;
		newMessage = '';
	}

	// Funzione per salvare il messaggio nello store
	function saveMessage() {
		if (newMessage.trim() && selectedSection) {
			addMessage(selectedSection, newMessage);
			newMessage = ''; // Resetta l'input dopo il salvataggio
			selectedSection = '';
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
			console.log(selectedIconId, selectedMessage);
		}
	}
</script>

<div class="leftShoulder">
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
									{message}
									<button class="btn-combine" on:click={() => openCombine(message)}>Combina</button>
									<button class="delete-btn" on:click={() => removeMessage('conferma', index)}
										>❌</button>
								</li>
							{/each}
						</ul>

						{#if selectedSection === 'conferma'}
							<div class="message-customization">
								<input
									type="text"
									bind:value={newMessage}
									placeholder="Scrivi il tuo messaggio..." />
								<button class="btn-save" on:click={saveMessage}>Salva</button>
							</div>
						{/if}

						<button class="btn-pers-testuale" on:click={() => openCustomization('conferma')}
							>Crea messaggio</button>
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
									{message}
									<button class="btn-combine" on:click={() => openCombine(message)}>Combina</button>
									<button class="delete-btn" on:click={() => removeMessage('errore', index)}
										>❌</button>
								</li>
							{/each}
						</ul>

						{#if selectedSection === 'errore'}
							<div class="message-customization">
								<input
									type="text"
									bind:value={newMessage}
									placeholder="Scrivi il tuo messaggio..."
									class="message-input" />
								<button class="btn-save" on:click={saveMessage}>Salva</button>
							</div>
						{/if}

						<button class="btn-pers-testuale" on:click={() => openCustomization('errore')}>
							Crea messaggio
						</button>
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
									{message}
									<button class="btn-combine" on:click={() => openCombine(message)}>Combina</button>
									<button class="delete-btn" on:click={() => removeMessage('attesa', index)}
										>❌</button>
								</li>
							{/each}
						</ul>

						{#if selectedSection === 'attesa'}
							<div class="message-customization">
								<input
									type="text"
									bind:value={newMessage}
									placeholder="Scrivi il tuo messaggio..."
									class="message-input" />
								<button class="btn-save" on:click={saveMessage}>Salva</button>
							</div>
						{/if}

						<button class="btn-pers-testuale" on:click={() => openCustomization('attesa')}>
							Crea messaggio
						</button>
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
									{message}
									<button class="btn-combine" on:click={() => openCombine(message)}>Combina</button>
									<button class="delete-btn" on:click={() => removeMessage('supporto', index)}
										>❌</button>
								</li>
							{/each}
						</ul>

						{#if selectedSection === 'supporto'}
							<div class="message-customization">
								<input
									type="text"
									bind:value={newMessage}
									placeholder="Scrivi il tuo messaggio..."
									class="message-input" />
								<button class="btn-save" on:click={saveMessage}>Salva</button>
							</div>
						{/if}

						<button class="btn-pers-testuale" on:click={() => openCustomization('supporto')}>
							Crea messaggio
						</button>
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
	}

	.messaggi_style {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		padding: 12px 0px;
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
		margin-top: 12px;
		padding: 12px;
		background: #f4f4f4;
		border-radius: 8px;
		display: flex;
		gap: 8px;
	}

	.delete-btn {
		padding: 4px;
		margin-left: 8px;
		margin-right: 8px;
	}

	.btn-combine {
		padding: 6px;
		margin-left: 8px;
	}
</style>
