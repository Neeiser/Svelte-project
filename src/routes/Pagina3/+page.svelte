
<script>
    let activeSection = 'feedback_visivo';
    let activeButton = '';
    let mobilePreviewSrc = '';

    const toggleAccordion = (sectionId) => {
        activeSection = activeSection === sectionId ? '' : sectionId;
    };

    const toggleButtonContent = (buttonId) => {
        activeButton = activeButton === buttonId ? '' : buttonId;
    };

    const updateMobilePreview = (src) => {
        mobilePreviewSrc = src;
    };

    let showPopup = () => {
        showPopup = true;
    };

    const hidePopup = () => {
        showPopup = false;
    };
/*      toggleAccordion(contentId, button) {
                const content = document.getElementById(contentId);
                const arrow = button.querySelector('.accordion-arrow');

                if (content.style.display === 'block') {
                    content.style.display = 'none'; 
                    arrow.src = "img/freccia_basso.svg";
                } else {
                    content.style.display = 'none';
                    arrow.src = "img/freccia_basso.svg";
                }
            };

             toggleButtonContent(contentId, button) {
                const content = document.getElementById(contentId);
                const arrow = button.querySelector('.button-arrow');
            
            if (content.style.display === 'block') {
                content.style.display = 'none';
                arrow.src = "img/freccia_alto.svg";
            } else {
                content.style.display = 'block';
                arrow.src = "img/freccia_basso.svg";
                }
            };
            toggleButtonContent(contentId, button) {
                const content = document.getElementById(contentId);
                const arrow = button.querySelector('.button-arrow');
                
                if (content.style.display === "none" || content.style.display === "") {
                    content.style.display = "block";
                    arrow.src = "img/freccia_basso.svg"; // Cambia la freccia verso il basso
                } else {
                    content.style.display = "none";
                    arrow.src = "img/freccia_alto.svg"; // Cambia la freccia verso l'alto
                }
            };
            updateMobilePreview(imageSrc) {
                const mobilePreviewDiv = document.querySelector('.mobilePreview');
                mobilePreviewDiv.innerHTML = `<img src="${imageSrc}" alt="Preview Image">`;
            };
            showPopup() {
                document.getElementById('popup').style.display = 'block';
                document.querySelector('.popup-overlay').style.display = 'block';
            }
            
             hidePopup() {
                document.getElementById('popup').style.display = 'none';
                document.querySelector('.popup-overlay').style.display = 'none';
            }
            
             toggleAccordion(contentId, button) {
                const content = document.getElementById(contentId);
                const arrow = button.querySelector('.accordion-arrow');
            }
 */
