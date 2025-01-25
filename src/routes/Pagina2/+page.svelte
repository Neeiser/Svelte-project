
<script>
        function toggleAccordion(id, element) {
            var content = document.getElementById(id);
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
                element.querySelector('.accordion-arrow').style.transform = "rotate(180deg)";
            } else {
                content.style.display = "none";
                element.querySelector('.accordion-arrow').style.transform = "rotate(0deg)";
            }
        }
    
        function increaseTime() {
            var input = document.getElementById('time-visualization');
            input.value = parseInt(input.value) + 1;
        }   
    
        function decreaseTime() {
            var input = document.getElementById('time-visualization');
            if (parseInt(input.value) > 0) {
            input.value = parseInt(input.value) - 1;
            }
    }

</script>

    
    <div class="bicappFilesManagement">
    <header>
        <div class="sideContainer">
            <a href="/">
                <img src="img/logoenaming.svg" class="logo" alt="Logo"/>
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
            <img src="img/profile_picture.svg" class="pointer" alt=""/>

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
                        <div class="accordion-header" on:click={() => toggleAccordion('tipologia_feedback', this)}>
                            Tipologia di Feedback
                            <img src="img/freccia_basso.svg" class="accordion-arrow">
                        </div>
                        <div id="tipologia_feedback" class="accordion-content">
                            
                            <button>Visivo</button>
                            <button>Testuale</button>
                            <button>Sonoro</button>
                            <button>Tattile</button>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <div class="accordion-header" on:click={() => toggleAccordion('personalizzazione_feedback', this)}>
                            Personalizzazione del Feedback
                            <img src="img/freccia_basso.svg" class="accordion-arrow">
                        </div>
                        <div id="personalizzazione_feedback" class="accordion-content">
                            <div class="dimension">
                                <p class="text-custom">Dimensione</p>
                                <div class="input-group">
                                    <span class="input-label">W:</span>
                                    <div class="input-wrapper">
                                        <input type="number" placeholder="Larghezza" id="icon-width" value="16" />
                                        <span class="unit">px</span>
                                    </div>
                                    <span class="input-label">H:</span>
                                    <div class="input-wrapper">
                                        <input type="number" placeholder="Altezza" id="icon-height" value="16" />
                                        <span class="unit">px</span>
                                    </div>
                                </div>
                            
                            <div class="time-visualizer">
                                <p class="text-custom">Tempo di visualizzazione</p>
                                <div class="time">
                                    <span class="time-btn" on:click={decreaseTime}>-</span>
                                    <div class="input-wrapper">
                                        <input type="number" value="1" id="time-visualization"/>
                                        <span class="unit">sec.</span>
                                    </div>
                                    <span class="time-btn" on:click={increaseTime}>+</span>
                                </div>
                            </div>

                            <div class="color">
                                <p class="color-title">Colore</p>
                                <div class="color-picker">
                                    <div class="color-box">
                                        <span class="input-label">Fill:</span>
                                        <input type="text" placeholder="Codice Colore" id="color-code" />
                                        <input type="color" id="color-picker" />
                                    </div>
                                    <div class="color-box">
                                        <span class="input-label">Stroke:</span>
                                        <input type="text" placeholder="Codice Colore" id="border-color-code" />
                                        <input type="color" id="border-color-picker" />
                                    </div>
                                </div>
                            </div>

                            <div class="typography">
                                <p class="text-custom">Tipografia</p>
                                <div class="typography-picker">
                                    <div class="typography-box">
                                        <select id="font-family" style="width: 100%; margin-bottom: 2px;">
                                            <option value="Arial">Arial</option>
                                            <option value="Verdana">Verdana</option>
                                            <option value="Helvetica">Helvetica</option>
                                            <option value="Times New Roman">Times New Roman</option>
                                            <option value="Oswald">Oswald</option>
                                        </select>
                                    </div>
                                    <div class="typography-row">
                                        <div class="typography-box">
                                            <input type="number" id="font-weight" placeholder="Bold" />
                                        </div>
                                        <div class="typography-box" style="gap: 10px;">
                                            <input type="number" id="font-size" placeholder="16" />
                                            
                                        </div>
                                    </div>
                                        <div class="color-box">
                                            <input type="text" style="width: 87%;" placeholder="Codice Colore" id="font-color" />
                                            <input type="color" id="font-color" width="35px;" />
                                        </div>
                                    
                                </div>


                            </div>
                        


                            
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <div class="accordion-header" on:click={() => toggleAccordion('notifiche', this)}>
                            Notifiche
                            <img src="img/freccia_basso.svg" class="accordion-arrow">
                        </div>
                        <div id="notifiche" class="accordion-content">
                            
                            
                            
                            <p>Push</p>
                            <div class="sms">
                                <div class="box-notification-sms">
                                    <div class="circle"></div>
                                    <button class="Open-btn">Open</button>
                                    <button class="Close-btn">Close</button>
                                    
                                </div>
                            </div>
    
    
                            <p>Email</p>
                            <div class="email">
                                <div class="box-notification-email">
                                    <div class="circle"></div>
                                </div>
                            </div>
    
                            <p>SMS</p>
                            <div class="sms">
                                <div class="box-notification-sms">
                                    <div class="circle"></div>
                                </div>
                            </div>
    
                            <p>Vocali</p>
                            <div class="vocali">
                                <div class="box-notification-vocali">
                                    <img src="img/Icon_vocale.svg" alt="Icon_vocale">
                                    <p>Notifica vocale personalizzata</p>
                                </div>
                                <div class="volume-control-container">
                                    <div class="volume-control">
                                        <img src="img/volume_low.svg" alt="volume-low" class="volume-icon">
                                        <input type="range" min="0" max="100" value="50" class="slider" id="volume-slider">
                                        <img src="img/volume_high.svg" alt="volume-high" class="volume-icon">
                                    </div>
                                    <button class="sound-btn">Personalizza suono
                                        <img src="img/iconpers_sound.svg" alt="iconpers_sound"> 
                                    </button>
                                </div>
                            </div>
                        </div>
                            
                                
                        </div>
                
                    <div class="accordion-item">
                        <div class="accordion-header" on:click={() => toggleAccordion('personalizzazione_notifiche', this)}>
                            Personalizzazione delle Notifiche
                            <img src="img/freccia_basso.svg" class="accordion-arrow">
                        </div>
                        <div id="personalizzazione_notifiche" class="accordion-content">


                        </div>
                    </div>  
                        
                    <div class="accordion-item">
                        <div class="accordion-header" on:click={() => toggleAccordion('i_miei_feedback_notifiche', this)}>
                            I miei feedback e notifiche
                            <img src="img/freccia_basso.svg" class="accordion-arrow">
                        </div>
                        <div id="i_miei_feedback_notifiche" class="accordion-content">
                            <p class="feedback-text" style="margin-bottom: 4px;">Feedback</p>
                            <div class="myfeedback">
                                <div class="box-myfeedback"></div>
                            </div>

                            <p class="notifiche-text">Notifiche</p>
                            <div class="mynotifiche">
                                <div class="box-mynotifiche"></div>
                            </div>

                        </div>

                        
                    
                    
                    
                        
                        <button class="button_feedback">Salva modifiche</button>
                        
                            
                        

                    

                                        
                
                
            </div>
            
            
            
        </div>
        
    </div>
    
</div>
<div class="centeredContent">
    <div class="mobilePreview">
    

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
</div>

