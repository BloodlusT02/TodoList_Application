const inputEl = document.getElementById("input");
const btnEl = document.getElementById("btn");
const ulEl = document.querySelector("ul");

const addTask = () => {
  if(inputEl.value === ""){
    alert("Please Add Task To Work")
  }else{
    let liEl = document.createElement("li");
    liEl.innerHTML = `${inputEl.value}<span><i class="fa-sharp fa-solid fa-trash"></i></span>`;

    ulEl.appendChild(liEl);
  }
  inputEl.value = "";
};

const deleteTask = (e) => {
  if(e.target.tagName === "I" && e.target.classList.contains("fa-trash")){
    e.target.parentNode.parentNode.remove();
  };
};

btnEl.addEventListener("click", addTask);
ulEl.addEventListener("click", deleteTask);