<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<div class="leftShoulder">
	<h2 class="backButton" on:click={() => dispatch('closeFeedbackTestuale')}>Back</h2>
	<div class="d-flex">
		<h1>Feedback e Notifiche</h1>
		<img src="img/info.svg" class="infoPoint" />
	</div>

	<div class="section">
		<div class="accordion-item">
			<div class="accordion-header" on:click={() => toggleAccordion('feedback_testuale')}>
				<a href="Pagina2new.html">
					<img src="img/freccia_sinistra.svg" class="accordion-arrow" />
				</a>
				<span>Feedback Testuale</span>
			</div>

			<div id="feedback_testuale" class="accordion-content">
				<button on:click={() => toggleButtonContent('messaggi_conferma', this)}
					>Messaggi di conferma
					<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
				</button>

				<div id="messaggi_conferma" class="button-content" style="padding: 0; margin: 0;">
					<div class="button-testuale">
						<select id="phrase-select">
							<option value="frase1">Salvataggio dei dati avvenuto con successo</option>
							<option value="frase2">Procedi con l'eliminazione?</option>
							<option value="frase3">Sei sicuro di voler continuare?</option>
						</select>
					</div>
					<button class="btn-pers-testuale" style="margin-left: 40px;"
						>Personalizza testo
						<img src="img/iconpers_sound.svg" alt="icon" style="margin-left: 10px;" />
					</button>
				</div>

				<div id="popup" class="popup" style="width: 420px; height: 280px;">
					<div class="popup-content">
						<span class="close-btn">&times;</span>
						<div class="box-popup-testuale" id="box-popup-testuale">
							<textarea id="custom-text" style="width: 100%; height: 100%;"></textarea>
						</div>
						<button
							class="button_popup_save"
							style=" margin-left: 115px; background-color: #9F1349; color: #FFFDFE;"
							>Salva Testo</button>
					</div>
				</div>

				<!-- Overlay -->
				<div class="popup-overlay"></div>

				<button on:click={() => toggleButtonContent('messaggi_errore', this)}
					>Messaggi di errore
					<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
				</button>

				<div id="messaggi_errore" class="button-content">
					<div class="button-testuale">
						<select id="phrase-select">
							<option value="frase1">Errore nel caricamento, riprova più tardi</option>
							<option value="frase2">Caricamento non riuscito</option>
							<option value="frase3">Non è stato possibile effettuare l’operazione</option>
						</select>
					</div>

					<button class="btn-pers-testuale" style="margin-left: 40px;"
						>Personalizza testo
						<img src="img/iconpers_sound.svg" alt="icon" style="margin-left: 10px;" />
					</button>
				</div>
				<div id="popup" class="popup" style="width: 420px; height: 280px;">
					<div class="popup-content">
						<span class="close-btn">&times;</span>
						<div class="box-popup-testuale" id="box-popup-testuale">
							<textarea id="custom-text" style="width: 100%; height: 100%;"></textarea>
						</div>
						<button
							class="button_popup_save"
							style=" margin-left: 115px; background-color: #9F1349; color: #FFFDFE;"
							>Salva Testo</button>
					</div>
				</div>

				<button on:click={() => toggleButtonContent('messaggi_caricamento_attesa', this)}
					>Messaggi di caricamento e attesa
					<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
				</button>
				<div id="messaggi_caricamento_attesa" class="button-content">
					<div class="button-testuale">
						<select id="phrase-select">
							<option value="frase1">Stiamo elaborando la tua richiesta</option>
							<option value="frase2">Quasi fatto! Ci vuole ancora un attimo.</option>
							<option value="frase3">Caricamento in corso</option>
							<option value="frase4">Attendere prego</option>
						</select>
					</div>

					<button class="btn-pers-testuale" style="margin-left: 40px;"
						>Personalizza testo
						<img src="img/iconpers_sound.svg" alt="icon" style="margin-left: 10px;" />
					</button>
				</div>
				<div id="popup" class="popup" style="width: 420px; height: 280px;">
					<div class="popup-content">
						<span class="close-btn">&times;</span>
						<div class="box-popup-testuale" id="box-popup-testuale">
							<textarea id="custom-text" style="width: 100%; height: 100%;"></textarea>
						</div>
						<button
							class="button_popup_save"
							style=" margin-left: 115px; background-color: #9F1349; color: #FFFDFE;"
							>Salva Testo</button>
					</div>
				</div>

				<button on:click={() => toggleButtonContent('messaggi_aiuto_supporto', this)}
					>Messaggi di Aiuto e Supporto
					<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
				</button>
				<div id="messaggi_aiuto_supporto" class="button-content">
					<div class="button-testuale">
						<select id="phrase-select" style="width: 50%; margin-left: 53px;">
							<option value="frase1">Hai bisogno di assistenza? Siamo qui per aiutarti!</option>
							<option value="frase2"
								>Domande? Scopri le risposte nella nostra sezione di supporto</option>
							<option value="frase3"
								>Hai bisogno di supporto? Invia una segnalazione e ti risponderemo presto</option>
							<option value="frase4"
								>Qualcosa non va? Il nostro team di supporto è qui per te</option>
						</select>
					</div>

					<button class="btn-pers-testuale" style="margin-left: 85px; width: 60%;"
						>Personalizza testo
						<img src="img/iconpers_sound.svg" alt="icon" style="margin-left: 10px;" />
					</button>
				</div>
				<div id="popup" class="popup" style="width: 420px; height: 280px;">
					<div class="popup-content">
						<span class="close-btn">&times;</span>
						<div class="box-popup-testuale" id="box-popup-testuale">
							<textarea id="custom-text" style="width: 100%; height: 100%;"></textarea>
						</div>
						<button
							class="button_popup_save"
							style=" margin-left: 115px; background-color: #9F1349; color: #FFFDFE;"
							>Salva Testo</button>
					</div>
				</div>
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
