// store.js
import { writable } from 'svelte/store';

// Verifica se siamo in ambiente browser
function isBrowser() {
	return typeof window !== 'undefined';
}

// Salva i dati nel sessionStorage
function saveToSessionStorage(data) {
	if (isBrowser()) {
		sessionStorage.setItem('lastItem', JSON.stringify(data));
	}
}

// Carica i dati dal sessionStorage
function loadFromSessionStorage() {
	if (isBrowser()) {
		const data = sessionStorage.getItem('lastItem');
		return data ? JSON.parse(data) : null;
	}
	return null;
}

// Stato iniziale (carica l'ultimo elemento dal sessionStorage se presente)
const initialItem = loadFromSessionStorage();

// Creazione dello store
export const lastItem = writable(initialItem);

// Funzione per aggiungere un elemento (sovrascrive l'ultimo)
export function addItem(item) {
	lastItem.set(item);
	saveToSessionStorage(item);
}
