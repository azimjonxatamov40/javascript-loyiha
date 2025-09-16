/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/class.js":
/*!**************************!*\
  !*** ./modules/class.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function classCard(selector){
class OfferMenu {
    constructor(src, alt, title, descr, discount, sale, parentSelector) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.discount = discount;
      this.sale = sale;
      this.parent = document.querySelector(parentSelector);
      this.formatToUSD();
    }

    formatToUSD() {
      this.discount = this.discount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
      this.sale = this.sale.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    }

    render() {
      const element = document.createElement("div");
      element.innerHTML = `
            <img src="${this.src}" alt="${this.alt}">
            <div>
              <h3>${this.title}</h3>
              <p>${this.descr}</p>
              <p><del>${this.discount}</del> <span class="primary-text">${this.sale}</span></p>
            </div>
          
      `;

      this.parent.append(element);
    }
  }

  fetch("http://localhost:3000/offers", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      data.forEach((offer) => {
        const { src, alt, title, descr, discount, sale } = offer;
        new OfferMenu(
          src,
          alt,
          title,
          descr,
          discount,
          sale,
          ".offers-items"
        ).render();
      });
    });
  

  class DayTime {
    constructor(src, alt, title, time, secondSelector) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.time = time;
      this.second = document.querySelector(secondSelector);
    }

    render() {
      const times = document.createElement("div");
      times.innerHTML = `
            <img src="${this.src}" alt="${this.alt}">
            <div>
              <h3>${this.title}</h3>
              <p>${this.time}</p>
            </div>
          
      `;

      this.second.append(times);
    }
  }

  const daytime = [
    {
      src: "./img/breckfastIcon.png",
      alt: "Breakfast",
      title: "Breakfast",
      time: "8:00 am to 10:00 am",
    },
    {
      src: "./img/lunchIcon.png",
      alt: "Lunch",
      title: "Lunch",
      time: "4:00 pm to 7:00 pm",
    },
    {
      src: "./img/dinnerIcon.png",
      alt: "Dinner",
      title: "Dinner",
      time: "9:00 pm to 1:00 Am",
    },
    {
      src: "./img/dessertIcon.png",
      alt: "dessert",
      title: "dessert",
      time: "All day",
    },
  ];

  daytime.forEach((daytimeitem) => {
    const { src, alt, title, time } = daytimeitem;
    new DayTime(src, alt, title, time, selector).render();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (classCard);

/***/ }),

/***/ "./modules/forms.js":
/*!**************************!*\
  !*** ./modules/forms.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./modules/modal.js");


function forms(formSelector, modalTimerId) {
  const form = document.querySelector(formSelector),
    telegramTokenBot = "8059498214:AAFZmBdQvv1TTURAY2y3NtVpmzQ0_y-xSiw",
    chatId = "5201044429";
  const message = {
    leading: "Loading...",
    success: "Thanks for contacting with us",
    failure: "Something went wrong",
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const loader = document.createElement("div");
    loader.classList.add("loader");
    loader.style.width = "50px";
    loader.style.height = "50px";
    loader.style.marginTop = "20px";
    form.append(loader);

    const formData = new FormData(form);

    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });

    fetch(`https://api.telegram.org/bot${telegramTokenBot}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: `
         Name:${object.name}. Phone: ${object.phone} `,
      }),
    })
      .then(() => {
        showStatusMessage(message.success);
        form.reset();
      })
      .catch(() => {
        showStatusMessage(message.failure);
      })
      .finally(() => loader.remove());
  });

  function showStatusMessage(message) {
    const modalDialog = document.querySelector(".modal__dialog");

    modalDialog.classList.add("hide");
    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal__content', '.modal',modalTimerId);

    const statusModal = document.createElement("div");
    statusModal.classList.add("modal__dialog");
    statusModal.innerHTML = `
    <div class="modal__content">
        <div data-modal-close class="modal__close">x</div>
         <div class="modal__title">
            ${message}
          </div>
    </div>
    `;

    document.querySelector(".modal").append(statusModal);

    setTimeout(() => {
      statusModal.remove();
      modalDialog.classList.remove("hide");
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModel)('modal');
    }, 4000);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);


/***/ }),

/***/ "./modules/loader.js":
/*!***************************!*\
  !*** ./modules/loader.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loader(loaderSelector) {
  const loaderWrapper = document.querySelector(loaderSelector);

  setTimeout(() => {
    loaderWrapper.style.display = "none";
  }, 1000);
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loader);

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModel: () => (/* binding */ closeModel),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   openModal: () => (/* binding */ openModal)
/* harmony export */ });
function openModal(modalContentSelector, modalSelector, modalTimerId) {
  const modalContent = document.querySelector(modalContentSelector);
   modal = document.querySelector(modalSelector),
  modalContent.classList.add("model_fade");
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
  if(modalTimerId){
    clearInterval(modalTimerId);
  }
}

function closeModel(modalSelector) {
  const modal = document.querySelector(modalSelector)
  modal.classList.add("hide");
  modal.classList.add("show");
  document.body.style.overflow = "";
}

