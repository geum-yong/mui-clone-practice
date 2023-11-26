import BasicTabs from "./component.js";
import onAddEventBasicTabs from "./event.js";

const onRenderBasicTabs = (option) => {
  const event = () => onAddEventBasicTabs();

  return { element: BasicTabs(option), event };
};

export default onRenderBasicTabs;
