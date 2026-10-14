/**
 * Theme selector: cycles through `system` → `light` → `dark`.
 * - Preference is persisted in localStorage under the `theme` key.
 * - `system` resolves via `prefers-color-scheme` and reacts to OS changes.
 * - The initial `.dark` class is applied by an inline script in Layout.astro
 *   (before paint) to avoid a flash of the wrong theme.
 */

export type ThemeMode = 'system' | 'light' | 'dark';

const STORAGE_KEY = 'theme';
const CYCLE: ThemeMode[] = ['system', 'light', 'dark'];

// astro-icon renders local icons as `<symbol id="ai:local:<name>">` + `<use href="#...">`.
const ICONS: Record<ThemeMode, string> = {
	system: '#ai:local:theme-system',
	light: '#ai:local:theme-light',
	dark: '#ai:local:theme-dark'
};

const LABELS: Record<ThemeMode, string> = {
	system: 'Theme: system — click for light',
	light: 'Theme: light — click for dark',
	dark: 'Theme: dark — click for system'
};

const darkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function readStored(): ThemeMode {
	const value = localStorage.getItem(STORAGE_KEY);
	return value === 'light' || value === 'dark' || value === 'system'
		? value
		: 'system';
}

function resolveDark(mode: ThemeMode): boolean {
	return mode === 'dark' || (mode === 'system' && darkScheme.matches);
}

function applyTheme(mode: ThemeMode) {
	document.documentElement.classList.toggle('dark', resolveDark(mode));
	updateToggle(mode);
}

function updateToggle(mode: ThemeMode) {
	const button = document.getElementById('theme-toggle');
	if (!button) return;

	const use = button.querySelector('use');
	if (use) use.setAttribute('href', ICONS[mode]);

	button.setAttribute('aria-label', LABELS[mode]);
	button.setAttribute('aria-pressed', String(mode !== 'system'));
	button.setAttribute('data-theme-mode', mode);
}

function cycle() {
	const current = readStored();
	const next = CYCLE[(CYCLE.indexOf(current) + 1) % CYCLE.length];
	localStorage.setItem(STORAGE_KEY, next);
	applyTheme(next);
}

function init() {
	const button = document.getElementById('theme-toggle');
	if (button) button.addEventListener('click', cycle);

	// Reflect the (inline-script-applied) theme in the toggle control.
	applyTheme(readStored());

	// When following the OS, react to scheme changes live.
	darkScheme.addEventListener('change', () => {
		if (readStored() === 'system') applyTheme('system');
	});
}

init();
