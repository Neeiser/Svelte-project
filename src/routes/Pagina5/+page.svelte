<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<div class="leftShoulder">
	<h2 class="backButton" on:click={() => dispatch('closeFeedbackSonoro')}>Back</h2>
	<div class="d-flex">
		<h1>Feedback e Notifiche</h1>
		<img src="img/info.svg" class="infoPoint" />
	</div>

	<div class="section">
		<div class="accordion-item">
			<div class="accordion-header" on:click={() => toggleAccordion('feedback_visivo')}>
				<a href="Pagina2new.html">
					<img src="img/freccia_sinistra.svg" class="accordion-arrow" />
				</a>
				<span>Feedback Sonoro</span>
			</div>
			<div id="feedback_sonoro" class="accordion-content">
				<button on:click={() => toggleButtonContent('suono_conferma', this)}
					>Suono di conferma
					<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
				</button>

				<div id="suono_conferma" class="button-content">
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

				<button on:click={() => toggleButtonContent('suono_errore', this)}
					>Suono di errore
					<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
				</button>

				<div id="suono_errore" class="button-content">
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

				<button on:click={() => toggleButtonContent('suono_notifica', this)}
					>Suono di notifica
					<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
				</button>
				<div id="suono_notifica" class="button-content">
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

				<button on:click={() => toggleButtonContent('suono_avviso', this)}
					>Suono di avviso
					<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
				</button>
				<div id="suono_avviso" class="button-content">
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
	<button class="button_feedback">SALVA MODIFICHE</button>
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
</style>
