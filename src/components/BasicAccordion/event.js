const openAccordion = (e) => {
  const selectAccordion = e.target;

  if (
    (!selectAccordion.classList.contains("accordionTitleBox") &&
      !selectAccordion.classList.contains("accordionTitle") &&
      !selectAccordion.classList.contains("accordionArrow")) ||
    selectAccordion.classList.contains("disabled")
  )
    return;

  let accordion;

  if (
    selectAccordion.classList.contains("accordionTitle") ||
    selectAccordion.classList.contains("accordionArrow")
  ) {
    accordion = selectAccordion.parentElement.parentElement.parentElement;
  } else {
    accordion = selectAccordion.parentElement.parentElement;
  }

  if (accordion.classList.contains("open")) {
    accordion.classList.remove("open");
    accordion.style.height = "40px";
  } else {
    accordion.classList.add("open");
    accordion.style.height = `${
      selectAccordion.parentElement.clientHeight + 16
    }px`;
  }
};

const onAddEventBasicTabs = () => {
  const accordionContainer = document.querySelector("#accordionBox");

  accordionContainer.addEventListener("click", openAccordion);
};

export default onAddEventBasicTabs;
