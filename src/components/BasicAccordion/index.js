import BasicAccordion from "./component.js";
import onAddEventBasicTabs from "./event.js";

const onRenderBasicAccordion = (option) => {
  const event = () => onAddEventBasicTabs();

  return { element: BasicAccordion(option), event };
};

export default onRenderBasicAccordion;
