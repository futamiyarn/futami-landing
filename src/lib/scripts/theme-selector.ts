// @ts-nocheck
let focus_status = 'active',
	themeFav = '';
const darkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const theme = 0;

const changeFavicon = () => {
	const visibility = document.visibilityState == 'visible';
	const change_fav = visibility ? 'active' : `inactive-${themeFav}`;
	const favicon_selector = Array.from(
		document.getElementsByClassName('favicon')
	);

	favicon_selector.forEach((favicon) => {
		const link = favicon as HTMLLinkElement;
		link.href = link.href.replace(focus_status, change_fav);
	});

	focus_status = change_fav;
};

//

function changeTheme() {
	darkScheme.matches ? (themeFav = 'dark') : (themeFav = 'light');
	document.documentElement.classList.toggle('dark', darkScheme.matches);
}

darkScheme.onchange = () => changeTheme();
window.addEventListener('visibilitychange', () => changeFavicon());

changeTheme();
changeFavicon();

const logoDesktop = Array.from(
	document.getElementsByClassName('logo-desktop')
) as HTMLElement[];

const randomChange = Math.random();
console.log(randomChange);

if (randomChange < 0.08) {
	logoDesktop[0].style.display = 'none';
	logoDesktop[1].removeAttribute('style');
}
