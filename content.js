console.log('Github Auto Dark Mode init...');

const root = document.getElementsByTagName('html')[0];
const switchMode = (mode) => root.setAttribute('data-color-mode', (mode ? 'dark' : 'light'));

window.matchMedia('(prefers-color-scheme: dark)').addListener(function (e) {
	switchMode(e.matches);
});

switchMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
