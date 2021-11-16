window.addEventListener("DOMContentLoaded", () => {
	function count() {
		const daysBox = document.getElementById("days");
		const hrsBox = document.getElementById("hours");
		const minsBox = document.getElementById("minutes");
		const secsBox = document.getElementById("seconds");
		const startDate = new Date(2021, 7, 11);
		let today = new Date();
		let second = 1000,
			minute = second * 60,
			hour = minute * 60,
			day = hour * 24;
		let gap = today - startDate;

		let textSecs = Math.floor((gap % minute) / second);
		let textMins = Math.floor((gap % hour) / minute);
		let textHrs = Math.floor((gap % day) / hour);
		let textDays = Math.floor(gap / day);

		daysBox.innerHTML = textDays;
		hrsBox.innerHTML = textHrs;
		minsBox.innerHTML = textMins;
		secsBox.innerHTML = textSecs;
	}
	setInterval(count, 1000);
});
