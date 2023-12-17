import VirtualizedList from "./component.js";
import onAddEventVirtualizedList from "./event.js";

const onRenderVirtualizedList = (option) => {
  const { height, itemSize, itemCount, overscanCount } = option;

  const event = () =>
    onAddEventVirtualizedList({
      height,
      itemSize,
      itemCount,
      overscanCount,
    });

  return { element: VirtualizedList(option), event };
};

export default onRenderVirtualizedList;
