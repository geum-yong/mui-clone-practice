import onRenderContentTitle from "./components/ContentTitle/index.js";
import onRenderContentDescription from "./components/ContentDescription/index.js";
import onRenderVirtualizedList from "./components/VirtualizedList/indes.js";

const app = document.getElementById("app");

const onCreateComponent = ({ parentElement, element, event }) => {
  if (parentElement) parentElement.appendChild(element);
  else app.appendChild(element);

  event && event();

  return element;
};

window.addEventListener("DOMContentLoaded", () => {
  onCreateComponent(onRenderContentTitle("1. Virtualized List"));

  onCreateComponent({
    parentElement: onCreateComponent(onRenderContentDescription()),
    ...onRenderVirtualizedList({
      width: 400,
      height: 360,
      itemSize: 46,
      itemCount: 200,
      overscanCount: 5,
    }),
  });
});
