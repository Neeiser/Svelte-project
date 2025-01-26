<!DOCTYPE html>
<html lang="it-IT">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />

		<title>Pagina4</title>

		<link href="./global.css" rel="stylesheet" />
	</head>

	<body class="bicappFilesManagement">
		<header>
			<div class="sideContainer">
				<img src="img/logoenaming.svg" class="logo" />

				<div class="d-flex align-items-center">
					<span class="fs_14 fw_400">Salvato!</span>
					<img src="img/cloud.svg" class="ml-10" />
				</div>

				<div class="d-flex align-items-center">
					<img src="img/clock.svg" />
					<img src="img/Vector.png" class="pointer ml-10" />
				</div>

				<div class="d-flex align-items-center">
					<img src="img/back_arrow.svg" />
					<img src="img/forward_arrow.svg" />
					<img src="img/Vector.png" class="pointer ml-10" />
				</div>
			</div>
			<div class="d-flex align-items-center pointer">
				<span class="fs_20 fw_600">Nome progetto</span>
				<img src="img/Vector.png" class="ml-10" />
			</div>
			<div class="sideContainer">
				<img src="img/profile_picture.svg" class="pointer" />

				<img src="img/play.svg" class="pointer" />

				<img src="img/download.svg" class="pointer" />

				<button class="btn btn-secondary btn-small">
					<span>Esci</span>
					<img src="img/Vector.png" class="pointer ml-10" />
				</button>
			</div>
		</header>

		<div class="pageContainer">
			<div class="sideBar">
				<div class="tab top">
					<img src="img/stile.svg" />
					<span>Stile</span>
				</div>
				<div class="tab">
					<img src="img/pagine.svg" />
					<span>Pagine</span>
				</div>
				<div class="tab active">
					<img src="img/componi.svg" />
					<span>Componi</span>
				</div>
				<div class="tab">
					<img src="img/caricamenti.svg" />
					<span>Caricamenti</span>
				</div>
				<div class="tab">
					<img src="img/libreria.svg" />
					<span>Libreria</span>
				</div>
				<div class="tab">
					<img src="img/impostazioni.svg" />
					<span>Impostazioni</span>
				</div>
				<div class="tab"></div>
			</div>
			<div class="content">
				<div class="leftShoulder">
					<div class="d-flex">
						<h1>Feedback e Notifiche</h1>
						<img src="img/info.svg" class="infoPoint" />
					</div>

					<div class="section">
						<div class="accordion-item">
							<div class="accordion-header" onclick="toggleAccordion('feedback_testuale')">
								<a href="Pagina2new.html">
									<img src="img/freccia_sinistra.svg" class="accordion-arrow" />
								</a>
								<span>Feedback Testuale</span>
							</div>

							<div id="feedback_testuale" class="accordion-content">
								<button onclick="toggleButtonContent('messaggi_conferma', this)"
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
									<button class="btn-pers-testuale" style="margin-left: 40px;" onclick="showPopup()"
										>Personalizza testo
										<img src="img/iconpers_sound.svg" alt="icon" style="margin-left: 10px;" />
									</button>
								</div>

								<div id="popup" class="popup" style="width: 420px; height: 280px;">
									<div class="popup-content">
										<span class="close-btn" onclick="hidePopup()">&times;</span>
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
								<div class="popup-overlay" onclick="hidePopup()"></div>

								<button onclick="toggleButtonContent('messaggi_errore', this)"
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

									<button class="btn-pers-testuale" style="margin-left: 40px;" onclick="showPopup()"
										>Personalizza testo
										<img src="img/iconpers_sound.svg" alt="icon" style="margin-left: 10px;" />
									</button>
								</div>
								<div id="popup" class="popup" style="width: 420px; height: 280px;">
									<div class="popup-content">
										<span class="close-btn" onclick="hidePopup()">&times;</span>
										<div class="box-popup-testuale" id="box-popup-testuale">
											<textarea id="custom-text" style="width: 100%; height: 100%;"></textarea>
										</div>
										<button
											class="button_popup_save"
											style=" margin-left: 115px; background-color: #9F1349; color: #FFFDFE;"
											>Salva Testo</button>
									</div>
								</div>

								<button onclick="toggleButtonContent('messaggi_caricamento_attesa', this)"
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

									<button class="btn-pers-testuale" style="margin-left: 40px;" onclick="showPopup()"
										>Personalizza testo
										<img src="img/iconpers_sound.svg" alt="icon" style="margin-left: 10px;" />
									</button>
								</div>
								<div id="popup" class="popup" style="width: 420px; height: 280px;">
									<div class="popup-content">
										<span class="close-btn" onclick="hidePopup()">&times;</span>
										<div class="box-popup-testuale" id="box-popup-testuale">
											<textarea id="custom-text" style="width: 100%; height: 100%;"></textarea>
										</div>
										<button
											class="button_popup_save"
											style=" margin-left: 115px; background-color: #9F1349; color: #FFFDFE;"
											>Salva Testo</button>
									</div>
								</div>

								<button onclick="toggleButtonContent('messaggi_aiuto_supporto', this)"
									>Messaggi di Aiuto e Supporto
									<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
								</button>
								<div id="messaggi_aiuto_supporto" class="button-content">
									<div class="button-testuale">
										<select id="phrase-select" style="width: 50%; margin-left: 53px;">
											<option value="frase1"
												>Hai bisogno di assistenza? Siamo qui per aiutarti!</option>
											<option value="frase2"
												>Domande? Scopri le risposte nella nostra sezione di supporto</option>
											<option value="frase3"
												>Hai bisogno di supporto? Invia una segnalazione e ti risponderemo presto</option>
											<option value="frase4"
												>Qualcosa non va? Il nostro team di supporto è qui per te</option>
										</select>
									</div>

									<button
										class="btn-pers-testuale"
										style="margin-left: 85px; width: 60%;"
										onclick="showPopup()"
										>Personalizza testo
										<img src="img/iconpers_sound.svg" alt="icon" style="margin-left: 10px;" />
									</button>
								</div>
								<div id="popup" class="popup" style="width: 420px; height: 280px;">
									<div class="popup-content">
										<span class="close-btn" onclick="hidePopup()">&times;</span>
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
				<div class="centeredContent">
					<div class="mobilePreview"></div>

					<div class="pageNumberContainer">
						<span class="fw_400">1/5</span>
						<img src="img/Vector.png" class="ml-10" />
					</div>
					<div class="footer">
						<div class="d-flex align-items-center">
							<div class="zoom">
								<input id="zoom_input" type="range" min="0" max="100" step="1" />
							</div>
							<img src="img/griglia.svg" class="mx-55 pointer" />
							<img src="img/help.svg" class="pointer" />
						</div>
					</div>
				</div>
			</div>

			<script>
				function toggleAccordion(contentId, button) {
					const content = document.getElementById(contentId);
					const arrow = button.querySelector('.accordion-arrow');

					if (content.style.display === 'block') {
						content.style.display = 'none';
						arrow.src = 'img/freccia_basso.svg';
					} else {
						content.style.display = 'none';
						arrow.src = 'img/freccia_basso.svg';
					}
				}

				function toggleButtonContent(contentId, button) {
					const content = document.getElementById(contentId);
					const arrow = button.querySelector('.button-arrow');

					if (content.style.display === 'block') {
						content.style.display = 'none';
						arrow.src = 'img/freccia_alto.svg';
					} else {
						content.style.display = 'block';
						arrow.src = 'img/freccia_basso.svg';
					}
				}
			</script>

			<script>
				function toggleButtonContent(contentId, button) {
					const content = document.getElementById(contentId);
					const arrow = button.querySelector('.button-arrow');

					if (content.style.display === 'none' || content.style.display === '') {
						content.style.display = 'block';
						arrow.src = 'img/freccia_basso.svg'; // Cambia la freccia verso il basso
					} else {
						content.style.display = 'none';
						arrow.src = 'img/freccia_alto.svg'; // Cambia la freccia verso l'alto
					}
				}
			</script>

			<script>
				function updateMobilePreview(imageSrc) {
					const mobilePreviewDiv = document.querySelector('.mobilePreview');
					mobilePreviewDiv.innerHTML = `<img src="${imageSrc}" alt="Preview Image">`;
				}
			</script>

			<script>
				function showPopup() {
					document.getElementById('popup').style.display = 'block';
					document.querySelector('.popup-overlay').style.display = 'block';
					var popupBox = document.getElementById('box-popup-testuale');
				}

				function hidePopup() {
					document.getElementById('popup').style.display = 'none';
					document.querySelector('.popup-overlay').style.display = 'none';
				}

				function toggleAccordion(contentId, button) {
					const content = document.getElementById(contentId);
					const arrow = button.querySelector('.accordion-arrow');
				}
			</script>
		</div></body>
</html>
