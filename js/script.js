/* main-slider */
var toggle_1 = document.querySelector("#btn-1");
var toggle_2 = document.querySelector("#btn-2");
var toggle_3 = document.querySelector("#btn-3");

var slide_1 = document.querySelector("#slide_1");
var slide_2 = document.querySelector("#slide_2");
var slide_3 = document.querySelector("#slide_3");

toggle_1.addEventListener("click", function (evt) {
  slide_1.classList.remove("visually-hidden");
  slide_2.classList.add("visually-hidden");
  slide_3.classList.add("visually-hidden");
});

toggle_2.addEventListener("click", function (evt) {
  slide_2.classList.remove("visually-hidden");
  slide_1.classList.add("visually-hidden");
  slide_3.classList.add("visually-hidden");
});

toggle_3.addEventListener("click", function (evt) {
  slide_3.classList.remove("visually-hidden");
  slide_2.classList.add("visually-hidden");
  slide_1.classList.add("visually-hidden");
});

/* features slider */
var feature_btn_1 = document.querySelector("#feature_btn_1");
var feature_btn_2 = document.querySelector("#feature_btn_2");
var feature_btn_3 = document.querySelector("#feature_btn_3");

var feature_slide_1 = document.querySelector("#feature_slide_1");
var feature_slide_2 = document.querySelector("#feature_slide_2");
var feature_slide_3 = document.querySelector("#feature_slide_3");

feature_btn_1.addEventListener("click", function (evt) {
  feature_slide_1.classList.remove("visually-hidden");
  feature_btn_1.classList.add("feature-slide-active");

  feature_btn_2.classList.remove("feature-slide-active");
  feature_btn_3.classList.remove("feature-slide-active");
  feature_slide_2.classList.add("visually-hidden");
  feature_slide_3.classList.add("visually-hidden");
});

feature_btn_2.addEventListener("click", function (evt) {
  feature_slide_2.classList.remove("visually-hidden");
  feature_btn_2.classList.add("feature-slide-active");

  feature_btn_1.classList.remove("feature-slide-active");
  feature_btn_3.classList.remove("feature-slide-active");
  feature_slide_1.classList.add("visually-hidden");
  feature_slide_3.classList.add("visually-hidden");
});

feature_btn_3.addEventListener("click", function (evt) {
  feature_slide_3.classList.remove("visually-hidden");
  feature_btn_3.classList.add("feature-slide-active");

  feature_btn_2.classList.remove("feature-slide-active");
  feature_btn_1.classList.remove("feature-slide-active");
  feature_slide_2.classList.add("visually-hidden");
  feature_slide_1.classList.add("visually-hidden");
});

/* catalog drop-down menu */
var catalog_link = document.querySelector(".catalog-link");

var catalog_list = document.querySelector(".nav-item-groups");

function toggleCatalog() {
  var displaySetting = catalog_list.style.display;

  if (displaySetting == 'flex') {
      catalog_list.style.display = 'none';
    }
    else {
      catalog_list.style.display = 'flex';
    }

}

 catalog_link.addEventListener("click", function (evt) {
  evt.preventDefault();
  toggleCatalog();
});

/* feedback popup */
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

/* map popup */
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
