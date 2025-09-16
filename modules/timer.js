function timer(deadline, selector){
 
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

  setClock(selector, deadline);
}


export default timer