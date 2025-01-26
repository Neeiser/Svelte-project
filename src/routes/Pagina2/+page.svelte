<script>
    let accordionStates = {
        tipologia_feedback: false,
        personalizzazione_feedback: false,
        notifiche: false,
        personalizzazione_notifiche: false,
        i_miei_feedback_notifiche: false
    };

    let timeVisualization = 1;

    function toggleAccordion(id) {
        accordionStates[id] = !accordionStates[id];
    }

    function increaseTime() {
        timeVisualization += 1;
    }

    function decreaseTime() {
        if (timeVisualization > 0) {
            timeVisualization -= 1;
        }
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
  
          <div class="sectionPage2">
            <!-- Accordion Tipologia Feedback -->
            <div class="accordion-item">
              <div class="accordion-header" on:click={() => toggleAccordion('tipologia_feedback')}>
                Tipologia di Feedback
                <img src="img/freccia_basso.svg" class="accordion-arrow">
              </div>
              {#if accordionStates.tipologia_feedback}
                <div id="tipologia_feedback" class="accordion_tipologia_feedback">
                    <button>Visivo</button>
                    <button>Testuale</button>
                    <button>Sonoro</button>
                    <button>Tattile</button>
                </div>
              {/if}
            </div>
  
            <!-- Accordion Personalizzazione Feedback -->
             <!--
            <div class="accordion-item">
              <div class="accordion-header" on:click={() => toggleAccordion('personalizzazione_feedback')}>
                Personalizzazione del Feedback
                <img src="img/freccia_basso.svg" class="accordion-arrow">
              </div>
               {#if accordionStates.personalizzazione_feedback}
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
            {/if} 
            </div> -->
  
            <!-- Accordion Notifiche -->
            <div class="accordion-item">
              <div class="accordion-header" on:click={() => toggleAccordion('notifiche')}>
                Notifiche
                <img src="img/freccia_basso.svg" class="accordion-arrow">
              </div>
              {#if accordionStates.notifiche}
              <div id="notifiche" class="accordion-content">
                <p>Push</p>
                <div class="sms">
                  <div class="box-notification-sms">
                    <div class="circle"></div>
                    <div>
                      <h4>Your message!</h4>
                      <p class="paragraph-email">Lorem ipsum dolor sit amet..</p>
                    </div>
                    <div class="box-notification-sms-buttons">
                      <button class="buttonStyle">Open</button>
                      <button class="buttonStyle">Close</button>
                    </div>
                  </div>
                </div>
  
                <p>Email</p>
                <div class="email">
                  <div class="box-notification-email">
                    <div class="circle"></div>
                    <div>
                      <h4>Your message!</h4>
                      <p class="paragraph-email">Lorem ipsum dolor sit amet..</p>
                    </div>
                  </div>
                </div>
  
                <p>SMS</p>
                <div class="sms">
                  <div class="box-notification-sms">
                    <div class="circle"></div>
                    <div>
                      <h4>Your message!</h4>
                      <p class="paragraph-email">Lorem ipsum dolor sit amet..</p>
                    </div>
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
                    <button class="sound-btn">
                      Personalizza suono
                      <img src="img/iconpers_sound.svg" alt="iconpers_sound"> 
                    </button>
                  </div>
                </div>
              </div>
              {/if}
            </div>
  
            <!-- Accordion Personalizzazione Notifiche -->
            <!-- <div class="accordion-item">
              <div class="accordion-header" on:click={() => toggleAccordion('personalizzazione_notifiche')}>
                Personalizzazione delle Notifiche
                <img src="img/freccia_basso.svg" class="accordion-arrow">
              </div>
              {#if accordionStates.personalizzazione_notifiche}
              <div id="personalizzazione_notifiche" class="accordion-content">
                <div id="personalizzazione_notifiche" class="accordion-content">
                                                                
                    <div class="dimension">
                        <p class="text-custom">Dimensione Pop up</p>
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
                        <p class="color-title">Colore Pop up</p>
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
                        <p class="text-custom">Tipografia Titolo </p>
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
                    <div class="typography">
                        <p class="text-custom">Tipografia Testo </p>
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
              { /if}
            </div> -->
  
            <!-- Accordion Feedback e Notifiche -->
            <div class="accordion-item">
                <div class="accordion-header" on:click={() => toggleAccordion('i_miei_feedback_notifiche')}>
                    I miei feedback e notifiche
                    <img src="img/freccia_basso.svg" class="accordion-arrow">
                </div>
                {#if accordionStates.i_miei_feedback_notifiche}
                    <div id="i_miei_feedback_notifiche" class="accordion-content">
                        <p class="feedback-text" style="margin-bottom: 20px;">Feedback</p>
                        <div class="myfeedback">
                            <div class="box-myfeedback">
                                <img src="img/Myfeedback.svg" alt="myfeedback">
                            </div>
                        </div>

                        <p class="notifiche-text" style="margin-top:70px;">Notifiche</p>
                        <div class="mynotifiche">
                            <div class="box-mynotifiche">
                                <img src="img/icona_notifica.svg" alt="notifiche">
                                <img src="img/text_notifica.svg" alt="text-notifiche">
                            </div>
                        </div>

                    </div>

                { /if}
            </div>
  
            <!-- <button class="button_feedback">Salva modifiche</button> -->
          </div>
        </div>
      </div>
  
      <div class="centeredContent content">
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
</div>

<style scoped>

.sectionPage2{
    overflow: auto;
    height: calc(100vh - 200px);
}

.accordion_tipologia_feedback{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.accordion_tipologia_feedback button{
    padding: 10px;
    margin: 10px;
    width: 75%;
}

.box-notification-sms-buttons{
 display: flex;
 flex-direction: column;
 gap: 8px;
 margin-left: auto;
 margin-right: 8px;
}
</style>