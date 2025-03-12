<script>
	import { fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import FeedbackVisivo from '../Pagina3/+page.svelte';
	import FeedbackTestuale from '../Pagina4/+page.svelte';
	import FeedbackSonoro from '../Pagina5/+page.svelte';
	import FeedbackTattile from '../Pagina6/+page.svelte';
	import { savedIcons, updateIconTitle, removeIcon } from '../../stores/store'; // Importiamo lo store
	import { previewIcon, setPreviewIcon } from '../../stores/previewIconStore';
	import {
		notifications,
		addNotification,
		removeNotification,
	} from '../../stores/notificationsStore';

	function previewIconHandler(icon) {
		setPreviewIcon(icon);
	}

	let savedIconsList = [];
	let editingIndex = null; // Indice dell'icona che sta venendo rinominata
	let newTitle = ''; // Nuovo titolo da modificare
	let enableNotify = false;
	// Sottoscrizione per ottenere la lista completa delle icone salvate
	savedIcons.subscribe((icons) => {
		savedIconsList = icons;
	});

	// Attiva il campo di modifica del titolo
	function startEditing(index) {
		editingIndex = index;
		newTitle = savedIconsList[index].title; // Precompiliamo con il titolo attuale
	}

	// Salva il nuovo titolo e aggiorna lo store
	function saveNewTitle(index) {
		if (newTitle.trim() !== '') {
			updateIconTitle(index, newTitle);
		}
		editingIndex = null;
	}

	// Rimuove l'icona selezionata dallo store
	function deleteIcon(index) {
		removeIcon(index);
	}

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
	let defaultLinkPush = '';
	let titlePush = defaultTitlePush;
	let descPush = defaultDescPush;
	let linkPush = defaultLinkPush;

	let defaultTitleEmail = 'Your message!';
	let defaultDescEmail = 'Lorem ipsum dolor sit amet..';
	let defaultLinkEmail = '';
	let titleEmail = defaultTitleEmail;
	let descEmail = defaultDescEmail;
	let linkEmail = defaultLinkEmail;

	let defaultTitleSms = 'Your message!';
	let defaultDescSms = 'Lorem ipsum dolor sit amet..';
	let defaultLinkSms = '';
	let titleSms = defaultTitleSms;
	let descSms = defaultDescSms;
	let linkSms = defaultLinkSms;

	let tempTitlePush, tempDescPush, tempLinkPush;
	let tempTitleEmail, tempDescEmail, tempLinkEmail;
	let tempTitleSms, tempDescSms, tempLinkSms;

	let pushScheduleDate = '';
	let pushScheduleTime = '';

	let showDateTimePicker = false;

	function toggleDialog(id) {
		dialogStates = { ...dialogStates, [id]: true };

		if (id === 'push') {
			tempTitlePush = titlePush;
			tempDescPush = descPush;
			tempLinkPush = linkPush;
		} else if (id === 'email') {
			tempTitleEmail = titleEmail;
			tempDescEmail = descEmail;
			tempLinkEmail = linkEmail;
		} else if (id === 'sms') {
			tempTitleSms = titleSms;
			tempDescSms = descSms;
			tempLinkSms = linkSms;
		}
	}

	function closePush() {
		titlePush = defaultTitlePush;
		descPush = defaultDescPush;
		linkPush = defaultLinkPush;
		dialogStates.push = false;
	}

	function closeEmail() {
		titleEmail = defaultTitleEmail;
		descEmail = defaultDescEmail;
		linkEmail = defaultLinkEmail;
		dialogStates.email = false;
	}

	function closeSms() {
		titleSms = defaultTitleSms;
		descSms = defaultDescSms;
		linkSms = defaultLinkSms;
		dialogStates.sms = false;
	}

	let showSoundModal = false;
	let selectedSound = null;
	let hasSoundTemp = false;

	function openSoundModal() {
		showSoundModal = true;
	}

	function enableNotification(index) {
		let updatedNotifications = [...$notifications];

		updatedNotifications[index].enabled = !updatedNotifications[index].enabled;

		notifications.set(updatedNotifications);
	}

	function closeSoundModal() {
		showSoundModal = false;
		selectedSound = null;
	}

	function confirmSoundSelection() {
		hasSoundTemp = selectedSound !== null;
		closeSoundModal();
	}

	function savePush() {
		const newNotification = {
			type: 'Push',
			title: tempTitlePush,
			description: tempDescPush,
			link: tempLinkPush,
			pushScheduleDate: showDateTimePicker ? pushScheduleDate : '',
			pushScheduleTime: showDateTimePicker ? pushScheduleTime : '',
			hasSound: hasSoundTemp,
		};
		addNotification(newNotification);
		buttonStates.push = false;
		clearAll();
	}

	function clearAll() {
		tempTitlePush = '';
		tempDescPush = '';
		tempTitleEmail = '';
		tempDescEmail = '';
		tempTitleSms = '';
		tempDescSms = '';
		tempLinkPush = '';
		tempLinkEmail = '';
		tempLinkSms = '';
		pushScheduleDate = null;
		pushScheduleTime = null;
		hasSound = false;
	}

	function saveEmail() {
		const newNotification = {
			type: 'Email',
			title: tempTitleEmail,
			description: tempDescEmail,
			link: tempLinkEmail,
		};
		addNotification(newNotification);
		buttonStates.email = false;
		clearAll();
	}

	function saveSms() {
		const newNotification = {
			type: 'SMS',
			title: tempTitleSms,
			description: tempDescSms,
			link: tempLinkSms,
		};
		addNotification(newNotification);
		buttonStates.sms = false;
		clearAll();
	}

	let buttonStates = {
		push: false,
		email: false,
		sms: false,
		vocali: false,
	};

	function toggleButtonStates(id) {
		if (buttonStates[id]) {
			buttonStates[id] = false;
		} else {
			Object.keys(buttonStates).forEach((key) => {
				buttonStates[key] = false;
			});
			buttonStates[id] = true;
		}
	}

	function previewNotification(index) {
		const notification = $notifications[index];
		dispatch('showNotification', notification);
	}

	// Variabile per gestire la visibilità dell'input datetime-local

	let isRecording = false;
	let mediaRecorder;
	let audioChunks = [];

	async function startRecording() {
		if (!isRecording) {
			const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
			mediaRecorder = new MediaRecorder(stream);
			mediaRecorder.start();
			mediaRecorder.ondataavailable = (event) => {
				audioChunks.push(event.data);
			};
			mediaRecorder.onstop = () => {
				const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
				const audioUrl = URL.createObjectURL(audioBlob);
				const audio = new Audio(audioUrl);
				audio.play();
			};
			isRecording = true;
		} else {
			mediaRecorder.stop();
			isRecording = false;
		}
	}

	function formatDate(dateString) {
		if (!dateString) return '';
		const [year, month, day] = dateString.split('-');
		return `${day}/${month}/${year}`;
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

{#if showSoundModal}
	<div class="overlay">
		<div class="modal">
			<h2>Seleziona il Suono</h2>
			<div class="icon-grid">
				{#each ['nota1', 'nota2', 'nota3', 'nota4'] as sound}
					<div class="icon-item {selectedSound === sound ? 'active' : ''}">
						<div on:click={() => (selectedSound = sound)}>
							<img src="img/Nota_musicale.svg" alt="icon" />
						</div>
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
				{/each}
			</div>
			<div class="modal-actions">
				<button on:click={confirmSoundSelection}>Salva</button>
				<button on:click={closeSoundModal}>Annulla</button>
			</div>
		</div>
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
				<div class="customization-container">
					<!-- Bottoni orizzontali -->
					<div class="accordion_tipologia_feedback_alt">
						<button class="buttonStyleWide" on:click={() => toggleButtonStates('push')}
							>Push</button>
						<button class="buttonStyleWide" on:click={() => toggleButtonStates('email')}
							>Email</button>
						<button class="buttonStyleWide" on:click={() => toggleButtonStates('sms')}>SMS</button>
						<!-- <button class="buttonStyleWide" on:click={() => toggleButtonStates('vocali')}
							>Vocali</button> -->
					</div>

					<!-- Personalizzazione per ciascun componente -->
					{#if buttonStates.push}
						<div class="customization-panel">
							<p>Personalizzazione Push</p>
							<div class="customizeNotificationStyle">
								<label for="pushTitle">Titolo</label>
								<input type="text" name="pushTitle" id="pushTitle" bind:value={tempTitlePush} />
							</div>
							<div class="customizeNotificationStyle">
								<label for="pushDesc">Messaggio</label>
								<input
									type="text"
									name="pushDesc"
									style="height: 40px;"
									id="pushDesc"
									bind:value={tempDescPush} />
							</div>
							<div class="customizeNotificationLink">
								<label for="pushLink">Inserisci un link al messaggio</label>
								<input type="text" name="pushLink" id="pushLink" bind:value={tempLinkPush} />
							</div>

							{#if showDateTimePicker}
								<div class="customizeNotificationStyle">
									<label for="pushScheduleDate">Data</label>
									<input
										class="customW"
										type="date"
										name="pushScheduleDate"
										id="pushScheduleDate"
										bind:value={pushScheduleDate} />
								</div>
								<div class="customizeNotificationStyle">
									<label for="pushScheduleTime">Ora</label>
									<input
										class="customW"
										type="Time"
										name="pushScheduleTime"
										id="pushScheduleTime"
										bind:value={pushScheduleTime} />
								</div>
							{/if}
							<div class="action-buttons">
								<button
									class="buttonStylePlanning"
									on:click={() => (showDateTimePicker = !showDateTimePicker)}
									>Pianifica notifica
								</button>

								<button class="buttonStyle" on:click={openSoundModal}> Personalizza Suono </button>

								<button class="buttonStyle" on:click={closePush}>Annulla</button>
								<button
									class="buttonStyle"
									style="background-color:#9F1349; color:#FFFDFE;border:none"
									on:click={savePush}>Salva</button>
							</div>
						</div>
					{/if}

					{#if buttonStates.email}
						<div class="customization-panel">
							<p>Personalizzazione Email</p>
							<div class="customizeNotificationStyle">
								<label for="emailTitle">Titolo</label>
								<input type="text" name="emailTitle" id="emailTitle" bind:value={tempTitleEmail} />
							</div>
							<div class="customizeNotificationStyle">
								<label for="emailDesc">Messaggio</label>
								<input
									type="text"
									name="emailDesc"
									style="height: 40px;"
									id="emailDesc"
									bind:value={tempDescEmail} />
							</div>
							<div class="customizeNotificationLink">
								<label for="emailLink">Inserisci un link al messaggio</label>
								<input type="text" name="emailLink" id="emailLink" bind:value={tempLinkEmail} />
							</div>
							{#if showDateTimePicker}
								<div class="customizeNotificationStyle">
									<label for="pushScheduleDate">Data</label>
									<input
										class="customW"
										type="date"
										name="pushScheduleDate"
										id="pushScheduleDate"
										bind:value={pushScheduleDate} />
								</div>
								<div class="customizeNotificationStyle">
									<label for="pushScheduleTime">Ora</label>
									<input
										class="customW"
										type="Time"
										name="pushScheduleTime"
										id="pushScheduleTime"
										bind:value={pushScheduleTime} />
								</div>
							{/if}
							<div class="action-buttons">
								<button
									class="buttonStylePlanning"
									on:click={() => (showDateTimePicker = !showDateTimePicker)}
									>Pianifica notifica
								</button>
								<button class="buttonStyle" on:click={closeEmail}>Annulla</button>
								<button
									class="buttonStyle"
									style="background-color:#9F1349; color:#FFFDFE; border:none"
									on:click={saveEmail}>Salva</button>
							</div>
						</div>
					{/if}

					{#if buttonStates.sms}
						<div class="customization-panel">
							<p>Personalizzazione SMS</p>
							<div class="customizeNotificationStyle">
								<label for="smsTitle">Titolo</label>
								<input type="text" name="smsTitle" id="smsTitle" bind:value={tempTitleSms} />
							</div>
							<div class="customizeNotificationStyle">
								<label for="smsDesc">Messaggio</label>
								<input
									type="text"
									name="smsDesc"
									style="height: 40px;"
									id="smsDesc"
									bind:value={tempDescSms} />
							</div>

							<div class="customizeNotificationLink">
								<label for="smsLink">Inserisci un link al messaggio</label>
								<input type="text" name="smsLink" id="smsLink" bind:value={tempLinkSms} />
							</div>
							{#if showDateTimePicker}
								<div class="customizeNotificationStyle">
									<label for="pushScheduleDate">Data</label>
									<input
										class="customW"
										type="date"
										name="pushScheduleDate"
										id="pushScheduleDate"
										bind:value={pushScheduleDate} />
								</div>
								<div class="customizeNotificationStyle">
									<label for="pushScheduleTime">Ora</label>
									<input
										class="customW"
										type="Time"
										name="pushScheduleTime"
										id="pushScheduleTime"
										bind:value={pushScheduleTime} />
								</div>
							{/if}
							<div class="action-buttons">
								<button
									class="buttonStylePlanning"
									on:click={() => (showDateTimePicker = !showDateTimePicker)}
									>Pianifica notifica
								</button>
								<button class="buttonStyle" on:click={closeSms}>Annulla</button>
								<button
									class="buttonStyle"
									style="background-color: #9F1349; color:#FFFDFE; border:none"
									on:click={saveSms}>Salva</button>
							</div>
						</div>
					{/if}

					<!-- {#if buttonStates.vocali}
						<div class="customization-panel">
							<p>Personalizzazione Notifica Vocale</p>
							<div class="customizeNotificationStyle">
								<label>Regola Volume</label>
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
								{#if showDateTimePicker}
									<div class="customizeNotificationStyle">
										<label for="pushScheduleDate">Data</label>
										<input
											class="customW"
											type="date"
											name="pushScheduleDate"
											id="pushScheduleDate"
											bind:value={pushScheduleDate} />
									</div>
									<div class="customizeNotificationStyle">
										<label for="pushScheduleTime">Ora</label>
										<input
											class="customW"
											type="Time"
											name="pushScheduleTime"
											id="pushScheduleTime"
											bind:value={pushScheduleTime} />
									</div>
								{/if}
							</div>
							<div class="action-buttons">
								<button
									class="buttonStylePlanning"
									on:click={() => (showDateTimePicker = !showDateTimePicker)}
									>Pianifica notifica
								</button>
							</div>
						</div>
					{/if} -->
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
					{#each savedIconsList as icon, index}
						<div class="saved-icon-item">
							<div class="saved-icon-item-main">
								<div class="saved-icon-item-box">
									{#if editingIndex === index}
										<input type="text" bind:value={newTitle} class="rename-input" />
									{:else}
										<p class="titleIconPrev">{icon.title}</p>
									{/if}
									<div
										class={icon.animationType || ''}
										style="animation-duration: {icon.animationSpeed || 2}s;">
										{@html icon.svgContent.replace(
											'<svg',
											`
										<svg
											fill="${icon.fill}"
											stroke="${icon.stroke}"
										`
										)}
									</div>

									<!-- Se l'icona è in modalità modifica, mostriamo un input -->
									<div>
										{#if icon.desc}
											<p
												class="descIconPrev"
												style="color: {icon.desc.color}; font-weight: {icon.desc.weight}">
												{icon.desc.text}
											</p>
										{/if}
									</div>
								</div>
								<div class="saved-icon-item-box-alt">
									<button class="btn-alt">Aggiungi alla pagina</button>
									<button class="btn-alt">Rimuovi dalla pagina</button>
								</div>
							</div>
							<div class="saved-icon-item-action">
								{#if editingIndex === index}
									<button on:click={() => saveNewTitle(index)}>Salva</button>
								{:else}
									<button on:click={() => startEditing(index)}>Rinomina</button>
								{/if}
								<button on:click={() => previewIconHandler(icon)}>Anteprima</button>
								<button on:click={() => deleteIcon(index)}>Elimina</button>
							</div>
						</div>
					{/each}
					<h3 class="h3-notification">Notifiche Salvate</h3>
					{#each $notifications as notification, index}
						<div class="saved-notification">
							<div class="notificationBox">
								<div>
									<img src="img/Account.png" alt="" />
								</div>
								<div class="notificationBoxContent">
									<p class="titleNotificationBoxContent">{notification.title}</p>
									<p class="descNotificationBoxContent">{notification.description}</p>
									{#if notification.link}
										<p class="linkStyle">
											<img src="img/icone_libreria/link-variant.svg" alt="" />
											<a href={notification.link}>{notification.link}</a>
										</p>
									{/if}
								</div>
							</div>
							<div class="type-notificationAlt">
								{#if notification.pushScheduleDate && notification.pushScheduleTime}
									<span style="font-weight: 600; padding-right: 12px">
										{formatDate(notification.pushScheduleDate)} - {notification.pushScheduleTime}
									</span>
								{/if}
								{notification.type}
								{#if notification.hasSound}
									🎵
								{/if}
							</div>

							<div class="action-buttons">
								<button class="buttonStyle" on:click={() => enableNotification(index)}>
									{#if notification.enabled}
										Disattiva notifica
									{:else}
										Attiva notifica
									{/if}
								</button>
								<button class="buttonStyle" on:click={() => previewNotification(index)}>
									Anteprima
								</button>
								<button class="buttonStyle" on:click={() => removeNotification(index)}>
									Elimina
								</button>
							</div>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>

<style scoped>
	.notificationBox {
		display: flex;
		margin-top: 4px;
	}

	.titleNotificationBoxContent {
		font-size: 16px;
		font-weight: 600;
	}
	.descNotificationBoxContent {
		font-size: 12px;
		font-weight: 500;
	}

	.notificationBoxContent {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin-top: 14px;
		margin-left: 8px;
	}
	.h3-notification {
		margin-top: 16px;
		margin-bottom: 8px;
		font-size: 14px;
		margin-left: 8px;
		font-weight: 600;
	}
	.saved-notification {
		border: 1px solid black;
		padding: 8px;
		border-radius: 12px;
		margin-bottom: 4px;
		position: relative;
	}

	.type-notification {
		position: absolute;
		top: 4px;
		left: 8px;
		font-size: 12px;
		font-weight: 600;
		font-style: italic;
	}

	.type-notificationAlt {
		position: absolute;
		top: 4px;
		right: 8px;
		font-size: 12px;
		font-weight: 600;
		font-style: italic;
	}
	.customizeNotificationStyle {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 6px;
	}

	.customizeNotificationStyle label {
		font-size: 12px;
		font-weight: 600;
	}

	.customizeNotificationStyle input {
		padding: 4px;
		border-radius: 7px;
		border: #949494 1px solid;
	}
	.customization-container {
		margin-top: 20px;
	}

	.customizeNotificationLink {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 6px;
	}
	.customizeNotificationLink label {
		font-size: 12px;
		font-weight: 600;
	}

	.customizeNotificationLink input {
		padding: 4px;
		border-radius: 7px;
		border: #949494 1px solid;
	}

	.button-group {
		display: flex;
		gap: 6px;
		justify-content: space-between;
	}

	.buttonStyleWide {
		padding: 0.6rem 1rem;
		cursor: pointer;
	}

	.customization-panel {
		margin-top: 15px;
		padding: 15px;
		border: 1px solid #ccc;
		border-radius: 5px;
		background: #f9f9f9;
	}

	.customization-panel p {
		font-size: 18px;
		font-weight: 600;
		margin-bottom: 10px;
	}

	.action-buttons {
		display: flex;
		justify-content: end;
		gap: 12px;
		margin-top: 10px;
	}

	.buttonStyle {
		padding: 8px 15px;
	}

	.saved-icon-item {
		border: 1px solid black;
		padding: 8px;
		border-radius: 12px;
		margin-bottom: 4px;
	}

	.accordion-content {
		margin-top: 12px;
	}
	.saved-icon-item-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 50%;
		gap: 6px;
	}

	.saved-icon-item-box-alt {
		display: flex;
		flex-direction: column;
		align-items: end;
		width: 50%;
		gap: 6px;
	}

	.saved-icon-item-action {
		display: flex;
		gap: 4px;
		justify-content: end;
		margin-top: 8px;
	}

	.saved-icon-item-action button {
		padding: 6px;
	}

	.btn-alt {
		padding: 6px;
		width: 150px;
	}
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

	.accordion_tipologia_feedback_alt {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 6px;
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

	.pulse {
		background: rgb(255, 255, 255);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
		transform: scale(1);
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 #927c81;
		}

		70% {
			transform: scale(1);
			box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
		}

		100% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
		}
	}

	@keyframes rotateClockwise {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@keyframes rotateAntiClockwise {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(-360deg);
		}
	}

	@keyframes ping {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.2);
		}
		100% {
			transform: scale(1);
		}
	}

	.rotateClockwise {
		animation: rotateClockwise linear infinite;
	}

	.rotateAntiClockwise {
		animation: rotateAntiClockwise linear infinite;
	}

	.ping {
		animation: ping ease-in-out infinite;
	}

	#i_miei_feedback_notifiche {
		margin-bottom: 54px;
	}

	.customW {
		width: 165px;
	}

	.buttonStylePlanning {
		margin-right: auto;
		padding: 2px 8px;
	}

	.titleIconPrev {
		font-weight: 600;
		font-size: 18px;
		padding-bottom: 8px;
	}

	.descIconPrev {
		font-weight: 400;
		font-size: 12px;
	}

	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
	}

	.modal {
		background: white;
		padding: 20px;
		border-radius: 12px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
		text-align: center;
	}

	.icon-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 16px;
		margin: 20px 0;
	}

	.icon-item {
		cursor: pointer;
		padding: 10px;
		border: 2px solid transparent;
		border-radius: 8px;
		transition: all 0.3s;
	}

	.icon-item:hover {
		border-color: #007bff;
	}

	.icon-item.active {
		border-color: #007bff;
	}

	.modal-actions {
		display: flex;
		justify-content: center;
		gap: 16px;
	}

	.modal-actions button {
		padding: 8px 16px;
		border-radius: 6px;
		cursor: pointer;
	}

	.linkStyle {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.linkStyle a {
		font-style: italic;
		font-size: 10px;
		color: black;
	}

	.linkStyle a:visited {
		color: black;
	}

	.linkStyle img {
		width: 20px;
	}

	.saved-icon-item-main {
		display: flex;
	}
</style>
