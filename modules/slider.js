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

export default slider