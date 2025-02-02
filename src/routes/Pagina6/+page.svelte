<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<div class="leftShoulder">
	<h2 class="backButton" on:click={() => dispatch('closeFeedbackTattile')}>Back</h2>
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
				<span>Feedback Tattile</span>
			</div>
			<div id="feedback_tattile" class="accordion-content">
				<button on:click={() => toggleButtonContent('vibrazione', this)}
					>Vibrazione
					<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
				</button>

				<div id="vibrazione" class="button-content">
					<div class="button-group">
						<button on:click={() => updateMobilePreview('img/Vibrazione')}>
							<img src="img/Vibrazione.svg" alt="icon" />
						</button>
						<button on:click={() => updateMobilePreview('img/Vibrazione.svg')}>
							<img src="img/Vibrazione.svg" alt="icon" />
						</button>
						<button on:click={() => updateMobilePreview('img/cerchio_caricamento_linee.svg')}>
							<img src="img/Vibrazione.svg" alt="icon" />
						</button>
					</div>
				</div>

				<button on:click={() => toggleButtonContent('pulsante_simulato', this)}
					>Pulsante simulato
					<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
				</button>
				<div id="pulsante_simulato" class="button-content">
					<div class="button-group">
						<button on:click={() => updateMobilePreview('img/Vibrazione.svg')}>
							<img src="img/Vibrazione.svg" alt="icon" />
						</button>
						<button on:click={() => updateMobilePreview('img/Vibrazione.svg')}>
							<img src="img/Vibrazione.svg" alt="icon" />
						</button>
						<button on:click={() => updateMobilePreview('img/Vibrazione.svg')}>
							<img src="img/Vibrazione.svg" alt="icon" />
						</button>
					</div>
				</div>
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
