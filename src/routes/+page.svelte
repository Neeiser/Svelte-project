<script>
	import { fly } from 'svelte/transition';
	import FeedbackNotifiche from './Pagina2/+page.svelte';
	import { savedIcons } from '../stores/store'; // Importiamo lo store
	import { previewIcon, setPreviewIcon } from '../stores/previewIconStore';

	let showFeedbackNotifiche = false;

	function toggleFeedbackNotifiche() {
		showFeedbackNotifiche = !showFeedbackNotifiche;
	}

	let selectedIcon = null;
	let iconTimeout = null;

	$: previewIcon.subscribe((icon) => {
		if (icon) {
			selectedIcon = icon;

			// Cancella il timeout precedente se presente
			if (iconTimeout) {
				clearTimeout(iconTimeout);
			}

			// Imposta un timeout per rimuovere l'icona dopo displayDuration secondi
			if (icon.displayDuration) {
				iconTimeout = setTimeout(() => {
					selectedIcon = null;
				}, icon.displayDuration * 1000);
			}
		}
	});

	function previewIconHandler(event) {
		setPreviewIcon(event.detail);
	}

	let activeNotification = null;

	function previewNotificationHandler(notification) {
		activeNotification = notification;

		setTimeout(() => {
			activeNotification = null;
		}, 5000); // La notifica scompare dopo 5 secondi
	}
</script>

<header style="z-index: 100;">
	<div class="sideContainer">
		<button class="noBorder" on:click={toggleFeedbackNotifiche}>
			<img alt="" src="img/logoenaming.svg" class="logo" />
		</button>

		<div class="d-flex align-items-center">
			<span class="fs_14 fw_400">Salvato!</span>
			<img alt="" src="/img/cloud.svg" class="ml-10" />
		</div>

		<div class="d-flex align-items-center">
			<img alt="" src="/img/clock.svg" />
			<img alt="" src="/img/Vector.png" class="pointer ml-10" />
		</div>

		<div class="d-flex align-items-center">
			<img alt="" src="/img/back_arrow.svg" />
			<img alt="" src="/img/forward_arrow.svg" />
			<img alt="" src="/img/Vector.png" class="pointer ml-10" />
		</div>
	</div>
	<div class="d-flex align-items-center pointer">
		<span class="fs_20 fw_600">Nome progetto</span>
		<img alt="" src="/img/Vector.png" class="ml-10" />
	</div>
	<div class="sideContainer">
		<img alt="" src="/img/profile_picture.svg" class="pointer" />

		<img alt="" src="/img/play.svg" class="pointer" />

		<img alt="" src="/img/download.svg" class="pointer" />

		<button class="btn btn-secondary btn-small">
			<span>Esci</span>
			<img alt="" src="/img/Vector.png" class="pointer ml-10" />
		</button>
	</div>
</header>

