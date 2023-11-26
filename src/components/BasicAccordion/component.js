const BasicAccordion = (option) => {
  const basicAccordion = document.createElement("div");
  basicAccordion.id = "accordionBox";

  option.forEach((accordionInfo) => {
    const basicAccordionItem = document.createElement("div");
    basicAccordionItem.classList.add("basicAccordion");

    const wrapContentsBox = document.createElement("div");

    const accordionTitle = document.createElement("div");
    accordionTitle.classList.add("accordionTitleBox");
    if (accordionInfo.disabled) accordionTitle.classList.add("disabled");
    const accordionTitleText = document.createElement("p");
    accordionTitleText.classList.add("accordionTitle");
    const accordionArrow = document.createElement("span");
    accordionArrow.classList.add("accordionArrow");
    accordionTitleText.textContent = accordionInfo.title;
    accordionTitle.appendChild(accordionTitleText);
    accordionTitle.appendChild(accordionArrow);
    wrapContentsBox.appendChild(accordionTitle);

    if (!accordionInfo.disabled) {
      const accordionContent = document.createElement("div");
      accordionContent.classList.add("accordionDescriptionBox");
      accordionContent.textContent = accordionInfo.content;
      wrapContentsBox.appendChild(accordionContent);
    }

    basicAccordionItem.appendChild(wrapContentsBox);
    basicAccordion.appendChild(basicAccordionItem);
  });

  return basicAccordion;
};

export default BasicAccordion;
