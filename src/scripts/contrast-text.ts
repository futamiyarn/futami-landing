function betterContrastColor(hex: any) {
	let threshold = 130; // about 256/2 - lower values results into darker text on dark background
	let colorBrightness =
		(hexToRed(hex) * 299 + hexToGreen(hex) * 587 + hexToBlue(hex) * 114) / 1000;

	function cleanHex(h: string) {
		return h.charAt(0) == '#' ? h.substring(1, 7) : h;
	}
	function hexToRed(h: any) {
		return parseInt(cleanHex(h).substring(0, 2), 16);
	}
	function hexToGreen(h: any) {
		return parseInt(cleanHex(h).substring(2, 4), 16);
	}
	function hexToBlue(h: any) {
		return parseInt(cleanHex(h).substring(4, 6), 16);
	}

	return colorBrightness > threshold ? '#000000' : '#ffffff';
}
