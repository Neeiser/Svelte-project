<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import { savedIcons, updateIconDescription } from '../../stores/store';
	let showModal = false;
	let selectedIconId = null;

	function openModal() {
		showModal = true;
	}

	function closeModal() {
		showModal = false;
	}

	let icons = [];
	savedIcons.subscribe((value) => {
		icons = value;
	});

	let accordionStates = {
		suonoConferma: false,
		suonoErrore: false,
		suonoNotifica: false,
		suonoAvviso: false,
	};

	function toggleAccordion(id) {
		if (accordionStates[id]) {
			accordionStates[id] = false;
		} else {
			Object.keys(accordionStates).forEach((key) => {
				accordionStates[key] = false;
			});
			accordionStates[id] = true;
		}
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
					<button on:click={closeModal}>Salva</button>
					<button on:click={closeModal}>Annulla</button>
				</div>
			</div>
		</div>
	{/if}
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
								<button on:click={() => openModal()}>
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
								<button on:click={() => openModal()}>
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
								<button on:click={() => openModal()}>
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
								<button on:click={() => openModal()}>
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
								<button on:click={() => openModal()}>
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
								<button on:click={() => openModal()}>
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
								<button on:click={() => openModal()}>
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
								<button on:click={() => openModal()}>
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
								<button on:click={() => openModal()}>
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
								<button on:click={() => openModal()}>
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
								<button on:click={() => openModal()}>
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
								<button on:click={() => openModal()}>
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
</style>
