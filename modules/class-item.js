function classItem(selector){
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
    const { src, alt, title, time, } = daytimeitem;
    new DayTime(src, alt, title, time, selector).render();
  });

}



export default classItem