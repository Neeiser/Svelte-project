<!DOCTYPE html>
<html lang="it-IT">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Pagina6</title>

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
                            <div class="accordion-header" onclick="toggleAccordion('feedback_visivo')">
                                <a href="Pagina2new.html">
                                    <img src="img/freccia_sinistra.svg" class="accordion-arrow" />
                                </a>
                                <span>Feedback Tattile</span>
                            </div>
                            <div id="feedback_tattile" class="accordion-content">
                                <button onclick="toggleButtonContent('vibrazione', this)">Vibrazione
                                    <img src="img/freccia_alto.svg" alt="freccia2" class= "button-arrow">
                                </button>
                               
                                <div id="vibrazione" class="button-content">
                                    <div class="button-group">
                                        <button onclick="updateMobilePreview('img/Vibrazione')">
                                           <img src="img/Vibrazione.svg" alt="icon">
                                        </button>
                                        <button onclick="updateMobilePreview('img/Vibrazione.svg')">
                                            <img src="img/Vibrazione.svg" alt="icon">
                                        </button>
                                        <button onclick="updateMobilePreview('img/cerchio_caricamento_linee.svg')">
                                            <img src="img/Vibrazione.svg" alt="icon">
                                        </button>
                                    </div>
                                        
                                       
                                </div>
                                
                                
                                <button onclick="toggleButtonContent('pulsante_simulato', this)">Pulsante simulato
                                    <img src="img/freccia_alto.svg" alt="freccia2" class= "button-arrow">
                                </button>
                                <div id="pulsante_simulato" class="button-content">
                                    <div class="button-group">
                                        <button onclick="updateMobilePreview('img/Vibrazione.svg')">
                                            <img src="img/Vibrazione.svg" alt="icon">
                                        </button>
                                        <button onclick="updateMobilePreview('img/Vibrazione.svg')">
                                            <img src="img/Vibrazione.svg" alt="icon">
                                        </button>
                                        <button onclick="updateMobilePreview('img/Vibrazione.svg')">
                                            <img src="img/Vibrazione.svg" alt="icon">
                                        </button>
                                    </div>
                                        
                                </div>
                                
                                
                                
                                
                            </div>
                        

                       
                            
                               
                            

                        

                                           
                    </div>
                       
                   
                </div>
                    <button class="button_feedback">SALVA MODIFICHE</button>
                
                
                
            </div>
            <div class="centeredContent">
                <div class="mobilePreview">
                </div>

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
                    arrow.src = "img/freccia_basso.svg";
                } else {
                    content.style.display = 'none';
                    arrow.src = "img/freccia_basso.svg";
                }
            }

            function toggleButtonContent(contentId, button) {
                const content = document.getElementById(contentId);
                const arrow = button.querySelector('.button-arrow');
            
            if (content.style.display === 'block') {
                content.style.display = 'none';
                arrow.src = "img/freccia_alto.svg";
            } else {
                content.style.display = 'block';
                arrow.src = "img/freccia_basso.svg";
                }
            }
        </script>
        
        <script>
            function toggleButtonContent(contentId, button) {
                const content = document.getElementById(contentId);
                const arrow = button.querySelector('.button-arrow');
                
                if (content.style.display === "none" || content.style.display === "") {
                    content.style.display = "block";
                    arrow.src = "img/freccia_basso.svg"; // Cambia la freccia verso il basso
                } else {
                    content.style.display = "none";
                    arrow.src = "img/freccia_alto.svg"; // Cambia la freccia verso l'alto
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
            
    </body>
</html>

