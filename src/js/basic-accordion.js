const accordionContainer = document.getElementById("accordionBox");

const toggleAccordion = (e) => {
  const selectAccordion = e.target;

  if (
    (!selectAccordion.classList.contains("accordion-title-box") &&
      !selectAccordion.classList.contains("accordion-title") &&
      !selectAccordion.classList.contains("accordion-arrow")) ||
    selectAccordion.classList.contains("disabled")
  )
    return;

  let accordion;

  if (
    selectAccordion.classList.contains("accordion-title") ||
    selectAccordion.classList.contains("accordion-arrow")
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

accordionContainer.addEventListener("click", toggleAccordion);
