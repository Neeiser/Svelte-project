<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let accordionStates = {
		suonoConferma: false,
		suonoErrore: false,
		suonoNotifica: false,
		suonoAvviso: false,
	};

	function toggleAccordion(id) {
		accordionStates[id] = !accordionStates[id];
	}
</script>

<div class="leftShoulder">
	<h2 class="backButton" on:click={() => dispatch('closeFeedbackSonoro')}>
		<img src="img/freccia_sinistra.svg" class="accordion-arrow" />Back
	</h2>
	<div class="d-flex">
		<h1>Feedback e Notifiche</h1>
		<img src="img/info.svg" class="infoPoint" />
	</div>

	<div class="sectionPage5">
		<div class="accordion-item">
			<div id="feedback_sonoro" class="accordion-content">
				<button class="buttonStyleWide" on:click={() => toggleAccordion('suonoConferma')}
					>Suono di conferma
					<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
				</button>
				{#if accordionStates.suonoConferma}
					<div id="suono_conferma" class="button-content suono_style">
						<div class="button-group">
							<div class="button-container2">
								<button on:click={() => updateMobilePreview('img/Nota_musicale.svg')}>
									<img src="img/Nota_musicale.svg" alt="icon" />
								</button>
								<div class="volume-control-container" style="margin-left:2px;">
									<div class="volume-control">
										<img src="img/volume_low.svg" alt="volume-low" class="volume-icon" />
										<input
											type="range"
											min="0"
											max="100"
											value="50"
											class="slider"
											id="volume-slider" />
										<img src="img/volume_high.svg" alt="volume-high" class="volume-icon" />
									</div>
								</div>
							</div>

							<div class="button-container2">
								<button on:click={() => updateMobilePreview('img/Nota_musicale.svg')}>
									<img src="img/Nota_musicale.svg" alt="icon" />
								</button>
								<div class="volume-control-container" style="margin-left: 2px;">
									<div class="volume-control">
										<img src="img/volume_low.svg" alt="volume-low" class="volume-icon" />
										<input
											type="range"
											min="0"
											max="100"
											value="50"
											class="slider"
											id="volume-slider" />
										<img src="img/volume_high.svg" alt="volume-high" class="volume-icon" />
									</div>
								</div>
							</div>

							<div class="button-container2">
								<button on:click={() => updateMobilePreview('img/Nota_musicale.svg')}>
									<img src="img/Nota_musicale.svg" alt="icon" />
								</button>
								<div class="volume-control-container" style="margin-left: 2px;">
									<div class="volume-control">
										<img src="img/volume_low.svg" alt="volume-low" class="volume-icon" />
										<input
											type="range"
											min="0"
											max="100"
											value="50"
											class="slider"
											id="volume-slider" />
										<img src="img/volume_high.svg" alt="volume-high" class="volume-icon" />
									</div>
								</div>
							</div>
						</div>

						<div
							class="button-container-btn-other"
							style=" justify-content: center; margin-left: 40px;">
							<button class="other-btn">Altre opzioni</button>
						</div>
					</div>
				{/if}

				<div id="popup" class="popup">
					<div class="popup-content">
						<span class="close-btn">&times;</span>
						<div class="popup-flex-container">
							<div class="quadrati-popup">
								<img src="img/Nota_musicale.svg" alt="nota_musicale" class="clessidra-icon" />
								<img src="img/Icon.svg" alt="x" class="x-icon" />
							</div>
							<div class="quadrati-popup">
								<img src="img/Nota_musicale.svg" alt="nota_musicale" class="cerchio-icon" />
								<img src="img/Icon.svg" alt="x" class="x-icon" />
							</div>
							<div class="quadrati-popup">
								<img src="img/Nota_musicale.svg" alt="nota_musicale" class="linee-icon" />
								<img src="img/Icon.svg" alt="x" class="x-icon" />
							</div>
						</div>
						<div class="button-container3">
							<button class="button_popup_icona">Carica suono</button>
							<button class="button_popup_save">Salva</button>
						</div>
					</div>
				</div>

				<!-- Overlay -->
				<div class="popup-overlay"></div>

				<button class="buttonStyleWide" on:click={() => toggleAccordion('suonoErrore')}
					>Suono di errore
					<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
				</button>

				{#if accordionStates.suonoErrore}
					<div id="suono_errore" class="button-content suono_style">
						<div class="button-group">
							<div class="button-container2">
								<button on:click={() => updateMobilePreview('img/Nota_musicale.svg')}>
									<img src="img/Nota_musicale.svg" alt="icon" />
								</button>
								<div class="volume-control-container" style="margin-left:2px;">
									<div class="volume-control">
										<img src="img/volume_low.svg" alt="volume-low" class="volume-icon" />
										<input
											type="range"
											min="0"
											max="100"
											value="50"
											class="slider"
											id="volume-slider" />
										<img src="img/volume_high.svg" alt="volume-high" class="volume-icon" />
									</div>
								</div>
							</div>

							<div class="button-container2">
								<button on:click={() => updateMobilePreview('img/Nota_musicale.svg')}>
									<img src="img/Nota_musicale.svg" alt="icon" />
								</button>
								<div class="volume-control-container" style="margin-left:2px;">
									<div class="volume-control">
										<img src="img/volume_low.svg" alt="volume-low" class="volume-icon" />
										<input
											type="range"
											min="0"
											max="100"
											value="50"
											class="slider"
											id="volume-slider" />
										<img src="img/volume_high.svg" alt="volume-high" class="volume-icon" />
									</div>
								</div>
							</div>

							<div class="button-container2">
								<button on:click={() => updateMobilePreview('img/Nota_musicale.svg')}>
									<img src="img/Nota_musicale.svg" alt="icon" />
								</button>
								<div class="volume-control-container" style="margin-left:2px;">
									<div class="volume-control">
										<img src="img/volume_low.svg" alt="volume-low" class="volume-icon" />
										<input
											type="range"
											min="0"
											max="100"
											value="50"
											class="slider"
											id="volume-slider" />
										<img src="img/volume_high.svg" alt="volume-high" class="volume-icon" />
									</div>
								</div>
							</div>
						</div>
						<div
							class="button-container-btn-other"
							style=" justify-content: center; margin-left: 40px;">
							<button class="other-btn">Altre opzioni</button>
						</div>
					</div>
				{/if}

				<div id="popup" class="popup">
					<div class="popup-content">
						<span class="close-btn">&times;</span>
						<div class="popup-flex-container">
							<div class="quadrati-popup">
								<img src="img/Nota_musicale.svg" alt="nota_musicale" class="clessidra-icon" />
								<img src="img/Icon.svg" alt="x" class="x-icon" />
							</div>
							<div class="quadrati-popup">
								<img src="img/Nota_musicale.svg" alt="nota_musicale" class="cerchio-icon" />
								<img src="img/Icon.svg" alt="x" class="x-icon" />
							</div>
							<div class="quadrati-popup">
								<img src="img/Nota_musicale.svg" alt="nota_musicale" class="linee-icon" />
								<img src="img/Icon.svg" alt="x" class="x-icon" />
							</div>
						</div>
						<div class="button-container3">
							<button class="button_popup_icona">Carica suono</button>
							<button class="button_popup_save">Salva</button>
						</div>
					</div>
				</div>

				<!-- Overlay -->
				<div class="popup-overlay"></div>

				<button class="buttonStyleWide" on:click={() => toggleAccordion('suonoNotifica')}
					>Suono di notifica
					<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
				</button>
				{#if accordionStates.suonoNotifica}
					<div id="suono_notifica" class="button-content suono_style">
						<div class="button-group">
							<div class="button-container2">
								<button on:click={() => updateMobilePreview('img/Nota_musicale.svg')}>
									<img src="img/Nota_musicale.svg" alt="icon" />
								</button>
								<div class="volume-control-container" style="margin-left:2px;">
									<div class="volume-control">
										<img src="img/volume_low.svg" alt="volume-low" class="volume-icon" />
										<input
											type="range"
											min="0"
											max="100"
											value="50"
											class="slider"
											id="volume-slider" />
										<img src="img/volume_high.svg" alt="volume-high" class="volume-icon" />
									</div>
								</div>
							</div>

							<div class="button-container2">
								<button on:click={() => updateMobilePreview('img/Nota_musicale.svg')}>
									<img src="img/Nota_musicale.svg" alt="icon" />
								</button>
								<div class="volume-control-container" style="margin-left:2px;">
									<div class="volume-control">
										<img src="img/volume_low.svg" alt="volume-low" class="volume-icon" />
										<input
											type="range"
											min="0"
											max="100"
											value="50"
											class="slider"
											id="volume-slider" />
										<img src="img/volume_high.svg" alt="volume-high" class="volume-icon" />
									</div>
								</div>
							</div>

							<div class="button-container2">
								<button on:click={() => updateMobilePreview('img/Nota_musicale.svg')}>
									<img src="img/Nota_musicale.svg" alt="icon" />
								</button>
								<div class="volume-control-container" style="margin-left:2px;">
									<div class="volume-control">
										<img src="img/volume_low.svg" alt="volume-low" class="volume-icon" />
										<input
											type="range"
											min="0"
											max="100"
											value="50"
											class="slider"
											id="volume-slider" />
										<img src="img/volume_high.svg" alt="volume-high" class="volume-icon" />
									</div>
								</div>
							</div>
						</div>
						<div
							class="button-container-btn-other"
							style=" justify-content: center; margin-left: 40px;">
							<button class="other-btn">Altre opzioni</button>
						</div>
					</div>
				{/if}

				<div id="popup" class="popup">
					<div class="popup-content">
						<span class="close-btn">&times;</span>
						<div class="popup-flex-container">
							<div class="quadrati-popup">
								<img src="img/Nota_musicale.svg" alt="nota_musicale" class="clessidra-icon" />
								<img src="img/Icon.svg" alt="x" class="x-icon" />
							</div>
							<div class="quadrati-popup">
								<img src="img/Nota_musicale.svg" alt="nota_musicale" class="cerchio-icon" />
								<img src="img/Icon.svg" alt="x" class="x-icon" />
							</div>
							<div class="quadrati-popup">
								<img src="img/Nota_musicale.svg" alt="nota_musicale" class="linee-icon" />
								<img src="img/Icon.svg" alt="x" class="x-icon" />
							</div>
						</div>
						<div class="button-container3">
							<button class="button_popup_icona">Carica suono</button>
							<button class="button_popup_save">Salva</button>
						</div>
					</div>
				</div>

				<!-- Overlay -->
				<div class="popup-overlay"></div>

				<button class="buttonStyleWide" on:click={() => toggleAccordion('suonoAvviso')}
					>Suono di avviso
					<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
				</button>
				{#if accordionStates.suonoAvviso}
					<div id="suono_avviso" class="button-content suono_style">
						<div class="button-group">
							<div class="button-container2">
								<button on:click={() => updateMobilePreview('img/Nota_musicale.svg')}>
									<img src="img/Nota_musicale.svg" alt="icon" />
								</button>
								<div class="volume-control-container" style="margin-left:2px;">
									<div class="volume-control">
										<img src="img/volume_low.svg" alt="volume-low" class="volume-icon" />
										<input
											type="range"
											min="0"
											max="100"
											value="50"
											class="slider"
											id="volume-slider" />
										<img src="img/volume_high.svg" alt="volume-high" class="volume-icon" />
									</div>
								</div>
							</div>

							<div class="button-container2">
								<button on:click={() => updateMobilePreview('img/Nota_musicale.svg')}>
									<img src="img/Nota_musicale.svg" alt="icon" />
								</button>
								<div class="volume-control-container" style="margin-left:2px;">
									<div class="volume-control">
										<img src="img/volume_low.svg" alt="volume-low" class="volume-icon" />
										<input
											type="range"
											min="0"
											max="100"
											value="50"
											class="slider"
											id="volume-slider" />
										<img src="img/volume_high.svg" alt="volume-high" class="volume-icon" />
									</div>
								</div>
							</div>

							<div class="button-container2">
								<button on:click={() => updateMobilePreview('img/Nota_musicale.svg')}>
									<img src="img/Nota_musicale.svg" alt="icon" />
								</button>
								<div class="volume-control-container" style="margin-left:2px;">
									<div class="volume-control">
										<img src="img/volume_low.svg" alt="volume-low" class="volume-icon" />
										<input
											type="range"
											min="0"
											max="100"
											value="50"
											class="slider"
											id="volume-slider" />
										<img src="img/volume_high.svg" alt="volume-high" class="volume-icon" />
									</div>
								</div>
							</div>
						</div>
						<div
							class="button-container-btn-other"
							style=" justify-content: center; margin-left: 40px;">
							<button class="other-btn">Altre opzioni</button>
						</div>
					</div>
				{/if}
				<div id="popup" class="popup">
					<div class="popup-content">
						<span class="close-btn">&times;</span>
						<div class="popup-flex-container">
							<div class="quadrati-popup">
								<img src="img/Nota_musicale.svg" alt="nota_musicale" class="clessidra-icon" />
								<img src="img/Icon.svg" alt="x" class="x-icon" />
							</div>
							<div class="quadrati-popup">
								<img src="img/Nota_musicale.svg" alt="nota_musicale" class="cerchio-icon" />
								<img src="img/Icon.svg" alt="x" class="x-icon" />
							</div>
							<div class="quadrati-popup">
								<img src="img/Nota_musicale.svg" alt="nota_musicale" class="linee-icon" />
								<img src="img/Icon.svg" alt="x" class="x-icon" />
							</div>
						</div>
						<div class="button-container3">
							<button class="button_popup_icona">Carica suono</button>
							<button class="button_popup_save">Salva</button>
						</div>
					</div>
				</div>

				<!-- Overlay -->
				<div class="popup-overlay"></div>
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

	.sectionPage5 {
		overflow: auto;
		height: calc(100vh - 200px);
	}

	.buttonStyleWide {
		padding: 10px;
		margin: 10px;
		width: 75%;
	}

	#feedback_sonoro {
		align-items: center;
	}

	.suono_style {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		padding: 12px 0px;
	}
</style>
