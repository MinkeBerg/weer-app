function handleSearchSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = cityInput.value;
}

let formImputElement = document.querySelector("#form-input");
formImputElement.addEventListener("submit", handleSearchSubmit);
