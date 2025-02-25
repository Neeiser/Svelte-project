<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import { savedIcons, updateIconDescription } from '../../stores/store';
	let showVibrazione = false;
	let showPulsanteSimulato = false;

	function toggleVibrazione() {
		showVibrazione = !showVibrazione;
		console.log('Vibrazione:', showVibrazione);
	}

	function togglePulsanteSimulato() {
		showPulsanteSimulato = !showPulsanteSimulato;
		console.log('Pulsante Simulato:', showPulsanteSimulato);
	}
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

	<h2 class="backButton" on:click={() => dispatch('closeFeedbackTattile')}>
		<img src="img/freccia_sinistra.svg" class="accordion-arrow" />Back
	</h2>
	<div class="d-flex">
		<h1>Feedback e Notifiche</h1>
		<img src="img/info.svg" class="infoPoint" />
	</div>

	<div class="sectionPage6">
		<div class="accordion-item">
			<div id="feedback_tattile" class="accordion-content">
				<button class="buttonStyleWide" on:click={toggleVibrazione}>
					Intensità vibrazione
					<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
				</button>

				{#if showVibrazione}
					<div id="vibrazione" class="button-content tattile_style">
						<div class="button-group" style="gap: 20px; background-color: #FFFDFE;">
							<button on:click={() => openModal()}>
								<img src="img/icon_intensità_bassa.svg" alt="icon" />
							</button>
							<button on:click={() => openModal()}>
								<img src="img/icon_intensità_media.svg" alt="icon" />
							</button>
							<button on:click={() => openModal()}>
								<img src="img/icon_intensità_alta.svg" alt="icon" />
							</button>
						</div>
					</div>
				{/if}

				<button class="buttonStyleWide" on:click={togglePulsanteSimulato}>
					Intervallo vibrazione
					<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
				</button>

				{#if showPulsanteSimulato}
					<div id="pulsante_simulato" class="button-content tattile_style">
						<div class="button-group" style="gap: 20px;">
							<button on:click={() => openModal()}>
								<img src="img/1_intervallo.svg" alt="icon" />
							</button>
							<button on:click={() => openModal()}>
								<img src="img/2_intervallo.svg" alt="icon" />
							</button>
							<button on:click={() => openModal()}>
								<img src="img/3_intervallo.svg" alt="icon" />
							</button>
						</div>
					</div>
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

	.sectionPage6 {
		overflow: auto;
		height: calc(100vh - 200px);
	}

	.buttonStyleWide {
		padding: 10px;
		margin: 10px;
		width: 75%;
	}

	#feedback_tattile {
		align-items: center;
	}

	.tattile_style {
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
