<script>
	import { fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import FeedbackVisivo from '../Pagina3/+page.svelte';
	import FeedbackTestuale from '../Pagina4/+page.svelte';
	import FeedbackSonoro from '../Pagina5/+page.svelte';
	import FeedbackTattile from '../Pagina6/+page.svelte';

	let accordionStates = {
		tipologia_feedback: false,
		personalizzazione_feedback: false,
		notifiche: false,
		personalizzazione_notifiche: false,
		i_miei_feedback_notifiche: false,
	};

	let showFeedbackVisivo = false; // Stato per mostrare FeedbackVisivo
	const dispatch = createEventDispatcher();

	function toggleAccordion(id) {
		accordionStates[id] = !accordionStates[id];
	}

	function openFeedbackVisivo() {
		showFeedbackVisivo = true;
	}

	function closeFeedbackVisivo() {
		showFeedbackVisivo = false;
	}

	let showFeedbackTestuale = false;

	function openFeedbackTestuale() {
		showFeedbackTestuale = true;
	}

	function closeFeedbackTestuale() {
		showFeedbackTestuale = false;
	}

	let showFeedbackSonoro = false;

	function openFeedbackSonoro() {
		showFeedbackSonoro = true;
	}

	function closeFeedbackSonoro() {
		showFeedbackSonoro = false;
	}

	let showFeedbackTattile = false;

	function openFeedbackTattile() {
		showFeedbackTattile = true;
	}

	function closeFeedbackTattile() {
		showFeedbackTattile = false;
	}
</script>

{#if showFeedbackVisivo}
	<div
		transition:fly={{ x: -600, duration: 300 }}
		style="position: sticky; top: 0; left: 0; z-index: 100;">
		<FeedbackVisivo on:closeFeedbackVisivo={closeFeedbackVisivo} />
	</div>
{/if}

{#if showFeedbackTestuale}
	<div
		transition:fly={{ x: -600, duration: 300 }}
		style="position: sticky; top: 0; left: 0; z-index: 100;">
		<FeedbackTestuale on:closeFeedbackTestuale={closeFeedbackTestuale} />
	</div>
{/if}

{#if showFeedbackSonoro}
	<div
		transition:fly={{ x: -600, duration: 300 }}
		style="position: sticky; top: 0; left: 0; z-index: 100;">
		<FeedbackSonoro on:closeFeedbackSonoro={closeFeedbackSonoro} />
	</div>
{/if}

{#if showFeedbackTattile}
	<div
		transition:fly={{ x: -600, duration: 300 }}
		style="position: sticky; top: 0; left: 0; z-index: 100;">
		<FeedbackTattile on:closeFeedbackTattile={closeFeedbackTattile} />
	</div>
{/if}

<div class="leftShoulder">
	<h2 class="backButton" on:click={() => dispatch('closeFeedback')}>Back</h2>
	<div class="d-flex">
		<h1>Feedback e Notifiche</h1>
		<img alt="" src="img/info.svg" class="infoPoint" />
	</div>

	<div class="sectionPage2">
		<!-- Accordion Tipologia Feedback -->
		<div class="accordion-item">
			<div class="accordion-header" on:click={() => toggleAccordion('tipologia_feedback')}>
				Tipologia di Feedback
				<img alt="" src="img/freccia_basso.svg" class="accordion-arrow" />
			</div>
			{#if accordionStates.tipologia_feedback}
				<div id="tipologia_feedback" class="accordion_tipologia_feedback">
					<button on:click={openFeedbackVisivo}>Visivo</button>
					<button on:click={openFeedbackTestuale}>Testuale</button>
					<button on:click={openFeedbackSonoro}>Sonoro</button>
					<button on:click={openFeedbackTattile}>Tattile</button>
				</div>
			{/if}
		</div>

		<!-- Accordion Notifiche -->
		<div class="accordion-item">
			<div class="accordion-header" on:click={() => toggleAccordion('notifiche')}>
				Notifiche
				<img alt="" src="img/freccia_basso.svg" class="accordion-arrow" />
			</div>
			{#if accordionStates.notifiche}
				<div id="notifiche" class="accordion-content">
					<p class="notifiche-label">Push</p>
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

					<p class="notifiche-label">Email</p>
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
							<img src="img/Icon_vocale.svg" alt="Icon_vocale" />
							<p>Notifica vocale personalizzata</p>
						</div>
						<div class="volume-control-container">
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
							<button class="sound-btn">
								Personalizza suono
								<img src="img/iconpers_sound.svg" alt="iconpers_sound" />
							</button>
						</div>
					</div>
				</div>
			{/if}
		</div>

		<!-- Accordion Feedback e Notifiche -->
		<div class="accordion-item">
			<div class="accordion-header" on:click={() => toggleAccordion('i_miei_feedback_notifiche')}>
				I miei feedback e notifiche
				<img alt="" src="img/freccia_basso.svg" class="accordion-arrow" />
			</div>
			{#if accordionStates.i_miei_feedback_notifiche}
				<div id="i_miei_feedback_notifiche" class="accordion-content">
					<p class="feedback-text" style="margin-bottom: 20px;">Feedback</p>
					<div class="myfeedback">
						<div class="box-myfeedback">
							<img src="img/Myfeedback.svg" alt="myfeedback" />
						</div>
					</div>

					<p class="notifiche-text" style="margin-top:70px;">Notifiche</p>
					<div class="mynotifiche">
						<div class="box-mynotifiche">
							<img src="img/icona_notifica.svg" alt="notifiche" />
							<img src="img/text_notifica.svg" alt="text-notifiche" />
						</div>
					</div>
				</div>
			{/if}
		</div>

		<!-- <button class="button_feedback">Salva modifiche</button> -->
	</div>
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
	.sectionPage2 {
		overflow: auto;
		height: calc(100vh - 200px);
	}

	.accordion_tipologia_feedback {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.accordion_tipologia_feedback button {
		padding: 10px;
		margin: 10px;
		width: 75%;
	}

	.box-notification-sms-buttons {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin-left: auto;
		margin-right: 8px;
	}

	.notifiche-label {
		background-color: red;
	}
</style>
