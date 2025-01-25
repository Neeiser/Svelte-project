<script>
    let activeSection = '';
    let activeButton = '';
    let mobilePreviewSrc = '';
    let showPopup = false;
    let volumeLevels = [50, 50, 50, 50]; // Per gestire i vari slider del volume

    const toggleAccordion = (sectionId) => {
        activeSection = activeSection === sectionId ? '' : sectionId;
    };

    const toggleButtonContent = (buttonId) => {
        activeButton = activeButton === buttonId ? '' : buttonId;
    };

    const updateMobilePreview = (src) => {
        mobilePreviewSrc = src;
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
            <!-- Tabs sidebar (uguale al precedente) -->
        </div>
        
        <div class="content">
            <div class="leftShoulder">
                <div class="d-flex">
                    <h1>Feedback e Notifiche</h1>
                    <img src="img/info.svg" class="infoPoint" />
                </div>

                <div class="section">
                    <div class="accordion-item">
                        <div class="accordion-header" on:click={() => toggleAccordion('feedback_sonoro')}>
                            <a href="Pagina2new.html">
                                <img src="img/freccia_sinistra.svg" class="accordion-arrow" />
                            </a>
                            <span>Feedback Sonoro</span>
                        </div>

                        {#if activeSection === 'feedback_sonoro'}
                            <div id="feedback_sonoro" class="accordion-content">
                                <button on:click={() => toggleButtonContent('suono_conferma')}>
                                    Suono di conferma
                                    <img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow">
                                </button>

                                {#if activeButton === 'suono_conferma'}
                                    <div class="button-content">
                                        <div class="button-group" style="flex-direction: column;">
                                            {#each [0, 1, 2] as i}
                                                <div class="button-container2">
                                                    <button on:click={() => updateMobilePreview('img/Nota_musicale.svg')}>
                                                        <img src="img/Nota_musicale.svg" alt="icon">
                                                    </button>
                                                    <div class="volume-control-container">
                                                        <div class="volume-control">
                                                            <img src="img/volume_low.svg" alt="volume-low" class="volume-icon">
                                                            <input 
                                                                type="range" 
                                                                min="0" 
                                                                max="100" 
                                                                bind:value={volumeLevels[i]}
                                                                class="slider"
                                                            >
                                                            <img src="img/volume_high.svg" alt="volume-high" class="volume-icon">
                                                        </div>
                                                    </div>   
                                                </div>
                                            {/each}
                                        </div>
                                        <button class="other-btn" on:click={() => showPopup = true}>Altre opzioni</button>
                                    </div>
                                {/if}

                                <!-- Popup unificato -->
                                {#if showPopup}
                                    <div class="popup">
                                        <div class="popup-content">
                                            <span class="close-btn" on:click={() => showPopup = false}>&times;</span>
                                            <p>Contenuto del pop-up</p>
                                        </div>
                                    </div>
                                    <div class="popup-overlay" on:click={() => showPopup = false}></div>
                                {/if}

                                <!-- Sezioni per suono_errore, suono_notifica e suono_avviso -->
                                <button on:click={() => toggleButtonContent('suono_errore')}>
                                    Suono di errore
                                    <img src="img/freccia_alto.svg" alt="freccia2" class="button-arrow">
                                </button>

                                {#if activeButton === 'suono_errore'}
                                    <div class="button-content">
                                        <div class="button-group">
                                            {#each [3] as i}
                                                <div class="button-container2">
                                                    <button on:click={() => updateMobilePreview('img/Nota_musicale.svg')}>
                                                        <img src="img/Nota_musicale.svg" alt="icon">
                                                    </button>
                                                    <div class="volume-control-container">
                                                        <div class="volume-control">
                                                            <img src="img/volume_low.svg" alt="volume-low" class="volume-icon">
                                                            <input 
                                                                type="range" 
                                                                min="0" 
                                                                max="100" 
                                                                bind:value={volumeLevels[i]}
                                                                class="slider"
                                                            >
                                                            <img src="img/volume_high.svg" alt="volume-high" class="volume-icon">
                                                        </div>
                                                    </div>
                                                </div>
                                            {/each}
                                        </div>
                                        <button class="other-btn" on:click={() => showPopup = true}>Altre opzioni</button>
                                    </div>
                                {/if}

                                <!-- Aggiungere qui le altre sezioni con lo stesso pattern -->
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

                <!-- Footer rimanente -->
            </div>
        </div>
    </div>
</div>