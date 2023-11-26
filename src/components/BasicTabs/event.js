const changeTab = (e, tabs, contents, indicator) => {
  const selectedTab = e.target;
  let selectedIndex = 0;

  if (!selectedTab.classList.contains("basicTab")) return;

  tabs.forEach((tab, i) => {
    if (selectedTab === tab) {
      tab.classList.add("selected");
      selectedIndex = i;
      indicator.style.width = `${tab.clientWidth}px`;
    } else {
      tab.classList.remove("selected");
    }
  });

  contents.forEach((content, i) => {
    if (selectedIndex === i) {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });

  let selectedX = 0;
  for (let i = 0; i < selectedIndex; i++) {
    selectedX += tabs[i].clientWidth;
  }

  indicator.style.transform = `translateX(${selectedX}px)`;
};

const onAddEventBasicTabs = () => {
  const basicTab = document.querySelector("#basicTabsBox");
  const tabTitles = document.querySelectorAll(".basicTab");
  const contents = document.querySelectorAll(".basicTabContents");
  const indicator = document.querySelector(".indicator");

  changeTab({ target: tabTitles[0] }, tabTitles, contents, indicator);

  basicTab.addEventListener("click", (e) =>
    changeTab(e, tabTitles, contents, indicator),
  );
};

export default onAddEventBasicTabs;
