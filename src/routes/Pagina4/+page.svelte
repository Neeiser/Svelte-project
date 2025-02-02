<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	// Stati per tenere traccia di quali sezioni sono aperte
	let sections = {
		messaggi_conferma: false,
		messaggi_errore: false,
		messaggi_caricamento_attesa: false,
		messaggi_aiuto_supporto: false,
	};

	function toggleButtonContent(section) {
		sections = {
			...sections,
			[section]: !sections[section], // Inverte lo stato della sezione specifica
		};
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
						<div class="button-testuale">
							<select>
								<option>Salvataggio dei dati avvenuto con successo</option>
								<option>Procedi con l'eliminazione?</option>
								<option>Sei sicuro di voler continuare?</option>
							</select>
						</div>
						<button class="btn-pers-testuale">Personalizza testo</button>
					</div>
				{/if}

				<!-- Messaggi di Errore -->
				<button class="buttonStyleWide" on:click={() => toggleButtonContent('messaggi_errore')}>
					Messaggi di errore
					<img src="img/freccia_alto.svg" alt="freccia" class="button-arrow" />
				</button>
				{#if sections.messaggi_errore}
					<div class="button-content messaggi_style">
						<div class="button-testuale">
							<select>
								<option>Errore nel caricamento, riprova più tardi</option>
								<option>Caricamento non riuscito</option>
								<option>Non è stato possibile effettuare l’operazione</option>
							</select>
						</div>
						<button class="btn-pers-testuale">Personalizza testo</button>
					</div>
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
						<div class="button-testuale">
							<select>
								<option>Stiamo elaborando la tua richiesta</option>
								<option>Quasi fatto! Ci vuole ancora un attimo.</option>
								<option>Caricamento in corso</option>
								<option>Attendere prego</option>
							</select>
						</div>
						<button class="btn-pers-testuale">Personalizza testo</button>
					</div>
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
						<div class="button-testuale">
							<select>
								<option>Hai bisogno di assistenza? Siamo qui per aiutarti!</option>
								<option>Domande? Scopri le risposte nella nostra sezione di supporto</option>
								<option
									>Hai bisogno di supporto? Invia una segnalazione e ti risponderemo presto</option>
								<option>Qualcosa non va? Il nostro team di supporto è qui per te</option>
							</select>
						</div>
						<button class="btn-pers-testuale">Personalizza testo</button>
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

	.messaggi_style {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		padding: 12px 0px;
	}
</style>
