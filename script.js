function showTime() {
	const date = new Date();

	let today = date.toLocaleString("de", { weekday: "long" });
	let hour = date.toLocaleString("pl", { hour: "2-digit" }); // use 24h time format
	let minute = date.toLocaleString("de", { minute: "2-digit" });
	let second = date.toLocaleString("de", { second: "2-digit" });
	let day = date.toLocaleString("de", { day: "2-digit" });
	let month = date.toLocaleString("de", { month: "2-digit" });
	let year = date.toLocaleString("de", { year: "numeric" });

	minute = addZero(minute);
	second = addZero(second);

	document.getElementById(
		"date"
	).innerHTML = `${today}, ${hour}:${minute}:${second} | ${day}/${month}/${year}`;
	setTimeout(showTime, 0);
}

function addZero(i) {
	if (i.length < 2) i = "0" + i;
	return i;
}

showTime();