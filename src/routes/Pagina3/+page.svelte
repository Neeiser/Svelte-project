<script>
	import { createEventDispatcher } from 'svelte';
	import { addSavedIcon } from '../../stores/store';
	import { setPreviewIcon, clearPreviewIcon } from '../../stores/previewIconStore';
	const dispatch = createEventDispatcher();

	let accordionStates = {
		feedback_visivo: false,
		indicatori_attesa: false,
		messaggi_conferma: false,
		messaggi_errore: false,
		barra_progresso: false,
		aiuto_supporto: false,
	};

	let buttonStates = {
		indicatori_attesa: false,
		messaggi_conferma: false,
		messaggi_errore: false,
		barra_progresso: false,
		aiuto_supporto: false,
	};

	let showPopup = false;
	let mobilePreviewImage = '';

	function toggleAccordion(id) {
		accordionStates[id] = !accordionStates[id];
	}

	function toggleButtonContent(id) {
		if (buttonStates[id]) {
			buttonStates[id] = false;
		} else {
			Object.keys(buttonStates).forEach((key) => {
				buttonStates[key] = false;
			});
			buttonStates[id] = true;
		}
	}

	function updateMobilePreview(imageSrc) {
		mobilePreviewImage = imageSrc;
	}

	function displayPopup() {
		showPopup = true;
	}

	function hidePopup() {
		showPopup = false;
	}

	let selectedIcon = '';
	let selectedSvgContent = '';
	let selectedStroke = '#000000';
	let selectedFill = '#000000';
	let animationType = '';
	let animationSpeed = 2;
	let scaleSize = 1; // Default 1x
	let displayDuration = 5; // Default 5 secondi

	function handleIconClick(iconSrc) {
		selectedIcon = iconSrc;
		fetch(iconSrc)
			.then((response) => response.text())
			.then((data) => {
				const parser = new DOMParser();
				const svgDoc = parser.parseFromString(data, 'image/svg+xml');
				const svgElement = svgDoc.querySelector('svg');

				if (svgElement) {
					svgElement.querySelectorAll('*').forEach((el) => {
						el.removeAttribute('fill');
						el.removeAttribute('stroke');
					});
					selectedSvgContent = new XMLSerializer().serializeToString(svgElement);

					updatePreviewIcon(); // Assicuriamo che l'icona aggiorni correttamente
				}
			})
			.catch((error) => console.error('Errore nel recupero dei dati SVG:', error));
	}

	function handleScaleChange(event) {
		scaleSize = event.target.value;
		updatePreviewIcon();
	}

	function handleFillChange(event) {
		selectedFill = event.target.value;
		updatePreviewIcon();
	}

	function handleStrokeChange(event) {
		selectedStroke = event.target.value;
		updatePreviewIcon();
	}

	function handleAnimationTypeChange(event) {
		animationType = event.target.value;
		updatePreviewIcon();
	}

	function handleAnimationSpeedChange(event) {
		animationSpeed = +event.target.value;
		updatePreviewIcon();
	}

	function handleDisplayDurationChange(event) {
		displayDuration = event.target.value;
		updatePreviewIcon();
	}

	function updatePreviewIcon() {
		document.documentElement.style.setProperty('--scale', scaleSize);

		setPreviewIcon({
			svgContent: selectedSvgContent,
			fill: selectedFill,
			stroke: selectedStroke,
			animationType,
			animationSpeed,
			scale: scaleSize,
			displayDuration: displayDuration,
		});
	}
	// Funzione per salvare l'icona personalizzata
	function saveIcon() {
		// Qui si salva l'icona nello store principale
		addSavedIcon({
			title: 'Titolo default',
			svgContent: selectedSvgContent,
			fill: selectedFill,
			stroke: selectedStroke,
			animationType,
			animationSpeed,
			scale: scaleSize,
			displayDuration: displayDuration,
		});

		// Resetta tutti gli accordion e i bottoni
		Object.keys(accordionStates).forEach((key) => {
			accordionStates[key] = false;
		});
		Object.keys(buttonStates).forEach((key) => {
			buttonStates[key] = false;
		});

		// Una volta salvata l'icona, rimuoviamo l'anteprima
		clearPreviewIcon();
	}

	// Rimuove l'anteprima quando si esce dalla pagina
	function closePage() {
		clearPreviewIcon();
	}
</script>

