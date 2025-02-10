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

// Store per i messaggi personalizzati, caricati da sessionStorage
export const messageStore = writable({
	conferma: loadFromSessionStorage('conferma'),
	errore: loadFromSessionStorage('errore'),
	attesa: loadFromSessionStorage('attesa'),
	supporto: loadFromSessionStorage('supporto'),
});

// Funzione per aggiungere un nuovo messaggio a una sezione specifica
export function addMessage(section, message) {
	messageStore.update((store) => {
		const updatedMessages = [...store[section], message];
		saveToSessionStorage(section, updatedMessages); // Salva in sessionStorage
		return { ...store, [section]: updatedMessages };
	});
}

// Funzione per rimuovere un messaggio da una sezione specifica
export function removeMessage(section, index) {
	messageStore.update((store) => {
		const updatedMessages = store[section].filter((_, i) => i !== index);
		saveToSessionStorage(section, updatedMessages); // Salva in sessionStorage
		return { ...store, [section]: updatedMessages };
	});
}
