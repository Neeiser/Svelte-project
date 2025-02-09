import { writable } from 'svelte/store';

export const previewIcon = writable(null);

export function setPreviewIcon(icon) {
	previewIcon.set(icon);
}

export function clearPreviewIcon() {
	previewIcon.set(null);
}
