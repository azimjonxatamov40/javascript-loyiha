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

export default classCard