const BasicTabs = (option) => {
  const basicTabs = document.createElement("div");
  const basicTabTitles = document.createElement("div");
  basicTabTitles.id = "basicTabsBox";

  basicTabs.appendChild(basicTabTitles);

  option.forEach((tabInfo, index) => {
    const { title, content } = tabInfo;

    const titleBox = document.createElement("div");
    titleBox.classList.add("basicTab");
    titleBox.textContent = title;
    if (index === 0) titleBox.classList.add("selected");
    basicTabTitles.appendChild(titleBox);

    const contentBox = document.createElement("div");
    contentBox.classList.add("basicTabContents");
    contentBox.textContent = content;
    if (index === 0) contentBox.classList.add("selected");
    basicTabs.appendChild(contentBox);

    return titleBox;
  });

  const indicator = document.createElement("div");
  indicator.classList.add("indicator");
  basicTabTitles.appendChild(indicator);

  return basicTabs;
};

export default BasicTabs;
