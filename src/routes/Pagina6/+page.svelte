<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

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
</script>

<div class="leftShoulder">
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
						<div class="button-group">
							<button on:click={() => updateMobilePreview('img/Vibrazione')}>
								<img src="img/icon_intensità_bassa.svg" alt="icon" />
							</button>
							<button on:click={() => updateMobilePreview('img/Vibrazione.svg')}>
								<img src="img/icon_intensità_media.svg" alt="icon" />
							</button>
							<button on:click={() => updateMobilePreview('img/cerchio_caricamento_linee.svg')}>
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
						<div class="button-group">
							<button on:click={() => updateMobilePreview('img/Vibrazione.svg')}>
								<img src="img/1_intervallo.svg" alt="icon" />
							</button>
							<button on:click={() => updateMobilePreview('img/Vibrazione.svg')}>
								<img src="img/2_intervallo.svg" alt="icon" />
							</button>
							<button on:click={() => updateMobilePreview('img/Vibrazione.svg')}>
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
</style>
