/** @type {import('tailwindcss').Config} */


// font-family: 'Merriweather', serif;
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		fontFamily: {
			nav: ["Signika Negative", 'sans - serif'],
		},
		extend: {
			colors: {
				background: {
					DEFAULT: "#f4f5fa",
					dark: "#000000",
					light: "#FFF",
				},
				primary: {
					DEFAULT: "#9155fd",
					light: "#c5a6fe",
					dark: "#000000",
				},
				font: {
					DEFAULT: "#534f5a",
					light: "#79767e",
					dark: "#000000",
				},
				accent: {
					lpurple: "rgba(195, 163, 254, 1)",
					dpurple: "rgba(146, 86, 253, 1)",
					green: "#56ca00",
					red: "#ff3e1d",
					yellow: "#ffb400",
					cyan: "#16b1ff",
					gray: "#8a8d93",
					dark: "#000000",
					indigo: "#9155fd",
					indigo1: "#8b4bfd",
				},
			},
		},
	},
	plugins: [],
};
