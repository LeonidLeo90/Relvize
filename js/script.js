"use strict"

// const featuresItems = document.querySelectorAll('.features__item');
// const featuresImages = document.querySelectorAll('[._icon-]');
// const featuresTitle = document.querySelectorAll('.features__title');
// const featuresText = document.querySelectorAll('.features__text');

// (featuresItems.length){
// 	featuresItems.forEach function(featuresItem) {
// 		featuresItem.classList.toggle('_active');
// 	}
// }

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	grabCursor: true,
	slideToClickedSlide: false,
	slidesPerView: 6,
	speed: 800,
	effect: 'slide',
	centeredSlides: false,

	autoplay: {
		// Пауза между прокруткой
		delay: 3000,
		// Закончить на последнем слайде
		stopOnLastSlide: false,
		// Отключить после ручного переключения
		disableOnInteraction: false
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1140: {
			slidesPerView: 6,
		}
	},


	hashNavigation: {
		// Отслеживать состояние
		watchState: true,
	},
});

/*наведение на родительский блок весь блок белый цвет включая иконку*/

// const getIntouch = document.querySelectorAll('.getintouch__column');
// const getIcon = document.querySelectorAll(['._icon-']);

// document.addEventListener("click", function (e) {
// 	const targetElement = e.target;

// 	if (targetElement.closest('.getintouch__column')) {
// 		targetElement.closest(['._icon-']).classList.toggle('._active')
// 		e.preventDefault();
// 	} else {
// 		removeClasses(getIntouch, '_active');
// 	}
// })

const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 300;

if (popupLinks.length > 0) {
	for (let i = 0; i < popupLinks.length; i++) {
		const popupLink = popupLinks[i];
		popupLink.addEventListener("click", (e) => {
			const popupName = popupLink.getAttribute("href").replace("#", "");
			const currentPopup = document.getElementById(popupName);
			popupOpen(currentPopup);
			e.preventDefault();
		});
	}
}

const popupCloseBtn = document.querySelectorAll(".close-popup");
if (popupCloseBtn.length > 0) {
	for (let i = 0; i < popupCloseBtn.length; i++) {
		const el = popupCloseBtn[i];
		el.addEventListener("click", (e) => {
			popupClose(el.closest(".popup"));
			e.preventDefault();
		});
	}
}

const popupOpen = (currentPopup) => {
	if (currentPopup && unlock) {
		const popupActive = document.querySelector(".popup.open");
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		currentPopup.classList.add("open");
		currentPopup.addEventListener("click", (e) => {
			if (!e.target.closest(".popup__content")) {
				popupClose(e.target.closest(".popup"));
			}
		});
	}
};

const popupClose = (popupActive, doUnlock = true) => {
	if (unlock) {
		popupActive.classList.remove("open");
		if (doUnlock) {
			bodyUnlock();
		}
	}
};


const bodyLock = () => {
	const lockPaddingValue =
		window.innerWidth - body.offsetWidth + "px";
	if (lockPadding.length > 0) {
		for (let i = 0; i < lockPadding.length; i++) {
			const el = lockPadding[i];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add("lock");

	unlock = false;
	setTimeout(() => {
		unlock = true;
	}, timeout);
};

const bodyUnlock = () => {
	setTimeout(() => {
		for (let i = 0; i < lockPadding.length; i++) {
			const el = lockPadding[i];
			el.style.paddingRight = "0px";
		}
		body.style.paddingRight = "0px";
		body.classList.remove("lock");
	}, timeout);
};

document.addEventListener("keydown", (e) => {
	if (e.which === 27) {
		const popupActive = document.querySelector(".popup.open");
		popupClose(popupActive);
	}
});


const linkBtn = document.querySelector('.link-btn')
if (linkBtn.length > 0) {
	linkBtn.addEventListener("click", (e) => {
		const targetElement = e.target;
		if (linkBtn.targetElement == true){
			
		}
		e.preventDefault();
	});
}