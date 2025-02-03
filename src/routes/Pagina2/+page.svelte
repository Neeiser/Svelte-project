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

	let dialogStates = {
		push: false,
		email: false,
		sms: false,
	};

	let defaultTitlePush = 'Your message!';
	let defaultDescPush = 'Lorem ipsum dolor sit amet..';
	let titlePush = defaultTitlePush;
	let descPush = defaultDescPush;

	let defaultTitleEmail = 'Your message!';
	let defaultDescEmail = 'Lorem ipsum dolor sit amet..';
	let titleEmail = defaultTitleEmail;
	let descEmail = defaultDescEmail;

	let defaultTitleSms = 'Your message!';
	let defaultDescSms = 'Lorem ipsum dolor sit amet..';
	let titleSms = defaultTitleSms;
	let descSms = defaultDescSms;

	let tempTitlePush, tempDescPush;
	let tempTitleEmail, tempDescEmail;
	let tempTitleSms, tempDescSms;

	function toggleDialog(id) {
		dialogStates = { ...dialogStates, [id]: true };

		if (id === 'push') {
			tempTitlePush = titlePush;
			tempDescPush = descPush;
		} else if (id === 'email') {
			tempTitleEmail = titleEmail;
			tempDescEmail = descEmail;
		} else if (id === 'sms') {
			tempTitleSms = titleSms;
			tempDescSms = descSms;
		}
	}

	function savePush() {
		titlePush = tempTitlePush;
		descPush = tempDescPush;
		dialogStates.push = false;
	}

	function closePush() {
		titlePush = defaultTitlePush;
		descPush = defaultDescPush;
		dialogStates.push = false;
	}

	function saveEmail() {
		titleEmail = tempTitleEmail;
		descEmail = tempDescEmail;
		dialogStates.email = false;
	}

	function closeEmail() {
		titleEmail = defaultTitleEmail;
		descEmail = defaultDescEmail;
		dialogStates.email = false;
	}

	function saveSms() {
		titleSms = tempTitleSms;
		descSms = tempDescSms;
		dialogStates.sms = false;
	}

	function closeSms() {
		titleSms = defaultTitleSms;
		descSms = defaultDescSms;
		dialogStates.sms = false;
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
	<h2 class="backButton" on:click={() => dispatch('closeFeedback')}>
		<img src="img/freccia_sinistra.svg" class="accordion-arrow" />
		Back
	</h2>
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
							<div class="circle"><img src="img/pen.png" alt="" /></div>
							<div class="textBox">
								<h4>{titlePush}</h4>
								<p class="paragraph-email">{descPush}</p>
							</div>
							<div class="box-notification-sms-buttons">
								<button class="buttonStyle" on:click={() => toggleDialog('push')}
									>Modifica testo</button>
							</div>
						</div>
						{#if dialogStates.push}
							<div class="windowPush">
								<div class="windowPushBox">
									<label for="pushTitle">Titolo</label>
									<input type="text" name="pushTitle" id="pushTitle" bind:value={tempTitlePush} />
								</div>
								<div class="windowPushBox">
									<label for="pushDesc">Descrizione</label>
									<input type="text" name="pushDesc" id="pushDesc" bind:value={tempDescPush} />
								</div>
								<div class="windowPushAction">
									<button class="buttonStyle" on:click={closePush}> Annulla </button>
									<button class="buttonStyle" on:click={savePush}> Salva </button>
								</div>
							</div>
						{/if}
					</div>

					<p class="notifiche-label">Email</p>
					<div class="email">
						<div class="box-notification-email">
							<div class="circle"><img src="img/pen.png" alt="" /></div>
							<div class="textBox">
								<h4>{titleEmail}</h4>
								<p class="paragraph-email">{descEmail}</p>
							</div>
							<div class="box-notification-sms-buttons">
								<button class="buttonStyle" on:click={() => toggleDialog('email')}
									>Modifica testo</button>
							</div>
						</div>
						{#if dialogStates.email}
							<div class="windowPush">
								<div class="windowPushBox">
									<label for="emailTitle">Titolo</label>
									<input
										type="text"
										name="emailTitle"
										id="emailTitle"
										bind:value={tempTitleEmail} />
								</div>
								<div class="windowPushBox">
									<label for="emailDesc">Descrizione</label>
									<input type="text" name="emailDesc" id="emailDesc" bind:value={tempDescEmail} />
								</div>
								<div class="windowPushAction">
									<button class="buttonStyle" on:click={closeEmail}> Annulla </button>
									<button class="buttonStyle" on:click={saveEmail}> Salva </button>
								</div>
							</div>
						{/if}
					</div>

					<p class="notifiche-label">SMS</p>
					<div class="sms">
						<div class="box-notification-sms">
							<div class="circle"><img src="img/pen.png" alt="" /></div>
							<div class="textBox">
								<h4>{titleSms}</h4>
								<p class="paragraph-email">{descSms}</p>
							</div>
							<div class="box-notification-sms-buttons">
								<button class="buttonStyle" on:click={() => toggleDialog('sms')}
									>Modifica testo</button>
							</div>
						</div>
						{#if dialogStates.sms}
							<div class="windowPush">
								<div class="windowPushBox">
									<label for="smsTitle">Titolo</label>
									<input type="text" name="smsTitle" id="smsTitle" bind:value={tempTitleSms} />
								</div>
								<div class="windowPushBox">
									<label for="smsDesc">Descrizione</label>
									<input type="text" name="smsDesc" id="smsDesc" bind:value={tempDescSms} />
								</div>
								<div class="windowPushAction">
									<button class="buttonStyle" on:click={closeSms}> Annulla </button>
									<button class="buttonStyle" on:click={saveSms}> Salva </button>
								</div>
							</div>
						{/if}
					</div>

					<p class="notifiche-label">Vocali</p>
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
		width: fit-content;
		flex-direction: column;
		gap: 8px;
		margin-left: auto;
		margin-right: 8px;
	}

	.notifiche-label {
		font-size: 12px;
		color: #666666;
		font-weight: 600;
		margin-left: 10px;
	}

	.buttonStyle {
		padding: 4px 8px;
	}

	.windowPush {
		display: flex;
		flex-direction: column;
		padding: 14px;
		width: 370px;
		gap: 6px;
		border-radius: 6px;
		border: 1px solid #616161;
		margin-bottom: 24px;
	}
	.windowPush input {
		padding: 4px;
		width: 100%;
	}
	.windowPush label {
		min-width: 95px;
		font-size: 12px;
		color: #666666;
		font-weight: 600;
	}

	.windowPushBox {
		display: flex;
		align-items: center;
	}

	.windowPushAction {
		display: flex;
		gap: 12px;
		margin-top: 6px;
		margin-left: auto;
	}

	.textBox {
		display: flex;
		flex-direction: column;
		margin-left: 6px;
		height: 100%;
		justify-content: center;
		width: 200px;
	}
	.textBox h4 {
		display: flex;
		align-items: center;
		height: 40%;
	}

	.textBox p {
		height: 55%;
		text-overflow: ellipsis;
		overflow: hidden;
		padding-bottom: 8px;
	}
</style>
