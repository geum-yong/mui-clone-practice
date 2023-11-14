// root div
const virtualizedList = document.getElementById("virtualizedList");

// 아이템 전체 높이값을 갖는 div
let totalRealList;

const listContainerWidth = Number(virtualizedList.dataset.width);
const listContainerHeight = Number(virtualizedList.dataset.height);
const itemSize = Number(virtualizedList.dataset.itemSize);
const itemCount = Number(virtualizedList.dataset.itemCount);
const overscanCount = Number(virtualizedList.dataset.overscanCount);

const data = Array.from({ length: itemCount }, (_, index) => `Item ${index}`);
const visibleItems = Math.ceil(listContainerHeight / itemSize);

const setInitContainerSize = () => {
  virtualizedList.style.width = `${listContainerWidth}px`;
  virtualizedList.style.height = `${listContainerHeight}px`;

  totalRealList = document.createElement("div");
  totalRealList.style.height = `${itemCount * itemSize}px`;
  virtualizedList.appendChild(totalRealList);
};

const setListData = () => {
  const { scrollTop } = virtualizedList;

  const start = Math.floor(scrollTop / itemSize);
  const end = Math.min(
    start + visibleItems + (itemCount > overscanCount ? overscanCount : 0),
    itemCount,
  );

  totalRealList.innerHTML = "";
  for (let i = start; i < end; i++) {
    const listItem = document.createElement("div");
    listItem.classList.add("list-item");
    listItem.style.height = `${itemSize}px`;
    listItem.style.top = `${i * itemSize}px`;

    listItem.innerText = data[i];
    totalRealList.appendChild(listItem);
  }
};

virtualizedList.addEventListener("scroll", setListData);
setInitContainerSize();
setListData();
