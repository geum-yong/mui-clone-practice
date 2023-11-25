const BasicTabs = (option) => {
  const basicTabs = document.createElement("div");
  const basicTabTitles = document.createElement("div");
  basicTabTitles.id = "basicTabsBox";

  basicTabs.appendChild(basicTabTitles);

  const titleElementArr = option.map((tabInfo, index) => {
    const { title, content } = tabInfo;

    const titleBox = document.createElement("div");
    titleBox.classList.add("basic-tab");
    titleBox.textContent = title;
    if (index === 0) titleBox.classList.add("selected");
    basicTabTitles.appendChild(titleBox);

    const contentBox = document.createElement("div");
    contentBox.classList.add("basic-tab-contents");
    contentBox.textContent = content;
    if (index === 0) contentBox.classList.add("selected");
    basicTabs.appendChild(contentBox);

    return titleBox;
  });

  const indicator = document.createElement("div");
  indicator.classList.add("indicator");
  indicator.style.width = `${tabs[0].clientWidth}px`;
  basicTabTitles.appendChild(indicator);

  return basicTabs;
};

export default BasicTabs;
// <div id="basicTabsBox">
//   <div class="basic-tab selected">ITEM ONE</div>
//   <div class="basic-tab">ITEM TWO</div>
//   <div class="basic-tab">ITEM THREE</div>
// </div>
// <div class="basic-tab-contents selected">ITEM ONE</div>
// <div class="basic-tab-contents">ITEM TWO</div>
// <div class="basic-tab-contents">ITEM THREE</div>
