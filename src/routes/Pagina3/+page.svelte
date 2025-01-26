<script>
    let accordionStates = {
        feedback_visivo: false,
        indicatori_attesa: false,
        messaggi_conferma: false,
        messaggi_errore: false,
        barra_progresso: false,
        aiuto_supporto: false
    };

    let buttonStates = {
        indicatori_attesa: false,
        messaggi_conferma: false,
        messaggi_errore: false,
        barra_progresso: false,
        aiuto_supporto: false
    };

    let showPopup = false;
    let mobilePreviewImage = '';

    function toggleAccordion(id) {
        accordionStates[id] = !accordionStates[id];
    }

    function toggleButtonContent(id) {
        console.log("bottone cliccato")
        console.log(buttonStates)
        buttonStates[id] = !buttonStates[id];
    }

    function updateMobilePreview(imageSrc) {
        mobilePreviewImage = imageSrc;
    }

    function displayPopup() {
        showPopup = true;
    }

    function hidePopup() {
        showPopup = false;
    }
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
                        {#if accordionStates.feedback_visivo}
                        <div id="feedback_visivo" class="accordion-content">
                            <button on:click={() => toggleButtonContent('indicatori_attesa')}>
                                Indicatori di attesa
                                <img src="img/freccia_alto.svg" alt="freccia2" class= "button-arrow">
                            </button>
                            {#if buttonStates.indicatori_attesa}
                            <div class="indicatori_attesa_style">
                                <div class="indicatori_attesa_style_child">   
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
                                <!-- <button class="other-btn" on:click={displayPopup}>Altre opzioni</button> -->
                            </div>
                            {/if}
                            
                            <!-- <div id="popup" class="popup">
                                <div class="popup-content">
                                    <span class="close-btn" on:click={hidePopup}>&times;</span>
                                    <div class="popup-flex-container">
                                        <div class="quadrati-popup">
                                            <img src="img/Clessidra_icon.svg" alt="clessidra" class="clessidra-icon">
                                            <img src="img/iconX.svg" alt="x" class="x-icon">
                                        </div>
                                        <div class="quadrati-popup">
                                            <img src="img/cerchio_freccia_caricamento.svg" alt="cerchio" class="cerchio-icon">
                                            <img src="img/iconX.svg" alt="x" class="x-icon">
                                        </div>
                                        <div class="quadrati-popup">
                                            <img src="img/cerchio_caricamento_linee.svg" alt="linee" class="linee-icon">
                                            <img src="img/iconX.svg" alt="x" class="x-icon">
                                        </div> 
                                    </div>
                                    <div class="button-container3">
                                        <button class="button_popup_icona">Carica Icona</button>
                                        <button class="button_popup_save">Salva</button>
                                    </div>

                                </div>
                            </div> -->

                            <!-- Overlay -->
                            <div class="popup-overlay" on:click={hidePopup}></div>

                            <button on:click={() => toggleButtonContent('messaggi_conferma', this)}>Messaggi di conferma
                                <img src="img/freccia_alto.svg" alt="freccia2" class= "button-arrow">
                            </button>
                            {#if buttonStates.messaggi_conferma}
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
                                    <button class="other-btn" on:click={displayPopup}>Altre opzioni</button>
                            </div>
                            {/if}
                            {#if showPopup}
                            <div id="popup" class="popup">
                                <div class="popup-content">
                                    <span class="close-btn" on:click={hidePopup}>&times;</span>
                                    <div class="popup-flex-container">
                                        <div class="quadrati-popup">
                                            <img src="img/Clessidra_icon.svg" alt="clessidra" class="clessidra-icon">
                                            <img src="img/iconX.svg" alt="x" class="x-icon">
                                        </div>
                                        <div class="quadrati-popup">
                                            <img src="img/cerchio_freccia_caricamento.svg" alt="cerchio" class="cerchio-icon">
                                            <img src="img/iconX.svg" alt="x" class="x-icon">
                                        </div>
                                        <div class="quadrati-popup">
                                            <img src="img/cerchio_caricamento_linee.svg" alt="linee" class="linee-icon">
                                            <img src="img/iconX.svg" alt="x" class="x-icon">
                                        </div> 
                                    </div>
                                    <div class="button-container3">
                                        <button class="button_popup_icona">Carica Icona</button>
                                        <button class="button_popup_save">Salva</button>
                                    </div>

                                </div>
                            </div>
                            {/if}
                            <button on:click={() => toggleButtonContent('messaggi_errore', this)}>Messaggi di errore
                                <img src="img/freccia_alto.svg" alt="freccia2" class= "button-arrow">
                            </button>
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
                                    <button class="other-btn" on:click={displayPopup}>Altre opzioni</button>
                            </div>
                            <div id="popup" class="popup">
                                <div class="popup-content">
                                    <span class="close-btn" on:click={hidePopup}>&times;</span>
                                    <div class="popup-flex-container">
                                        <div class="quadrati-popup">
                                            <img src="img/Clessidra_icon.svg" alt="clessidra" class="clessidra-icon">
                                            <img src="img/iconX.svg" alt="x" class="x-icon">
                                        </div>
                                        <div class="quadrati-popup">
                                            <img src="img/cerchio_freccia_caricamento.svg" alt="cerchio" class="cerchio-icon">
                                            <img src="img/iconX.svg" alt="x" class="x-icon">
                                        </div>
                                        <div class="quadrati-popup">
                                            <img src="img/cerchio_caricamento_linee.svg" alt="linee" class="linee-icon">
                                            <img src="img/iconX.svg" alt="x" class="x-icon">
                                        </div> 
                                    </div>
                                    <div class="button-container3">
                                        <button class="button_popup_icona">Carica Icona</button>
                                        <button class="button_popup_save">Salva</button>
                                    </div>

                                </div>
                            </div>
                            
                            
                            
                            
                            
                            <button on:click={() => toggleButtonContent('barra_progresso', this)}>Barra di progresso
                                <img src="img/freccia_alto.svg" alt="freccia2" class= "button-arrow">
                            </button>
                            <div id="barra_progresso" class="button-content">
                                <div class="button-group progress-buttons" >
                                    <button on:click={() => updateMobilePreview('img/barra_car1.svg')}>
                                        <img src="img/barra_car1.svg" alt="icon">
                                    </button>
                                    <button on:click={() => updateMobilePreview('img/barra_caricamento2.svg')}>
                                        <img src="img/barra_caricamento2.svg" alt="icon">
                                    </button>
                                </div>
                                    <button class="other-btn" on:click={displayPopup}>Altre opzioni</button>
                            </div>
                            <div id="popup" class="popup">
                                <div class="popup-content">
                                    <span class="close-btn" on:click={hidePopup}>&times;</span>
                                    <div class="popup-flex-container">
                                        <div class="quadrati-popup">
                                            <img src="img/Clessidra_icon.svg" alt="clessidra" class="clessidra-icon">
                                            <img src="img/iconX.svg" alt="x" class="x-icon">
                                        </div>
                                        <div class="quadrati-popup">
                                            <img src="img/cerchio_freccia_caricamento.svg" alt="cerchio" class="cerchio-icon">
                                            <img src="img/iconX.svg" alt="x" class="x-icon">
                                        </div>
                                        <div class="quadrati-popup">
                                            <img src="img/cerchio_caricamento_linee.svg" alt="linee" class="linee-icon">
                                            <img src="img/iconX.svg" alt="x" class="x-icon">
                                        </div> 
                                    </div>
                                    <div class="button-container3">
                                        <button class="button_popup_icona">Carica Icona</button>
                                        <button class="button_popup_save">Salva</button>
                                    </div>

                                </div>
                            </div>
                            
                            
                            
                            <button on:click={() => toggleButtonContent('aiuto_supporto')}>Aiuto e Supporto
                                <img src="img/freccia_alto.svg" alt="freccia2" class= "button-arrow">
                            </button>
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
                                    <button class="other-btn" on:click={displayPopup}>Altre opzioni</button>
                            </div>
                            <div id="popup" class="popup">
                                <div class="popup-content">
                                    <span class="close-btn" on:click={hidePopup}>&times;</span>
                                    <div class="popup-flex-container">
                                        <div class="quadrati-popup">
                                            <img src="img/Clessidra_icon.svg" alt="clessidra" class="clessidra-icon">
                                            <img src="img/iconX.svg" alt="x" class="x-icon">
                                        </div>
                                        <div class="quadrati-popup">
                                            <img src="img/cerchio_freccia_caricamento.svg" alt="cerchio" class="cerchio-icon">
                                            <img src="img/iconX.svg" alt="x" class="x-icon">
                                        </div>
                                        <div class="quadrati-popup">
                                            <img src="img/cerchio_caricamento_linee.svg" alt="linee" class="linee-icon">
                                            <img src="img/iconX.svg" alt="x" class="x-icon">
                                        </div> 
                                    </div>
                                    <div class="button-container3">
                                        <button class="button_popup_icona">Carica Icona</button>
                                        <button class="button_popup_save">Salva</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/if}
                </div>
            </div>
            <!-- <button class="button_feedback">SALVA MODIFICHE</button> -->
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
</div>
</div>


<style scoped>

.indicatori_attesa_style{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 12px 0px;
}

.indicatori_attesa_style_child{
    display: flex;
    gap: 16px;
}

.indicatori_attesa_style_child button{
    padding: 0.6rem 1rem;
}

</style>
