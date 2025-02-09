import { writable } from 'svelte/store';

// Funzione per verificare se siamo in ambiente browser
function isBrowser() {
	return typeof window !== 'undefined';
}

// Funzione per caricare i dati da sessionStorage
function loadFromSessionStorage(key) {
	if (isBrowser()) {
		const data = sessionStorage.getItem(key);
		return data ? JSON.parse(data) : [];
	}
	return []; // Ritorna un array vuoto se non siamo nel browser
}

// Funzione per salvare i dati in sessionStorage
function saveToSessionStorage(key, data) {
	if (isBrowser()) {
		sessionStorage.setItem(key, JSON.stringify(data));
	}
}

// Store per le notifiche, caricato da sessionStorage
export const notifications = writable(isBrowser() ? loadFromSessionStorage('notifications') : []);

// Funzione per aggiungere una nuova notifica
export function addNotification(notification) {
	notifications.update((n) => {
		const updatedNotifications = [...n, notification];
		saveToSessionStorage('notifications', updatedNotifications);
		return updatedNotifications;
	});
}

// Funzione per rimuovere una notifica
export function removeNotification(index) {
	notifications.update((n) => {
		const updatedNotifications = n.filter((_, i) => i !== index);
		saveToSessionStorage('notifications', updatedNotifications);
		return updatedNotifications;
	});
}
