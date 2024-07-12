const inputEl = document.querySelector(".inp"),
  resultEL = document.querySelector(".result"),
  clearBtn = document.querySelector(".clear_all_the_storage");
resultEL.innerHTML = localStorage.getItem("value");
inputEl.addEventListener("keyup", display);

function display() {
  //   resultEL.innerHTML = inputEl.value;
  localStorage.setItem("value", inputEl.value);
  //  resultEL = localStorage.getItem("value");
  //  console.log(localStorage.getItem("value"))\
  resultEL.innerHTML = localStorage.getItem("value");
}
clearBtn.addEventListener("click", clrear);
function clrear() {
  localStorage.clear("value");
  resultEL.innerHTML = ""
  inputEl.value = ""
}
// localStorage.removeItem("value");
