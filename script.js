

(function () {
	const $ = (sel) => document.getElementById(sel);
	const $$ = (sel) => Array.from(document.querySelectorAll(sel));

	let darkmode = localStorage.getItem('darkmode');
	const themeSwitch = $('themeBtn');
	let time = $("current-time");
	const enableDarkmode = () => {
		document.body.classList.add('darkmode')
		localStorage.setItem('darkmode', 'active')
    	};

	const disableDarkmode = () => {
		document.body.classList.remove('darkmode')
		localStorage.removeItem('darkmode')
	};

	if(darkmode ==="active") enableDarkmode()

	themeSwitch.addEventListener("click", () => {
		darkmode = localStorage.getItem('darkmode')
		darkmode !== "active" ? enableDarkmode() : disableDarkmode()
	});

	setInterval(() => {
		let d = new Date();
		time.innerHTML =  d.toLocaleTimeString();
	    }, 1000);

	const cards = [
		{ mand: "你好", zhu: "ㄋㄧˇ ㄏㄠˇ", eng: "Hello"},
		{ mand: "謝謝", zhu: "ㄒㄧㄝˋ ㄒㄧㄝˋ", eng: "Thank you"},
		{ mand: "再見", zhu: "ㄗㄞˋ ㄐㄧㄢˋ", eng: "Goodbye"},
		{ mand: "對不起", zhu: "ㄉㄨㄟˋ ㄅㄨˋ ㄑㄧˇ", eng: "Sorry"},
		{ mand: "請", zhu: "ㄑㄧㄥˇ", eng: "Please"},
		{ mand: "喝水", zhu: "ㄏㄜ ㄕㄨㄟˇ", eng: "Drink water"},
		{ mand: "好吃", zhu: "ㄏㄠˇ ㄔ", eng: "Delicious"},
	];

	const nextBtn = $("nextPr");
	const fcMand = $("fcMan");
	const bcZhu = $("bcZhu");
	const bcEng = $("bcRes");

	function setCard(card) {
		fcMand.textContent = card.mand;
		bcZhu.textContent = card.zhu;
		bcEng.textContent = card.eng;
	}

	nextBtn.addEventListener("click",() => {
		setCard(cards[Math.floor(Math.random() * cards.length)]);
	});
})();


