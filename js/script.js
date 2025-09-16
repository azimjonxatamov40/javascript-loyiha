"use strict"
import tabs from "../modules/tabs";
import loader from "../modules/loader";
import timer from "../modules/timer";
import modal from "../modules/modal";
import classCard from "../modules/class";
import forms from "../modules/forms";
import slider from "../modules/slider";
window.addEventListener("DOMContentLoaded", () => {
  tabs('.tabheader__item', 'tab_content','tabheader__items')
  loader('.loader-wrapper')
  timer('2025-11-01', 'timer')
  modal('[data-modal]', '.modal', '.modal__content')
  classCard('.offers-items')
  forms('form', '.modal', '.modal__content')
  slider()
  
 
});
