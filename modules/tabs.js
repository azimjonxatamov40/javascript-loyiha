function tabs(tabsSelector, tabsContentsSelector, tabParentsSelector) {
  //  Tabs
  const tabs = document.querySelectorAll(tabsSelector),
    tabContents = document.querySelectorAll(tabsContentsSelector),
    tabParents = document.querySelector(tabParentsSelector);

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
}


export default tabs


