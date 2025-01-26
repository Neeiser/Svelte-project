<!DOCTYPE html>
<html lang="it-IT">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />

		<title>Pagina5</title>

		<link href="./global.css" rel="stylesheet" />
	</head>

	<body class="bicappFilesManagement">
		<header>
			<div class="sideContainer">
				<a href="/">
					<img alt="" src="img/logoenaming.svg" class="logo" />
				</a>

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
							<div class="accordion-header" onclick="toggleAccordion('feedback_visivo')">
								<a href="Pagina2new.html">
									<img src="img/freccia_sinistra.svg" class="accordion-arrow" />
								</a>
								<span>Feedback Sonoro</span>
							</div>
							<div id="feedback_sonoro" class="accordion-content">
								<button onclick="toggleButtonContent('suono_conferma', this)"
									>Suono di conferma
									<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
								</button>

								<div id="suono_conferma" class="button-content">
									<div class="button-group">
										<div class="button-container2">
											<button onclick="updateMobilePreview('img/Nota_musicale.svg')">
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
											<button onclick="updateMobilePreview('img/Nota_musicale.svg')">
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
											<button onclick="updateMobilePreview('img/Nota_musicale.svg')">
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
										<button class="other-btn" onclick="showPopup()">Altre opzioni</button>
									</div>
								</div>

								<div id="popup" class="popup">
									<div class="popup-content">
										<span class="close-btn" onclick="hidePopup()">&times;</span>
										<div class="popup-flex-container">
											<div class="quadrati-popup">
												<img
													src="img/Nota_musicale.svg"
													alt="nota_musicale"
													class="clessidra-icon" />
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
								<div class="popup-overlay" onclick="hidePopup()"></div>

								<button onclick="toggleButtonContent('suono_errore', this)"
									>Suono di errore
									<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
								</button>

								<div id="suono_errore" class="button-content">
									<div class="button-group">
										<div class="button-container2">
											<button onclick="updateMobilePreview('img/Nota_musicale.svg')">
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
											<button onclick="updateMobilePreview('img/Nota_musicale.svg')">
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
											<button onclick="updateMobilePreview('img/Nota_musicale.svg')">
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
										<button class="other-btn" onclick="showPopup()">Altre opzioni</button>
									</div>
								</div>

								<div id="popup" class="popup">
									<div class="popup-content">
										<span class="close-btn" onclick="hidePopup()">&times;</span>
										<div class="popup-flex-container">
											<div class="quadrati-popup">
												<img
													src="img/Nota_musicale.svg"
													alt="nota_musicale"
													class="clessidra-icon" />
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
								<div class="popup-overlay" onclick="hidePopup()"></div>

								<button onclick="toggleButtonContent('suono_notifica', this)"
									>Suono di notifica
									<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
								</button>
								<div id="suono_notifica" class="button-content">
									<div class="button-group">
										<div class="button-container2">
											<button onclick="updateMobilePreview('img/Nota_musicale.svg')">
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
											<button onclick="updateMobilePreview('img/Nota_musicale.svg')">
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
											<button onclick="updateMobilePreview('img/Nota_musicale.svg')">
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
										<button class="other-btn" onclick="showPopup()">Altre opzioni</button>
									</div>
								</div>

								<div id="popup" class="popup">
									<div class="popup-content">
										<span class="close-btn" onclick="hidePopup()">&times;</span>
										<div class="popup-flex-container">
											<div class="quadrati-popup">
												<img
													src="img/Nota_musicale.svg"
													alt="nota_musicale"
													class="clessidra-icon" />
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
								<div class="popup-overlay" onclick="hidePopup()"></div>

								<button onclick="toggleButtonContent('suono_avviso', this)"
									>Suono di avviso
									<img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow" />
								</button>
								<div id="suono_avviso" class="button-content">
									<div class="button-group">
										<div class="button-container2">
											<button onclick="updateMobilePreview('img/Nota_musicale.svg')">
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
											<button onclick="updateMobilePreview('img/Nota_musicale.svg')">
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
											<button onclick="updateMobilePreview('img/Nota_musicale.svg')">
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
										<button class="other-btn" onclick="showPopup()">Altre opzioni</button>
									</div>
								</div>
								<div id="popup" class="popup">
									<div class="popup-content">
										<span class="close-btn" onclick="hidePopup()">&times;</span>
										<div class="popup-flex-container">
											<div class="quadrati-popup">
												<img
													src="img/Nota_musicale.svg"
													alt="nota_musicale"
													class="clessidra-icon" />
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
								<div class="popup-overlay" onclick="hidePopup()"></div>
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
