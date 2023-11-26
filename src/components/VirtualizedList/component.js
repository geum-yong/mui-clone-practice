const VirtualizedList = (option) => {
  const { width, height, itemSize, itemCount } = option;

  const virtualizedList = document.createElement("div");
  virtualizedList.id = "virtualizedList";
  virtualizedList.classList.add("virtualizedList");
  virtualizedList.style.width = `${width}px`;
  virtualizedList.style.height = `${height}px`;

  const totalList = document.createElement("div");
  totalList.id = "virtualizedTotalList";
  totalList.style.height = `${itemCount * itemSize}px`;
  virtualizedList.appendChild(totalList);

  return virtualizedList;
};

export default VirtualizedList;
