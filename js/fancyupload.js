const infoBox = document.querySelector(".fileInfo");
const input2 = document.querySelector(".hidden");
const resetBtn = document.querySelector(".reset");

const resetInfo = () => {
  infoBox.innerHTML = "";
  resetBtn.classList.add("hidden");
};

const getFileProperties = (e) => {
  const fileList = e.target.files;
  const numFiles = fileList.length;

  for (let i = 0; i < numFiles; i++) {
    const fileName = fileList[i].name;
    const fileSize = (fileList[i].size / 1000000).toFixed(2);
    const fileType = fileList[i].type;

    infoBox.innerHTML = `
      <li>Nazwa pliku : <span>${fileName}<span></li>
      <li>Wielkośc pliku : <span>${fileSize} MB<span></li>
      <li>Format pliku : <span>${fileType}<span></li>
    `;
  }
  resetBtn.classList.remove("hidden");
};

input2.addEventListener("change", getFileProperties);
resetBtn.addEventListener("click", resetInfo);
