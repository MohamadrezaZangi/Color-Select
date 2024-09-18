const plot1 = document.querySelector("#plot1");
const plot1Lable = document.querySelector("#plot1 H3");

const plot2 = document.querySelector("#plot2");
const plot2Lable = document.querySelector("#plot2 H3");

const plot3 = document.querySelector("#plot3");
const plot3Lable = document.querySelector("#plot3 H3");

const plot4 = document.querySelector("#plot4");
const plot4Lable = document.querySelector("#plot4 H3");

const plot5 = document.querySelector("#plot5");
const plot5Lable = document.querySelector("#plot5 H3");

const plot1Click = () => {
  const random = "#" + Math.floor(Math.random() * 16777216).toString(16);
  plot1.style.backgroundColor = random;
  plot1Lable.innerText = random;
};

const plot2Click = () => {
  const random = "#" + Math.floor(Math.random() * 16777216).toString(16);
  plot2.style.backgroundColor = random;
  plot2Lable.innerText = random;
};

const plot3Click = () => {
  const random = "#" + Math.floor(Math.random() * 16777216).toString(16);
  plot3.style.backgroundColor = random;
  plot3Lable.innerText = random;
};

const plot4Click = () => {
  const random = "#" + Math.floor(Math.random() * 16777216).toString(16);
  plot4.style.backgroundColor = random;
  plot4Lable.innerText = random;
};

const plot5Click = () => {
  const random = "#" + Math.floor(Math.random() * 16777216).toString(16);
  plot5.style.backgroundColor = random;
  plot5Lable.innerText = random;
};

window.addEventListener("load", () => {
  plot1.addEventListener("click", plot1Click);
  plot2.addEventListener("click", plot2Click);
  plot3.addEventListener("click", plot3Click);
  plot4.addEventListener("click", plot4Click);
  plot5.addEventListener("click", plot5Click);
});
