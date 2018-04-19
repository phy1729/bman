"use strict";

const input = document.getElementById("name"),
      urlFormats = [
	"https://man.openbsd.org/{}",
	"https://www.freebsd.org/cgi/man.cgi?query={}&manpath=FreeBSD+12-current",
	"http://netbsd.gw.com/cgi-bin/man-cgi?{}++NetBSD-current",
	"https://leaf.dragonflybsd.org/cgi/web-man?command={}"
];

input.addEventListener("keyup", (event) => {
	if (event.key === "Enter") {
		chrome.windows.create({"url": urlFormats.map(x => x.replace("{}", input.value))});
		input.value = "";
	}
});