function modal(btnSelector, modalSelector, modalContentSelector, modalTimerId) {
  const modelOpneBtns = document.querySelectorAll(btnSelector),
    modal = document.querySelector(modalSelector),
    modalDialog = document.querySelector(".modal__dialog");

  modelOpneBtns.forEach((btn) => {
    btn.addEventListener("click", () => openModal(modalContentSelector, modalSelector, modalTimerId));
  });

  modal.addEventListener("click", (event) => {
    // console.log(event.target);

    if (
      event.target === modal ||
      event.target === modalDialog ||
      event.target.getAttribute("data-modal-close") === ""
    ) {
      closeModel(modalSelector);
    }
  });

    document.addEventListener("keydown", (event) =>{
      if(event.code === 'Esc' && modal.classList.contains('show')){
        closeModel(modalSelector)
      }
    })

 
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider(){
    
  const sildes = document.querySelectorAll(".offer__slide "),
  prev = document.querySelector(".offer__slider-prev"),
  next = document.querySelector(".offer__slider-next"),
  total = document.querySelector("#total"),
  current = document.querySelector("#current"),
  slidesWrapper = document.querySelector('.offer__slider-wrapper'),
  slidesInner = document.querySelector(".offer__slider-inner"),
  width = window.getComputedStyle(slidesWrapper).width

  
  
  let sildeIndex = 1,
  offset = 0

    if(sildes.length < 10){
    total.textContent = `0${sildes.length}`
    current.textContent = `0${sildeIndex}`
  }else{
    total.textContent = sildes.length
     current.textContent = sildeIndex
  }

  
  slidesInner.style.width = 100 * sildes.length + "%"
  slidesInner.style.display = 'flex'
  slidesInner.style.transition = 'all .5s ease'
  slidesWrapper.style.overflow = 'hidden'
  sildes.forEach(slide =>{
    slide.style.width = width
  })

  next.addEventListener('click',()=>{
    if(offset === +width.replace(/\D/g , '') * (sildes.length -1)){
    offset = 0
    } else{
      offset += +width.replace(/\D/g , '')
    }
    slidesInner.style.transform = `translateX(-${offset}px)`

    if(sildeIndex === sildes.length){
      sildeIndex = 1
    } else{
      sildeIndex++
    }

    if(sildes.length < 10){
      current.textContent = `0${sildeIndex}`
    }else{
      current.textContent = sildeIndex
    }



  })

   prev.addEventListener('click',()=>{
    if(offset === 0){
      // width = 900px
    offset = +width.replace(/\D/g , '') * (sildes.length -1)
    } else{
      offset -= +width.replace(/\D/g , '')
    }
    slidesInner.style.transform = `translateX(-${offset}px)`

    if(sildeIndex === 1){
      sildeIndex = sildes.length
    } else{
      sildeIndex--
    }

    if(sildes.length < 10){
      current.textContent = `0${sildeIndex}`
    }else{
      current.textContent = sildeIndex
    }
  })

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabContentsSelector, tabParentsSelector) {
	const tabs = document.querySelectorAll(tabsSelector),
		tabContents = document.querySelectorAll(tabContentsSelector),
		tabParents = document.querySelector(tabParentsSelector)

	function hideTabContents() {
		tabContents.forEach(tabContent => {
			tabContent.classList.add('hide')
			tabContent.classList.remove('show')
		})

		tabs.forEach(tab => {
			tab.classList.remove('tabheader__item_active')
		})
	}

	function showTabContent(index = 0) {
		tabContents[index].classList.add('show', 'fade')
		tabContents[index].classList.remove('hide')
		tabs[index].classList.add('tabheader__item_active')
	}

	hideTabContents()
	showTabContent()

	tabParents.addEventListener('click', event => {
		const target = event.target

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((tab, index) => {
				if (target === tab) {
					hideTabContents()
					showTabContent(index)
				}
			})
		}
	})
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(deadline, selector) {
	function getTimeRemaining(endtime) {
		let days, hours, minutes, seconds
		const time = Date.parse(endtime) - Date.parse(new Date())

		if (time <= 0) {
			days = 0
			hours = 0
			minutes = 0
			seconds = 0
		} else {
			days = Math.floor(time / (1000 * 60 * 60 * 24)),
			hours = Math.floor((time / (1000 * 60 * 60)) % 24),
			minutes = Math.floor((time / (1000 * 60)) % 60),
			seconds = Math.floor((time / 1000) % 60)
		}

		return {
			totalTime: time,
			days,
			hours,
			minutes,
			seconds,
		}
	}

	function formatNumber(number) {
		if (number >= 0 && number < 10) {
			return `0${number}`
		} else {
			return number
		}
	}

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000)

		updateClock()

		function updateClock() {
			const time = getTimeRemaining(endtime)

			days.textContent = formatNumber(time.days)
			hours.textContent = formatNumber(time.hours)
			minutes.textContent = formatNumber(time.minutes)
			seconds.textContent = formatNumber(time.seconds)

			if (time.totalTime <= 0) {
				clearInterval(timeInterval)
			}
		}
	}

	setClock(selector, deadline)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/tabs */ "./modules/tabs.js");
/* harmony import */ var _modules_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/loader */ "./modules/loader.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/timer */ "./modules/timer.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/modal */ "./modules/modal.js");
/* harmony import */ var _modules_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/class */ "./modules/class.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/forms */ "./modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/slider */ "./modules/slider.js");

;






window.addEventListener("DOMContentLoaded", () => {
   const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)('.modal__content', '.modal', modalTimerId), 50000);
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tab_content','.tabheader__items')
  ;(0,_modules_loader__WEBPACK_IMPORTED_MODULE_1__["default"])('.loader-wrapper')
  ;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__["default"])('2025-11-01', '.timer')
  ;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])('[data-modal]', '.modal', '.modal__content', modalTimerId)
  ;(0,_modules_class__WEBPACK_IMPORTED_MODULE_4__["default"])('.offers-items')
  ;(0,_modules_forms__WEBPACK_IMPORTED_MODULE_5__["default"])('form', )
  ;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__["default"])()
  
 
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map