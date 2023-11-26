const setListData = (scrollOption) => {
  const {
    virtualizedList,
    totalList,
    height,
    itemSize,
    itemCount,
    overscanCount,
  } = scrollOption;
  const { scrollTop } = virtualizedList;

  const start = Math.floor(scrollTop / itemSize);
  const checkOverscanCount = itemCount > overscanCount ? overscanCount : 0;
  const visibleItems = Math.ceil(height / itemSize);
  const end = Math.min(start + visibleItems + checkOverscanCount, itemCount);
  const items = Array.from(
    { length: itemCount },
    (_, index) => `Item ${index}`,
  );

  totalList.innerHTML = "";
  for (let i = start; i < end; i++) {
    const listItem = document.createElement("div");
    listItem.classList.add("listItem");
    listItem.style.height = `${itemSize}px`;
    listItem.style.top = `${i * itemSize}px`;

    listItem.innerText = items[i];
    totalList.appendChild(listItem);
  }
};

const onAddEventVirtualizedList = (scrollOption) => {
  const { height, itemSize, itemCount, overscanCount } = scrollOption;

  const virtualizedList = document.querySelector("#virtualizedList");
  const totalList = document.querySelector("#virtualizedTotalList");

  setListData({
    virtualizedList,
    totalList,
    height,
    itemSize,
    itemCount,
    overscanCount,
  });

  virtualizedList.addEventListener("scroll", () =>
    setListData({
      virtualizedList,
      totalList,
      height,
      itemSize,
      itemCount,
      overscanCount,
    }),
  );
};

export default onAddEventVirtualizedList;
