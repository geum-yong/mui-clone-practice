/**
 * root div 및 내부 스크롤 시키는 div 세팅
 */
const setInit = () => {
  // root div
  const virtualizedList = document.getElementById("virtualizedList");

  const virtualizedListWidth = Number(virtualizedList.dataset.width);
  const virtualizedListHeight = Number(virtualizedList.dataset.height);
  const itemSize = Number(virtualizedList.dataset.itemSize);
  const itemCount = Number(virtualizedList.dataset.itemCount);
  const overscanCount = Number(virtualizedList.dataset.overscanCount);

  const items = Array.from(
    { length: itemCount },
    (_, index) => `Item ${index}`,
  );
  const visibleItems = Math.ceil(virtualizedListHeight / itemSize);

  virtualizedList.style.width = `${virtualizedListWidth}px`;
  virtualizedList.style.height = `${virtualizedListHeight}px`;

  const totalRealDiv = document.createElement("div");
  totalRealDiv.style.height = `${itemCount * itemSize}px`;
  virtualizedList.appendChild(totalRealDiv);

  return {
    virtualizedList,
    overscanCount,
    items,
    visibleItems,
    itemSize,
    itemCount,
    totalRealDiv,
  };
};

/**
 * 유저 스크롤에 따른 아이템 렌더링
 */
const setListData = (
  rootDiv,
  itemSize,
  visibleItems,
  itemCount,
  overscanCount,
  totalRealList,
  items,
) => {
  const { scrollTop } = rootDiv;

  const start = Math.floor(scrollTop / itemSize);

  const checkOverscanCount = itemCount > overscanCount ? overscanCount : 0;
  const end = Math.min(start + visibleItems + checkOverscanCount, itemCount);

  totalRealList.innerHTML = "";
  for (let i = start; i < end; i++) {
    const listItem = document.createElement("div");
    listItem.classList.add("listItem");
    listItem.style.height = `${itemSize}px`;
    listItem.style.top = `${i * itemSize}px`;

    listItem.innerText = items[i];
    totalRealList.appendChild(listItem);
  }
};

const render = () => {
  const {
    virtualizedList,
    overscanCount,
    items,
    visibleItems,
    itemSize,
    itemCount,
    totalRealDiv,
  } = setInit();

  setListData(
    virtualizedList,
    itemSize,
    visibleItems,
    itemCount,
    overscanCount,
    totalRealDiv,
    items,
  );

  virtualizedList.addEventListener("scroll", () =>
    setListData(
      virtualizedList,
      itemSize,
      visibleItems,
      itemCount,
      overscanCount,
      totalRealDiv,
      items,
    ),
  );
};

render();
