<script>
    let activeSection = '';
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
                        <div class="accordion-header" on:click={() => toggleAccordion('feedback_testuale')}>
                            <a href="Pagina2new.html">
                                <img src="img/freccia_sinistra.svg" class="accordion-arrow" />
                            </a>
                            <span>Feedback Testuale</span>
                        </div>
                        {#if activeSection === 'feedback_testuale'}
                            <div id="feedback_testuale" class="accordion-content">
                                <button on:click={() => toggleButtonContent('messaggi_conferma')}>
                                    Messaggi di conferma
                                    <img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow">
                                </button>

                                {#if activeButton === 'messaggi_conferma'}
                                    <div id="messaggi_conferma" class="button-content" style="padding: 0; margin: 0;">
                                        <div class="button-testuale">
                                            <select id="phrase-select">
                                                <option value="frase1">Salvataggio dei dati avvenuto con successo</option>
                                                <option value="frase2">Procedi con l'eliminazione?</option>
                                                <option value="frase3">Sei sicuro di voler continuare?</option>
                                            </select>
                                        </div>
                                        <button class="btn-pers-testuale" on:click={showPopup}>
                                            Personalizza testo
                                            <img src="img/iconpers_sound.svg" alt="icon">
                                        </button>
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

                                <button on:click={() => toggleButtonContent('messaggi_errore')}>
                                    Messaggi di errore
                                    <img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow">
                                </button>

                                {#if activeButton === 'messaggi_errore'}
                                    <div id="messaggi_errore" class="button-content">
                                        <div class="button-testuale">
                                            <select id="phrase-select">
                                                <option value="frase1">Errore nel caricamento, riprova più tardi</option>
                                                <option value="frase2">Caricamento non riuscito</option>
                                                <option value="frase3">Non è stato possibile effettuare l’operazione</option>
                                            </select>
                                        </div>
                                        <button class="btn-pers-testuale" on:click={showPopup}>
                                            Personalizza testo
                                            <img src="img/iconpers_sound.svg" alt="icon">
                                        </button>
                                    </div>
                                {/if}

                                <button on:click={() => toggleButtonContent('messaggi_caricamento_attesa')}>
                                    Messaggi di caricamento e attesa
                                    <img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow">
                                </button>

                                {#if activeButton === 'messaggi_caricamento_attesa'}
                                    <div id="messaggi_caricamento_attesa" class="button-content">
                                        <div class="button-testuale">
                                            <select id="phrase-select">
                                                <option value="frase1">Stiamo elaborando la tua richiesta</option>
                                                <option value="frase2">Quasi fatto! Ci vuole ancora un attimo.</option>
                                                <option value="frase3">Caricamento in corso</option>
                                                <option value="frase4">Attendere prego</option>
                                            </select>
                                        </div>
                                        <button class="btn-pers-testuale" on:click={showPopup}>
                                            Personalizza testo
                                            <img src="img/iconpers_sound.svg" alt="icon">
                                        </button>
                                    </div>
                                {/if}

                                <button on:click={() => toggleButtonContent('messaggi_aiuto_supporto')}>
                                    Messaggi di Aiuto e Supporto
                                    <img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow">
                                </button>

                                {#if activeButton === 'messaggi_aiuto_supporto'}
                                    <div id="messaggi_aiuto_supporto" class="button-content">
                                        <div class="button-testuale">
                                            <select id="phrase-select">
                                                <option value="frase1">Hai bisogno di assistenza? Siamo qui per aiutarti!</option>
                                                <option value="frase2">Domande? Scopri le risposte nella nostra sezione di supporto</option>
                                                <option value="frase3">Hai bisogno di supporto? Invia una segnalazione e ti risponderemo presto</option>
                                                <option value="frase4">Qualcosa non va? Il nostro team di supporto è qui per te</option>
                                            </select>
                                        </div>
                                        <button class="btn-pers-testuale" on:click={showPopup}>
                                            Personalizza testo
                                            <img src="img/iconpers_sound.svg" alt="icon">
                                        </button>
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
