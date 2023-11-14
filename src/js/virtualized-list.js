// root div
const virtualizedList = document.getElementById("virtualizedList");

// 아이템 전체 높이값을 갖는 div
let totalRealList;

const {
  width: listContainerWidth,
  height: listContainerHeight,
  itemSize,
  itemCount,
  overscanCount,
} = virtualizedList.dataset;

const data = Array.from(
  { length: Number(itemCount) },
  (_, index) => `Item ${index}`,
);
const visibleItems = Math.ceil(Number(listContainerHeight) / Number(itemSize));

const setInitContainerSize = () => {
  virtualizedList.style.width = `${listContainerWidth}px`;
  virtualizedList.style.height = `${listContainerHeight}px`;

  totalRealList = document.createElement("div");
  totalRealList.style.height = `${Number(itemCount) * Number(itemSize)}px`;
  virtualizedList.appendChild(totalRealList);
};

const setListData = () => {
  const { scrollTop } = virtualizedList;

  const start = Math.floor(scrollTop / Number(itemSize));
  const end = Math.min(
    start +
      visibleItems +
      (Number(itemCount) > Number(overscanCount) ? Number(overscanCount) : 0),
    Number(itemCount),
  );

  totalRealList.innerHTML = "";
  for (let i = start; i < end; i++) {
    const listItem = document.createElement("div");
    listItem.classList.add("list-item");
    listItem.style.height = `${itemSize}px`;
    listItem.style.top = `${i * Number(itemSize)}px`;

    listItem.innerText = data[i];
    totalRealList.appendChild(listItem);
  }
};

virtualizedList.addEventListener("scroll", setListData);
setInitContainerSize();
setListData();
