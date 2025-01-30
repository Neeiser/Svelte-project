<script>
	import { createEventDispatcher } from 'svelte';
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
		console.log('bottone cliccato');
		console.log(buttonStates);
		buttonStates[id] = !buttonStates[id];
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
</script>

<div class="leftShoulder">
	<h2 class="backButton" on:click={() => dispatch('closeFeedbackVisivo')}>Back</h2>
	<div class="d-flex">
		<h1>Feedback visivo</h1>
		<img src="img/info.svg" class="infoPoint" />
	</div>
	<div class="sectionPage3">
		<div class="accordion-item">
			<div class="accordion-header" on:click={() => toggleAccordion('feedback_visivo')}>
				<a href="Pagina2new.html">
					<img src="img/freccia_sinistra.svg" class="accordion-arrow" />
				</a>
				<span>Feedback Visivo</span>
			</div>
			{#if accordionStates.feedback_visivo}
				<div id="feedback_visivo" class="accordion-content">
					<button on:click={() => toggleButtonContent('indicatori_attesa')}>
						Indicatori di attesa
						<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
					</button>
					{#if buttonStates.indicatori_attesa}
						<div class="indicatori_attesa_style">
							<div class="indicatori_attesa_style_child">
								<button on:click={() => updateMobilePreview('img/Clessidra_icon.svg')}>
									<img src="img/Clessidra_icon.svg" alt="icon" />
								</button>
								<button on:click={() => updateMobilePreview('img/cerchio_freccia_caricamento.svg')}>
									<img src="img/cerchio_freccia_caricamento.svg" alt="icon" />
								</button>
								<button on:click={() => updateMobilePreview('img/cerchio_caricamento_linee.svg')}>
									<img src="img/cerchio_caricamento_linee.svg" alt="icon" />
								</button>
							</div>
							<!-- <button class="other-btn" on:click={displayPopup}>Altre opzioni</button> -->
						</div>
					{/if}

					<!-- <div id="popup" class="popup">
                                <div class="popup-content">
                                    <span class="close-btn" on:click={hidePopup}>&times;</span>
                                    <div class="popup-flex-container">
                                        <div class="quadrati-popup">
                                            <img src="img/Clessidra_icon.svg" alt="clessidra" class="clessidra-icon">
                                            <img src="img/iconX.svg" alt="x" class="x-icon">
                                        </div>
                                        <div class="quadrati-popup">
                                            <img src="img/cerchio_freccia_caricamento.svg" alt="cerchio" class="cerchio-icon">
                                            <img src="img/iconX.svg" alt="x" class="x-icon">
                                        </div>
                                        <div class="quadrati-popup">
                                            <img src="img/cerchio_caricamento_linee.svg" alt="linee" class="linee-icon">
                                            <img src="img/iconX.svg" alt="x" class="x-icon">
                                        </div> 
                                    </div>
                                    <div class="button-container3">
                                        <button class="button_popup_icona">Carica Icona</button>
                                        <button class="button_popup_save">Salva</button>
                                    </div>

                                </div>
                            </div> -->

					<!-- Overlay -->
					<div class="popup-overlay" on:click={hidePopup}></div>

					<button on:click={() => toggleButtonContent('messaggi_conferma', this)}
						>Messaggi di conferma
						<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
					</button>
					{#if buttonStates.messaggi_conferma}
						<div id="messaggi_conferma" class="button-content">
							<div class="button-group">
								<button on:click={() => updateMobilePreview('img/confermaV.svg')}>
									<img src="img/confermaV.svg" alt="icon" />
								</button>
								<button on:click={() => updateMobilePreview('img/smile2.svg')}>
									<img src="img/smile2.svg" alt="icon" />
								</button>
								<button on:click={() => updateMobilePreview('img/ok.svg')}>
									<img src="img/ok.svg" alt="icon" />
								</button>
							</div>
							<button class="other-btn" on:click={displayPopup}>Altre opzioni</button>
						</div>
					{/if}
					{#if showPopup}
						<div id="popup" class="popup">
							<div class="popup-content">
								<span class="close-btn" on:click={hidePopup}>&times;</span>
								<div class="popup-flex-container">
									<div class="quadrati-popup">
										<img src="img/Clessidra_icon.svg" alt="clessidra" class="clessidra-icon" />
										<img src="img/iconX.svg" alt="x" class="x-icon" />
									</div>
									<div class="quadrati-popup">
										<img
											src="img/cerchio_freccia_caricamento.svg"
											alt="cerchio"
											class="cerchio-icon" />
										<img src="img/iconX.svg" alt="x" class="x-icon" />
									</div>
									<div class="quadrati-popup">
										<img src="img/cerchio_caricamento_linee.svg" alt="linee" class="linee-icon" />
										<img src="img/iconX.svg" alt="x" class="x-icon" />
									</div>
								</div>
								<div class="button-container3">
									<button class="button_popup_icona">Carica Icona</button>
									<button class="button_popup_save">Salva</button>
								</div>
							</div>
						</div>
					{/if}
					<button on:click={() => toggleButtonContent('messaggi_errore', this)}
						>Messaggi di errore
						<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
					</button>
					<div id="messaggi_errore" class="button-content">
						<div class="button-group">
							<button on:click={() => updateMobilePreview('img/iconX.svg')}>
								<img src="img/iconX.svg" alt="icon" />
							</button>
							<button on:click={() => updateMobilePreview('img/smileneg.svg')}>
								<img src="img/smileneg.svg" alt="icon" />
							</button>
							<button on:click={() => updateMobilePreview('img/attention.svg')}>
								<img src="img/attention.svg" alt="icon" />
							</button>
						</div>
						<button class="other-btn" on:click={displayPopup}>Altre opzioni</button>
					</div>
					<div id="popup" class="popup">
						<div class="popup-content">
							<span class="close-btn" on:click={hidePopup}>&times;</span>
							<div class="popup-flex-container">
								<div class="quadrati-popup">
									<img src="img/Clessidra_icon.svg" alt="clessidra" class="clessidra-icon" />
									<img src="img/iconX.svg" alt="x" class="x-icon" />
								</div>
								<div class="quadrati-popup">
									<img
										src="img/cerchio_freccia_caricamento.svg"
										alt="cerchio"
										class="cerchio-icon" />
									<img src="img/iconX.svg" alt="x" class="x-icon" />
								</div>
								<div class="quadrati-popup">
									<img src="img/cerchio_caricamento_linee.svg" alt="linee" class="linee-icon" />
									<img src="img/iconX.svg" alt="x" class="x-icon" />
								</div>
							</div>
							<div class="button-container3">
								<button class="button_popup_icona">Carica Icona</button>
								<button class="button_popup_save">Salva</button>
							</div>
						</div>
					</div>

					<button on:click={() => toggleButtonContent('barra_progresso', this)}
						>Barra di progresso
						<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
					</button>
					<div id="barra_progresso" class="button-content">
						<div class="button-group progress-buttons">
							<button on:click={() => updateMobilePreview('img/barra_car1.svg')}>
								<img src="img/barra_car1.svg" alt="icon" />
							</button>
							<button on:click={() => updateMobilePreview('img/barra_caricamento2.svg')}>
								<img src="img/barra_caricamento2.svg" alt="icon" />
							</button>
						</div>
						<button class="other-btn" on:click={displayPopup}>Altre opzioni</button>
					</div>
					<div id="popup" class="popup">
						<div class="popup-content">
							<span class="close-btn" on:click={hidePopup}>&times;</span>
							<div class="popup-flex-container">
								<div class="quadrati-popup">
									<img src="img/Clessidra_icon.svg" alt="clessidra" class="clessidra-icon" />
									<img src="img/iconX.svg" alt="x" class="x-icon" />
								</div>
								<div class="quadrati-popup">
									<img
										src="img/cerchio_freccia_caricamento.svg"
										alt="cerchio"
										class="cerchio-icon" />
									<img src="img/iconX.svg" alt="x" class="x-icon" />
								</div>
								<div class="quadrati-popup">
									<img src="img/cerchio_caricamento_linee.svg" alt="linee" class="linee-icon" />
									<img src="img/iconX.svg" alt="x" class="x-icon" />
								</div>
							</div>
							<div class="button-container3">
								<button class="button_popup_icona">Carica Icona</button>
								<button class="button_popup_save">Salva</button>
							</div>
						</div>
					</div>

					<button on:click={() => toggleButtonContent('aiuto_supporto')}
						>Aiuto e Supporto
						<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
					</button>
					<div id="aiuto_supporto" class="button-content">
						<div class="button-group">
							<button on:click={() => updateMobilePreview('img/punto_domanda.svg')}>
								<img src="img/punto_domanda.svg" alt="icon" />
							</button>
							<button on:click={() => updateMobilePreview('img/lampadina.svg')}>
								<img src="img/lampadina.svg" alt="icon" />
							</button>
							<button on:click={() => updateMobilePreview('img/chat.svg')}>
								<img src="img/chat.svg" alt="icon" />
							</button>
						</div>
						<button class="other-btn" on:click={displayPopup}>Altre opzioni</button>
					</div>
					<div id="popup" class="popup">
						<div class="popup-content">
							<span class="close-btn" on:click={hidePopup}>&times;</span>
							<div class="popup-flex-container">
								<div class="quadrati-popup">
									<img src="img/Clessidra_icon.svg" alt="clessidra" class="clessidra-icon" />
									<img src="img/iconX.svg" alt="x" class="x-icon" />
								</div>
								<div class="quadrati-popup">
									<img
										src="img/cerchio_freccia_caricamento.svg"
										alt="cerchio"
										class="cerchio-icon" />
									<img src="img/iconX.svg" alt="x" class="x-icon" />
								</div>
								<div class="quadrati-popup">
									<img src="img/cerchio_caricamento_linee.svg" alt="linee" class="linee-icon" />
									<img src="img/iconX.svg" alt="x" class="x-icon" />
								</div>
							</div>
							<div class="button-container3">
								<button class="button_popup_icona">Carica Icona</button>
								<button class="button_popup_save">Salva</button>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
	<!-- <button class="button_feedback">SALVA MODIFICHE</button> -->
</div>

<style scoped>
	.backButton {
		position: absolute;
		top: 10px;
		font-size: 16px;
		cursor: pointer;
		text-decoration: underline;
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
</style>
