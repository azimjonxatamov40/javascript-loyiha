function loader(loaderSelector) {
  const loaderWrapper = document.querySelector(loaderSelector);

  setTimeout(() => {
    loaderWrapper.style.display = "none";
  }, 1000);
}


export default loader