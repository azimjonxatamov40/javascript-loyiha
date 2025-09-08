window.addEventListener("DOMContentLoaded", () => {
  //  Tabs
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabContents = document.querySelectorAll(".tab_content"),
    tabParents = document.querySelector(".tabheader__items");

  function hideTabContents() {
    tabContents.forEach((tabContent) => {
      tabContent.classList.add("hide");
      tabContent.classList.remove("show");
    });

    tabs.forEach((tab) => {
      tab.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(index = 1) {
    tabContents[index].classList.add("show");
    tabContents[index].classList.remove("hide");
    tabs[index].classList.add("tabheader__item_active");
  }

  hideTabContents();
  showTabContent();

  tabParents.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((tab, index) => {
        if (target === tab) {
          hideTabContents();
          showTabContent(index);
        }
      });
    }
  });

  // Loader

  const loaderWrapper = document.querySelector(".loader-wrapper");

  setTimeout(() => {
    loaderWrapper.style.display = "none";
  }, 1000);

  // Timer

  const deadline = "2025-11-01";

  function formatNamber(number) {
    if (number >= 0 && number < 10) {
      return `0${number} `;
    } else {
      return number;
    }
  }

  function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds;
    const time = Date.parse(endtime) - Date.parse(new Date());

    if (time <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      (days = Math.floor(time / (1000 * 60 * 60 * 24))),
        (hours = Math.floor((time / (1000 * 60 * 60)) % 24)),
        (minutes = Math.floor((time / (1000 * 60)) % 60)),
        (seconds = Math.floor((time / 1000) % 60));
    }

    return {
      totalTime: time,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const time = getTimeRemaining(endtime);

      days.textContent = formatNamber(time.days);
      hours.textContent = formatNamber(time.hours);
      minutes.textContent = formatNamber(time.minutes);
      seconds.textContent = formatNamber(time.seconds);

      if (time.totalTime <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", deadline);

  function openModal() {
    modalContent.classList.add("model_fade");
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimerId);
  }

  function closeModel() {
    modal.classList.add("hide");
    modal.classList.add("show");
    document.body.style.overflow = "";
  }

  const modelOpneBtns = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal"),
    
    modalContent = document.querySelector(".modal__content");
  modalDialog = document.querySelector(".modal__dialog");

  modelOpneBtns.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });


  modal.addEventListener("click", (event) => {
    // console.log(event.target);

    if (event.target === modal || event.target === modalDialog || event.target.getAttribute("data-modal-close") === '') {
      closeModel();
    }
    
  });

  // document.addEventListener("keydown", (event) =>{
  //   if(event.code === 'Esc' && modal.classList.contains('show')){
  //     closeModel()
  //   }
  // })

  const modalTimerId = setTimeout(openModal, 50000);

  // Class

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

  const offers = [
    {
      src: "./img/offer1.png",
      alt: "Quattro Pasta",
      title: "Quattro Pasta",
      descr:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam.",
      discount: 55,
      sale: 20,
    },
    {
      src: "./img/offer2.png",
      alt: "Vegertarian Pasta",
      title: "Vegertarian Pasta",
      descr:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam.",
      discount: 75,
      sale: 25,
    },
    {
      src: "./img/offer3.png",
      alt: "Quattro Pasta",
      title: "Quattro Pasta",
      descr:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam.",
      discount: 25,
      sale: 15,
    },
  ];

  offers.forEach((offer) => {
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
    new DayTime(src, alt, title, time, ".daytime-items").render();
  });

  const form = document.querySelector("form"),
    telegramTokenBot = "8059498214:AAFZmBdQvv1TTURAY2y3NtVpmzQ0_y-xSiw";
    chatId = "5201044429";
    const message = {
      leading: 'Loading...',
      success:'Thanks for contacting with us',
      failure: 'Something went wrong',
    }
  form.addEventListener("submit", (event) => {
    event.preventDefault();
     
    const loader = document.createElement('div')
    loader.classList.add('loader')
    loader.style.width = '50px'
    loader.style.height = '50px'
    loader.style.marginTop = '20px'
    form.append(loader)

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
    }).then(()=>{
      showStatusMessage(message.success)
      form.reset()
    }).catch(()=>{
       showStatusMessage(message.failure)
    }).finally(() => loader.remove())
  });

  function showStatusMessage(message){
    const modalDialog = document.querySelector('.modal__dialog')

    modalDialog.classList.add('hide')
    openModal()

    const statusModal = document.createElement('div')
    statusModal.classList.add('modal__dialog')
    statusModal.innerHTML = `
    <div class="modal__content">
        <div data-modal-close class="modal__close">x</div>
         <div class="modal__title">
            ${message}
          </div>
    </div>
    `

    document.querySelector('.modal').append(statusModal)

    setTimeout(()=>{
      statusModal.remove()
      modalDialog.classList.remove('hide')  
      closeModel()
    }, 4000)
  }
});
