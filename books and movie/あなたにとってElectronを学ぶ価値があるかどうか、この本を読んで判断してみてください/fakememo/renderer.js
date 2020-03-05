"use strict";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("input-form").onsubmit = () => {
    const inputText = document.getElementById("input-text");
    if (inputText.value === "") {
      return false;
    }

    const newText = document.createElement("p");
    newText.innerText = inputText.value;
    document.getElementById("list").appendChild(newText);

    inputText.value = "";
    return false;
  };
});
