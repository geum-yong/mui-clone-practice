import onRenderContentTitle from "./components/ContentTitle/index.js";
import onRenderContentDescription from "./components/ContentDescription/index.js";
import onRenderVirtualizedList from "./components/VirtualizedList/indes.js";
import onRenderBasicTabs from "./components/BasicTabs/index.js";
import onRenderBasicAccordion from "./components/BasicAccordion/index.js";

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

  onCreateComponent(onRenderContentTitle("2. Basic Tabs"));
  onCreateComponent({
    parentElement: onCreateComponent(onRenderContentDescription()),
    ...onRenderBasicTabs([
      {
        title: "ITEM ONE",
        content: "ITEM ONE",
      },
      {
        title: "ITEM TWO",
        content: "ITEM TWO",
      },
      {
        title: "ITEM THREE",
        content: "ITEM THREE",
      },
    ]),
  });

  onCreateComponent(onRenderContentTitle("3. Basic Accordion"));
  onCreateComponent({
    parentElement: onCreateComponent(onRenderContentDescription()),
    ...onRenderBasicAccordion([
      {
        title: "Accordion 1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse malesuada lacus ex, sit amet blandit leo lobortiseget.",
      },
      {
        title: "Accordion 2",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse malesuada lacus ex, sit amet blandit leo lobortiseget.",
      },
      {
        title: "Accordion 3",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse malesuada lacus ex, sit amet blandit leo lobortiseget.",
      },
      {
        title: "Disabled Accordion",
        disabled: true,
      },
    ]),
  });
});
