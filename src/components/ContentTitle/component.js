const ContentTitle = (text) => {
  const contentTitle = document.createElement("h1");
  contentTitle.classList.add("contentTitle");
  contentTitle.innerHTML = text;

  return contentTitle;
};

export default ContentTitle;
