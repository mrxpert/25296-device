var popup_link = document.querySelector(".form-link-btn");

var popup = document.querySelector(".modal-feedback");

var close = document.querySelector(".modal-close");

var client_name = document.querySelector("[name=feedback-name]");

popup_link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  client_name.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  map.classList.remove("modal-show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode == 27) {
    if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
    }
  }
});

var map_link = document.querySelector(".contacts-map");

var map = document.querySelector(".modal-map");

var close_map = map.querySelector(".modal-close");

map_link.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("modal-show");
});

close_map.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("modal-show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode == 27) {
    if (map.classList.contains("modal-show")) {
        map.classList.remove("modal-show");
    }
  }
});