<div class="leftShoulder">
	<h2 class="backButton" on:click={() => dispatch('closeFeedbackVisivo')}>
		<img src="img/freccia_sinistra.svg" class="accordion-arrow" />
		Back
	</h2>
	<div class="d-flex">
		<h1>Feedback visivo</h1>
		<img src="img/info.svg" class="infoPoint" />
	</div>
	<div class="sectionPage3">
		<div class="accordion-item">
			<div id="feedback_visivo" class="accordion-content">
				<button class="buttonStyleWide" on:click={() => toggleButtonContent('indicatori_attesa')}>
					Indicatori di attesa
					<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
				</button>
				{#if buttonStates.indicatori_attesa}
					<div class="indicatori_attesa_style">
						<div class="indicatori_attesa_style_child">
							<button on:click={() => handleIconClick('img/Clessidra_icon.svg')}>
								<img src="img/Clessidra_icon.svg" alt="icon" />
							</button>
							<button on:click={() => handleIconClick('img/cerchio_freccia_caricamento.svg')}>
								<img src="img/cerchio_freccia_caricamento.svg" alt="icon" />
							</button>
							<button on:click={() => handleIconClick('img/cerchio_caricamento_linee.svg')}>
								<img src="img/cerchio_caricamento_linee.svg" alt="icon" />
							</button>
						</div>
						{#if selectedIcon}
							<div class="animationOptions">
								
								<p>Rinomina feedback</p>
								<input type="text" placeholder="Inserisci il nome" />
								
								<p>Personalizza dimensione</p>

								<div class="scale-custom">
									<label for="scaleIcon">Grandezza:</label>
									<input
										type="range"
										id="scaleIcon"
										min="0.5"
										max="2"
										step="0.1"
										bind:value={scaleSize}
										on:input={handleScaleChange} />
								</div>

								<p>Personalizza colore</p>

								<div class="color-picker-custom">
									<label for="fillColor">Riempimento:</label>
									<input
										type="color"
										id="fillColor"
										bind:value={selectedFill}
										on:input={handleFillChange} />
								</div>

								<div class="color-picker-custom">
									<label for="strokeColor">Traccia:</label>
									<input
										type="color"
										id="strokeColor"
										bind:value={selectedStroke}
										on:input={handleStrokeChange} />
								</div>

								<p class="p-animations">Personalizza animazione</p>
								<div class="animations-radio">
									<label>
										<input
											type="radio"
											name="animation"
											value=""
											on:change={handleAnimationTypeChange}
											checked={animationType === ''} />
										Nessuna
									</label>
									<label>
										<input
											type="radio"
											name="animation"
											value="rotateClockwise"
											on:change={handleAnimationTypeChange}
											checked={animationType === 'rotateClockwise'} />
										Rotazione Oraria
									</label>
									<label>
										<input
											type="radio"
											name="animation"
											value="ping"
											on:change={handleAnimationTypeChange}
											checked={animationType === 'ping'} />
										Ping
									</label>
									<div class="slidersCustomization">
										<div>
											<label for="animationSpeed">Velocità (secondi):</label>
											<input
												type="number"
												id="animationSpeed"
												min="0.1"
												step="0.1"
												bind:value={animationSpeed}
												on:change={handleAnimationSpeedChange} />
										</div>
										<div>
											<label for="animationTime">Tempo visualizzazione:</label>
											<input
												type="number"
												id="animationTime"
												min="1"
												max="10"
												step="1"
												bind:value={displayDuration}
												on:input={handleDisplayDurationChange} />
										</div>
									</div>
								</div>
							</div>

							<!-- Pulsante per salvare l'icona -->
							<button class="buttonStyleWide" on:click={saveIcon}>Salva Icona</button>
						{/if}
					</div>
				{/if}

				<!-- Overlay -->
				<div class="popup-overlay" on:click={hidePopup}></div>

				<button class="buttonStyleWide" on:click={() => toggleButtonContent('messaggi_conferma')}
					>Messaggi di conferma
					<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
				</button>
				{#if buttonStates.messaggi_conferma}
					<div id="messaggi_conferma" class="button-content indicatori_attesa_style">
						<div class="indicatori_attesa_style_child">
							<button on:click={() => handleIconClick('img/confermaV.svg')}>
								<img src="img/confermaV.svg" alt="icon" />
							</button>
							<button on:click={() => handleIconClick('img/smile2.svg')}>
								<img src="img/smile2.svg" alt="icon" />
							</button>
							<button on:click={() => handleIconClick('img/ok.svg')}>
								<img src="img/ok.svg" alt="icon" />
							</button>
						</div>
						{#if selectedIcon}
							<div class="animationOptions">
								
								<p>Rinomina feedback</p>
								<input type="text" placeholder="Inserisci il nome" />
								
								<p>Personalizza dimensione</p>

								<div class="scale-custom">
									<label for="scaleIcon">Grandezza:</label>
									<input
										type="range"
										id="scaleIcon"
										min="0.5"
										max="2"
										step="0.1"
										bind:value={scaleSize}
										on:input={handleScaleChange} />
								</div>

								<p>Personalizza colore</p>

								<div class="color-picker-custom">
									<label for="fillColor">Riempimento:</label>
									<input
										type="color"
										id="fillColor"
										bind:value={selectedFill}
										on:input={handleFillChange} />
								</div>

								<div class="color-picker-custom">
									<label for="strokeColor">Traccia:</label>
									<input
										type="color"
										id="strokeColor"
										bind:value={selectedStroke}
										on:input={handleStrokeChange} />
								</div>

								<p class="p-animations">Personalizza animazione</p>
								<div class="animations-radio">
									<label>
										<input
											type="radio"
											name="animation"
											value=""
											on:change={handleAnimationTypeChange}
											checked={animationType === ''} />
										Nessuna
									</label>
									<label>
										<input
											type="radio"
											name="animation"
											value="rotateClockwise"
											on:change={handleAnimationTypeChange}
											checked={animationType === 'rotateClockwise'} />
										Rotazione Oraria
									</label>
									<label>
										<input
											type="radio"
											name="animation"
											value="ping"
											on:change={handleAnimationTypeChange}
											checked={animationType === 'ping'} />
										Ping
									</label>
									<div class="slidersCustomization">
										<div>
											<label for="animationSpeed">Velocità (secondi):</label>
											<input
												type="number"
												id="animationSpeed"
												min="0.1"
												step="0.1"
												bind:value={animationSpeed}
												on:change={handleAnimationSpeedChange} />
										</div>
										<div>
											<label for="animationTime">Tempo visualizzazione:</label>
											<input
												type="number"
												id="animationTime"
												min="1"
												max="10"
												step="1"
												bind:value={displayDuration}
												on:input={handleDisplayDurationChange} />
										</div>
									</div>
								</div>
							</div>

							<!-- Pulsante per salvare l'icona -->
							<button class="buttonStyleWide" on:click={saveIcon}>Salva Icona</button>
						{/if}
					</div>
				{/if}
				<button
					class="buttonStyleWide"
					on:click={() => toggleButtonContent('messaggi_errore', this)}
					>Messaggi di errore
					<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
				</button>
				{#if buttonStates.messaggi_errore}
					<div id="messaggi_errore" class="button-content indicatori_attesa_style">
						<div class="indicatori_attesa_style_child">
							<button on:click={() => handleIconClick('img/iconX.svg')}>
								<img src="img/iconX.svg" alt="icon" />
							</button>
							<button on:click={() => handleIconClick('img/smileneg.svg')}>
								<img src="img/smileneg.svg" alt="icon" />
							</button>
							<button on:click={() => handleIconClick('img/attention.svg')}>
								<img src="img/attention.svg" alt="icon" />
							</button>
						</div>
						{#if selectedIcon}
							<div class="animationOptions">
								<p>Rinomina feedback</p>
								<input type="text" placeholder="Inserisci il nome" />
								
								
								<p>Personalizza dimensione</p>

								<div class="scale-custom">
									<label for="scaleIcon">Grandezza:</label>
									<input
										type="range"
										id="scaleIcon"
										min="0.5"
										max="2"
										step="0.1"
										bind:value={scaleSize}
										on:input={handleScaleChange} />
								</div>

								<p>Personalizza colore</p>

								<div class="color-picker-custom">
									<label for="fillColor">Riempimento:</label>
									<input
										type="color"
										id="fillColor"
										bind:value={selectedFill}
										on:input={handleFillChange} />
								</div>

								<div class="color-picker-custom">
									<label for="strokeColor">Traccia:</label>
									<input
										type="color"
										id="strokeColor"
										bind:value={selectedStroke}
										on:input={handleStrokeChange} />
								</div>

								<p class="p-animations">Personalizza animazione</p>
								<div class="animations-radio">
									<label>
										<input
											type="radio"
											name="animation"
											value=""
											on:change={handleAnimationTypeChange}
											checked={animationType === ''} />
										Nessuna
									</label>
									<label>
										<input
											type="radio"
											name="animation"
											value="rotateClockwise"
											on:change={handleAnimationTypeChange}
											checked={animationType === 'rotateClockwise'} />
										Rotazione Oraria
									</label>
									<label>
										<input
											type="radio"
											name="animation"
											value="ping"
											on:change={handleAnimationTypeChange}
											checked={animationType === 'ping'} />
										Ping
									</label>
									<div class="slidersCustomization">
										<div>
											<label for="animationSpeed">Velocità (secondi):</label>
											<input
												type="number"
												id="animationSpeed"
												min="0.1"
												step="0.1"
												bind:value={animationSpeed}
												on:change={handleAnimationSpeedChange} />
										</div>
										<div>
											<label for="animationTime">Tempo visualizzazione:</label>
											<input
												type="number"
												id="animationTime"
												min="1"
												max="10"
												step="1"
												bind:value={displayDuration}
												on:input={handleDisplayDurationChange} />
										</div>
									</div>
								</div>
							</div>

							<!-- Pulsante per salvare l'icona -->
							<button class="buttonStyleWide" on:click={saveIcon}>Salva Icona</button>
						{/if}
					</div>
				{/if}

				<button
					class="buttonStyleWide"
					on:click={() => toggleButtonContent('barra_progresso', this)}
					>Barra di progresso
					<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
				</button>
				{#if buttonStates.barra_progresso}
					<div id="barra_progresso" class="button-content indicatori_attesa_style">
						<div class="indicatori_attesa_style_child progress-buttons">
							<button on:click={() => handleIconClick('img/barra_car1.svg')}>
								<img src="img/barra_car1.svg" alt="icon" />
							</button>
							<button on:click={() => handleIconClick('img/barra_caricamento2.svg')}>
								<img src="img/barra_caricamento2.svg" alt="icon" />
							</button>
						</div>
						{#if selectedIcon}
							<div class="animationOptions">
								
								<p>Rinomina feedback</p>
								<input type="text" placeholder="Inserisci il nome" />
								
								
								<p>Personalizza dimensione</p>

								<div class="scale-custom">
									<label for="scaleIcon">Grandezza:</label>
									<input
										type="range"
										id="scaleIcon"
										min="0.5"
										max="2"
										step="0.1"
										bind:value={scaleSize}
										on:input={handleScaleChange} />
								</div>

								<p>Personalizza colore</p>

								<div class="color-picker-custom">
									<label for="fillColor">Riempimento:</label>
									<input
										type="color"
										id="fillColor"
										bind:value={selectedFill}
										on:input={handleFillChange} />
								</div>

								<div class="color-picker-custom">
									<label for="strokeColor">Traccia:</label>
									<input
										type="color"
										id="strokeColor"
										bind:value={selectedStroke}
										on:input={handleStrokeChange} />
								</div>

								<p class="p-animations">Personalizza animazione</p>
								<div class="animations-radio">
									<label>
										<input
											type="radio"
											name="animation"
											value=""
											on:change={handleAnimationTypeChange}
											checked={animationType === ''} />
										Nessuna
									</label>
									<label>
										<input
											type="radio"
											name="animation"
											value="rotateClockwise"
											on:change={handleAnimationTypeChange}
											checked={animationType === 'rotateClockwise'} />
										Rotazione Oraria
									</label>
									<label>
										<input
											type="radio"
											name="animation"
											value="ping"
											on:change={handleAnimationTypeChange}
											checked={animationType === 'ping'} />
										Ping
									</label>
									<div class="slidersCustomization">
										<div>
											<label for="animationSpeed">Velocità (secondi):</label>
											<input
												type="number"
												id="animationSpeed"
												min="0.1"
												step="0.1"
												bind:value={animationSpeed}
												on:change={handleAnimationSpeedChange} />
										</div>
										<div>
											<label for="animationTime">Tempo visualizzazione:</label>
											<input
												type="number"
												id="animationTime"
												min="1"
												max="10"
												step="1"
												bind:value={displayDuration}
												on:input={handleDisplayDurationChange} />
										</div>
									</div>
								</div>
							</div>

							<!-- Pulsante per salvare l'icona -->
							<button class="buttonStyleWide" on:click={saveIcon}>Salva Icona</button>
						{/if}
					</div>
				{/if}

				<button class="buttonStyleWide" on:click={() => toggleButtonContent('aiuto_supporto')}
					>Aiuto e Supporto
					<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
				</button>
				{#if buttonStates.aiuto_supporto}
					<div id="aiuto_supporto" class="button-content indicatori_attesa_style">
						<div class="indicatori_attesa_style_child">
							<button on:click={() => handleIconClick('img/punto_domanda.svg')}>
								<img src="img/punto_domanda.svg" alt="icon" />
							</button>
							<button on:click={() => handleIconClick('img/lampadina.svg')}>
								<img src="img/lampadina.svg" alt="icon" />
							</button>
							<button on:click={() => handleIconClick('img/chat.svg')}>
								<img src="img/chat.svg" alt="icon" />
							</button>
						</div>
						{#if selectedIcon}
							<div class="animationOptions">
								
								<p>Rinomina feedback</p>
								<input type="text" placeholder="Inserisci il nome" />
								
								<p>Personalizza dimensione</p>

								<div class="scale-custom">
									<label for="scaleIcon">Grandezza:</label>
									<input
										type="range"
										id="scaleIcon"
										min="0.5"
										max="2"
										step="0.1"
										bind:value={scaleSize}
										on:input={handleScaleChange} />
								</div>

								<p>Personalizza colore</p>

								<div class="color-picker-custom">
									<label for="fillColor">Riempimento:</label>
									<input
										type="color"
										id="fillColor"
										bind:value={selectedFill}
										on:input={handleFillChange} />
								</div>

								<div class="color-picker-custom">
									<label for="strokeColor">Traccia:</label>
									<input
										type="color"
										id="strokeColor"
										bind:value={selectedStroke}
										on:input={handleStrokeChange} />
								</div>

								<p class="p-animations">Personalizza animazione</p>
								<div class="animations-radio">
									<label>
										<input
											type="radio"
											name="animation"
											value=""
											on:change={handleAnimationTypeChange}
											checked={animationType === ''} />
										Nessuna
									</label>
									<label>
										<input
											type="radio"
											name="animation"
											value="rotateClockwise"
											on:change={handleAnimationTypeChange}
											checked={animationType === 'rotateClockwise'} />
										Rotazione Oraria
									</label>
									<label>
										<input
											type="radio"
											name="animation"
											value="ping"
											on:change={handleAnimationTypeChange}
											checked={animationType === 'ping'} />
										Ping
									</label>
									<div class="slidersCustomization">
										<div>
											<label for="animationSpeed">Velocità (secondi):</label>
											<input
												type="number"
												id="animationSpeed"
												min="0.1"
												step="0.1"
												bind:value={animationSpeed}
												on:change={handleAnimationSpeedChange} />
										</div>
										<div>
											<label for="animationTime">Tempo visualizzazione:</label>
											<input
												type="number"
												id="animationTime"
												min="1"
												max="10"
												step="1"
												bind:value={displayDuration}
												on:input={handleDisplayDurationChange} />
										</div>
									</div>
								</div>
							</div>

							<!-- Pulsante per salvare l'icona -->
							<button class="buttonStyleWide" on:click={saveIcon}>Salva Icona</button>
						{/if}
					</div>
				{/if}
			</div>
		</div>
	</div>
	<!-- <button class="button_feedback">SALVA MODIFICHE</button> -->
</div>

<style scoped>
	.scale-custom {
		display: flex;
		align-items: center;
		margin-bottom: 16px;
	}

	.scale-custom label {
		margin-right: 16px;
	}
	.slidersCustomization {
		display: flex;
		flex-direction: column;
		gap: 6px;
		margin-top: 12px;
	}

	.slidersCustomization div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.slidersCustomization input {
		width: 20%;
		padding: 4px;
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

	.sectionPage3 {
		overflow: auto;
		height: calc(100vh - 200px);
	}
	.indicatori_attesa_style {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		padding: 12px 0px;
	}

	.indicatori_attesa_style_child {
		display: flex;
		gap: 16px;
	}

	.indicatori_attesa_style_child button {
		padding: 0.6rem 1rem;
	}

	.buttonStyleWide {
		padding: 10px;
		margin: 10px;
		width: 75%;
	}

	#feedback_visivo {
		align-items: center;
	}

	/* Esempio di box per scelte animazione */
	.animationOptions {
		margin-top: 2rem;
		padding: 1rem;
		border: 1px solid #ccc;
		border-radius: 6px;
	}
	.animationOptions p {
		font-weight: 600;
		font-size: 18px;
		margin-bottom: 16px;
	}

	.animationOptions input[type="text"] {
        width: 100%;
        padding: 8px;
        margin-bottom: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
    }


	.color-picker-custom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 8px;
	}

	.p-animations {
		margin-top: 16px;
	}

	.animations-radio {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
</style>