</script>
    

    
<div class="bicappFilesManagement">
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
                        <div class="accordion-header" on:click={() => toggleAccordion('feedback_visivo')}>
                            <a href="Pagina2new.html">
                                <img src="img/freccia_sinistra.svg" class="accordion-arrow" />
                            </a>
                            <span>Feedback Visivo</span>
                        </div>
                        {#if activeSection === 'feedback_visivo'}
                            <div id="feedback_visivo" class="accordion-content">
                                <button on:click={() => toggleButtonContent('indicatori_attesa')}>
                                    Indicatori di attesa
                                    <img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow">
                                </button>
                               
                                {#if activeButton === 'indicatori_attesa'}
                                    <div id="indicatori_attesa" class="button-content">
                                        <div class="button-group">
                                            <button on:click={() => updateMobilePreview('img/Clessidra_icon.svg')}>
                                                <img src="img/Clessidra_icon.svg" alt="icon">
                                            </button>
                                            <button on:click={() => updateMobilePreview('img/cerchio_freccia_caricamento.svg')}>
                                                <img src="img/cerchio_freccia_caricamento.svg" alt="icon">
                                            </button>
                                            <button on:click={() => updateMobilePreview('img/cerchio_caricamento_linee.svg')}>
                                                <img src="img/cerchio_caricamento_linee.svg" alt="icon">
                                            </button>
                                        </div>
                                        <button class="other-btn" on:click={showPopup}>Altre opzioni</button>
                                    </div>
                                {/if}

                                {#if showPopup}
                                    <div id="popup" class="popup">
                                        <div class="popup-content">
                                            <span class="close-btn" on:click={hidePopup}>&times;</span>
                                            <p>Contenuto del pop-up</p>
                                        </div>
                                    </div>
                                    <div class="popup-overlay" on:click={hidePopup}></div>
                                {/if}

                                <button on:click={() => toggleButtonContent('messaggi_conferma')}>
                                    Messaggi di conferma
                                    <img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow">
                                </button>
                                {#if activeButton === 'messaggi_conferma'}
                                    <div id="messaggi_conferma" class="button-content">
                                        <div class="button-group">
                                            <button on:click={() => updateMobilePreview('img/confermaV.svg')}>
                                                <img src="img/confermaV.svg" alt="icon">
                                            </button>
                                            <button on:click={() => updateMobilePreview('img/smile2.svg')}>
                                                <img src="img/smile2.svg" alt="icon">
                                            </button>
                                            <button on:click={() => updateMobilePreview('img/ok.svg')}>
                                                <img src="img/ok.svg" alt="icon">
                                            </button>
                                        </div>
                                        <button class="other-btn">Altre opzioni</button>
                                    </div>
                                {/if}

                                <button on:click={() => toggleButtonContent('messaggi_errore')}>
                                    Messaggi di errore
                                    <img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow">
                                </button>
                                {#if activeButton === 'messaggi_errore'}
                                    <div id="messaggi_errore" class="button-content">
                                        <div class="button-group">
                                            <button on:click={() => updateMobilePreview('img/iconX.svg')}>
                                                <img src="img/iconX.svg" alt="icon">
                                            </button>
                                            <button on:click={() => updateMobilePreview('img/smileneg.svg')}>
                                                <img src="img/smileneg.svg" alt="icon">
                                            </button>
                                            <button on:click={() => updateMobilePreview('img/attention.svg')}>
                                                <img src="img/attention.svg" alt="icon">
                                            </button>
                                        </div>
                                        <button class="other-btn">Altre opzioni</button>
                                    </div>
                                {/if}

                                <button on:click={() => toggleButtonContent('barra_progresso')}>
                                    Barra di progresso
                                    <img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow">
                                </button>
                                {#if activeButton === 'barra_progresso'}
                                    <div id="barra_progresso" class="button-content">
                                        <div class="button-group progress-buttons">
                                            <button on:click={() => updateMobilePreview('img/barra_car1.svg')}>
                                                <img src="img/barra_car1.svg" alt="icon">
                                            </button>
                                            <button on:click={() => updateMobilePreview('img/barra_caricamento2.svg')}>
                                                <img src="img/barra_caricamento2.svg" alt="icon">
                                            </button>
                                        </div>
                                        <button class="other-btn">Altre opzioni</button>
                                    </div>
                                {/if}

                                <button on:click={() => toggleButtonContent('aiuto_supporto')}>
                                    Aiuto e Supporto
                                    <img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow">
                                </button>
                                {#if activeButton === 'aiuto_supporto'}
                                    <div id="aiuto_supporto" class="button-content">
                                        <div class="button-group">
                                            <button on:click={() => updateMobilePreview('img/punto_domanda.svg')}>
                                                <img src="img/punto_domanda.svg" alt="icon">
                                            </button>
                                            <button on:click={() => updateMobilePreview('img/lampadina.svg')}>
                                                <img src="img/lampadina.svg" alt="icon">
                                            </button>
                                            <button on:click={() => updateMobilePreview('img/chat.svg')}>
                                                <img src="img/chat.svg" alt="icon">
                                            </button>
                                        </div>
                                        <button class="other-btn">Altre opzioni</button>
                                    </div>
                                {/if}
                            </div>
                        {/if}
                    </div>
                </div>
                <button class="button_feedback">SALVA MODIFICHE</button>
            </div>
            <div class="centeredContent">
                <div class="mobilePreview">
                    {#if mobilePreviewSrc}
                        <img src={mobilePreviewSrc} alt="Anteprima mobile" />
                    {/if}
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
    </div>
</div>