<div class="pageContainer">
	<div class="sideBar">
		<div class="tab top">
			<img alt="" src="/img/stile.svg" />
			<span>Stile</span>
		</div>
		<div class="tab">
			<img alt="" src="/img/pagine.svg" />
			<span>Pagine</span>
		</div>
		<div class="tab active">
			<img alt="" src="/img/componi.svg" />
			<span>Componi</span>
		</div>
		<div class="tab">
			<img alt="" src="/img/caricamenti.svg" />
			<span>Caricamenti</span>
		</div>
		<div class="tab">
			<img alt="" src="/img/libreria.svg" />
			<span>Libreria</span>
		</div>
		<div class="tab">
			<img alt="" src="/img/impostazioni.svg" />
			<span>Impostazioni</span>
		</div>
		<div class="tab"></div>
	</div>
	<div class="content">
		{#if showFeedbackNotifiche}
			<div transition:fly={{ x: -600, duration: 300 }} style="z-index: 50;">
				<FeedbackNotifiche
					on:showNotification={(event) => previewNotificationHandler(event.detail)}
					on:closeFeedback={toggleFeedbackNotifiche}
					on:previewIcon={(event) => previewIconHandler(event)} />
			</div>
		{/if}
		<div class="leftShoulder">
			<div class="d-flex">
				<h1>Componi</h1>
				<img alt="" src="/img/info.svg" class="infoPoint" />
			</div>

			<div class="sectionTabs justify-content-around">
				<div class="sectionTab">
					<span>Container</span>
				</div>
				<div class="sectionTab active">
					<span>Componenti</span>
				</div>
			</div>

			<div class="d-flex align-items-center">
				<div class="formGroup inputWithIcon w-100 m-0">
					<input type="search" placeholder="Cerca componente" class="m-0" />
					<img alt="" src="/img/search.svg" />
				</div>
			</div>

			<div class="section flex-section">
				<div class="Rettangoli-componenti">
					<img alt="" src="/img/icone_libreria/icona_16.svg" />
					<p>Titolo</p>
				</div>

				<div class="Rettangoli-componenti">
					<img alt="" src="/img/img-testo.svg" />
					<p>Testo</p>
				</div>

				<div class="Rettangoli-componenti">
					<img alt="" src="/img/icone_libreria/icona_17.svg" />
					<p>Bottone</p>
				</div>

				<div class="Rettangoli-componenti">
					<img alt="" src="/img/icone_libreria/icona_28.svg" />
					<p>Immagine</p>
				</div>
				<div class="Rettangoli-componenti">
					<img alt="" src="/img/icone_libreria/icona_29.svg" />
					<p>Video</p>
				</div>
				<div class="Rettangoli-componenti">
					<img alt="" src="/img/audiosvg.svg" />
					<p>Audio</p>
				</div>
				<div class="Rettangoli-componenti">
					<img alt="" src="/img/questionario.svg" />
					<p>Questionario Lickert</p>
				</div>

				<div class="Rettangoli-componenti">
					<img alt="" src="/img/icone_libreria/icona_21.svg" />
					<p>Questionario domande</p>
				</div>
				<div class="Rettangoli-componenti">
					<img alt="" src="/img/pen-line.svg" />
					<p>Questionario Qualtrics</p>
				</div>

				<button class="Rettangoli-componenti pulse" on:click={toggleFeedbackNotifiche}>
					<img alt="" src="/img/icone_feedback__notification.svg" />
					<p>Feedback e Notifiche</p>
				</button>

				<div class="Rettangoli-componenti">
					<img alt="" src="/img/grafico.svg" />
					<p>Grafico</p>
				</div>
				<div class="Rettangoli-componenti">
					<img alt="" src="/img/chiave-login.svg" />
					<p>Login</p>
				</div>
				<div class="Rettangoli-componenti">
					<img alt="" src="/img/Form.svg" />
					<p>Form</p>
				</div>
				<div class="Rettangoli-componenti">
					<img alt="" src="/img/Hamburger_menù.svg" />
					<p>Hamburger menù</p>
				</div>
				<div class="Rettangoli-componenti">
					<img alt="" src="/img/lucchetto_privacy.svg" />
					<p>Informativa privacy</p>
				</div>
				<div class="Rettangoli-componenti">
					<img alt="" src="/img/icon_logocomponente.svg" />
					<p>Logo</p>
				</div>
				<div class="Rettangoli-componenti">
					<img alt="" src="/img/calendario.svg" />
					<p>Calendario</p>
				</div>
				<div class="Rettangoli-componenti">
					<img alt="" src="/img/social.svg" />
					<p>Social</p>
				</div>
				<div class="Rettangoli-componenti">
					<img alt="" src="/img/profilo_utentecomponente.svg" />
					<p>Profilo utente</p>
				</div>
			</div>
		</div>

		<div class="centeredContent">
			<div class="mobilePreview">
				{#if activeNotification}
					<div transition:fly={{ y: -20, duration: 300 }} class="notification-banner">
						<div class="notificationBox">
							<div>
								<img src="img/Account.png" alt="" />
							</div>
							<div class="notificationBoxContent">
								<div class="titleNotificationBoxContent">{activeNotification.title}</div>
								<div class="descNotificationBoxContent">{activeNotification.description}</div>
							</div>
						</div>
					</div>
				{/if}
				{#if selectedIcon}
					<div class="flexPreviewBox">
						<div
							class={selectedIcon.animationType || ''}
							style="animation-duration: {selectedIcon.animationSpeed || 2}s; 
		       transform: scale({selectedIcon.scale || 1})">
							{@html selectedIcon.svgContent.replace(
								'<svg',
								`
		<svg fill="${selectedIcon.fill}" stroke="${selectedIcon.stroke}"
		`
							)}
						</div>
						{#if selectedIcon.desc}
							<div
								class="descpreview"
								style="color: {selectedIcon.desc.color}; font-weight: {selectedIcon.desc.weight}">
								{selectedIcon.desc.text}
							</div>
						{/if}
					</div>
				{/if}
			</div>

			<div class="pageNumberContainer">
				<span class="fw_400">1/5</span>
				<img alt="" src="/img/Vector.png" class="ml-10" />
			</div>
			<div class="footer">
				<div class="d-flex align-items-center">
					<div class="zoom">
						<input id="zoom_input" type="range" min="0" max="100" step="1" />
					</div>
					<img alt="" src="/img/griglia.svg" class="mx-55 pointer" />
					<img alt="" src="/img/help.svg" class="pointer" />
				</div>
			</div>
		</div>
	</div>
</div>

<style scoped>
	.leftShoulder {
		z-index: 10;
	}
	.flex-section {
		display: flex !important;
		flex-wrap: wrap;
	}
	a {
		text-decoration: none;
	}

	.noBorder {
		border: none;
	}
	.noBorder:hover {
		background: transparent;
	}

	a:link,
	a:visited {
		color: black;
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
	.notification-banner {
		position: absolute;
		top: 10px;
		left: 50%;
		transform: translateX(-50%);
		width: 90%;
		max-width: 260px;
		background: white;
		color: black;
		padding: 10px;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		text-align: left;
		display: flex;
		align-items: center;
		gap: 10px;
		animation: fadeOut 0.3s ease-out 4.7s;
		z-index: 100;
	}

	.notificationBox {
		display: flex;
		align-items: center;
	}

	.notificationBox img {
		width: 32px;
		height: 32px;
		border-radius: 50%;
	}

	.notificationBoxContent {
		display: flex;
		flex-direction: column;
		gap: 4px;
		margin-left: 8px;
	}

	.titleNotificationBoxContent {
		font-size: 14px;
		font-weight: 600;
	}

	.descNotificationBoxContent {
		font-size: 12px;
		font-weight: 500;
		opacity: 0.9;
	}

	@keyframes fadeOut {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	@keyframes rotateClockwise {
		from {
			transform: rotate(0deg) scale(var(--scale, 1));
		}
		to {
			transform: rotate(360deg) scale(var(--scale, 1));
		}
	}

	@keyframes rotateAntiClockwise {
		from {
			transform: rotate(0deg) scale(var(--scale, 1));
		}
		to {
			transform: rotate(-360deg) scale(var(--scale, 1));
		}
	}

	@keyframes ping {
		0% {
			transform: scale(calc(var(--scale, 1) * 1));
		}
		50% {
			transform: scale(calc(var(--scale, 1) * 1.2));
		}
		100% {
			transform: scale(calc(var(--scale, 1) * 1));
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

	.flexPreviewBox {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.descpreview {
		text-align: center;
		margin-top: 16px;
	}
</style>
