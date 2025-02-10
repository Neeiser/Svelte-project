import { writable } from 'svelte/store';

// Funzione per verificare se siamo in ambiente browser
function isBrowser() {
	return typeof window !== 'undefined';
}

// Salvataggio in sessionStorage
function saveToSessionStorage(key, data) {
	if (isBrowser()) {
		sessionStorage.setItem(key, JSON.stringify(data));
	}
}

// Caricamento dal sessionStorage
function loadFromSessionStorage(key) {
	if (isBrowser()) {
		const data = sessionStorage.getItem(key);
		return data ? JSON.parse(data) : [];
	}
	return [];
}

// Store per icone salvate
export const savedIcons = writable(loadFromSessionStorage('savedIcons'));

// Aggiungere un'icona all'array
export function addSavedIcon(icon) {
	savedIcons.update((icons) => {
		const updatedIcons = [...icons, { ...icon, id: icons.length }]; // Assegna un id univoco
		saveToSessionStorage('savedIcons', updatedIcons);
		return updatedIcons;
	});
}

// Aggiornare il titolo di un'icona esistente
export function updateIconTitle(index, newTitle) {
	savedIcons.update((icons) => {
		icons[index].title = newTitle;
		saveToSessionStorage('savedIcons', icons);
		return icons;
	});
}

// Eliminare un'icona dallo store
export function removeIcon(index) {
	savedIcons.update((icons) => {
		const updatedIcons = icons.filter((_, i) => i !== index);
		saveToSessionStorage('savedIcons', updatedIcons);
		return updatedIcons;
	});
}

// Funzione per aggiornare la descrizione di un'icona
export function updateIconDescription(iconId, description) {
	savedIcons.update((icons) => {
		const updatedIcons = icons.map((icon) => {
			if (icon.id == iconId) {
				return { ...icon, desc: description };
			}
			return icon;
		});
		saveToSessionStorage('savedIcons', updatedIcons);
		return updatedIcons;
	});
}
