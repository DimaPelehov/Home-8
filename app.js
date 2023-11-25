// фейкове додавання товаров в кошик
let addBtns = document.querySelectorAll(".add");
// console.log(addBtns);
let current = document.querySelector(".number");
// console.log(current);

addBtns.forEach((item) =>
  item.addEventListener("click", function () {
    current.textContent = +current.textContent + 1;
    // варіант довше
    // let currentValue = +current.textContent;
    // current.textContent = currentValue + 1;
  })
);

// АБО цикл for
// for (i = 0; i < addBtns.length; i++) {
//   addBtns[i].addEventListener("click", function () {
//     current.textContent = +current.textContent + 1;
//   });
// }

// АБО цикл for..of
// for (let item of addBtns) {
//   item.addEventListener("click", function () {
//     current.textContent = +current.textContent + 1;
//   });
// }

//реалізація лайк

let like = document.querySelectorAll(".like");
// console.log(like);

like.forEach((item) =>
  item.addEventListener("click", function () {
    item.classList.toggle("like-active");
  })
);

// вспливаюча форма
let moreBtns = document.querySelectorAll(".more");
// console.log(moreBtns);
let form = document.querySelector(".form-test");
// console.log(form);
let overlay = document.querySelector(".overlay");
// console.log(overlay);
let closeFormBtn = document.querySelector(".close-form");
// console.log(closeFormBtn);

moreBtns.forEach((item) =>
  item.addEventListener("click", function () {
    let formAtr = form.getAttribute("class");
    let overlayAtr = overlay.getAttribute("class");

    if (formAtr === "form-test" && overlayAtr === "overlay") {
      form.setAttribute("class", "form-test-active") ||
        overlay.setAttribute("class", "overlay-active");
    }
  })
);

closeFormBtn.addEventListener("click", function () {
  let formAtr = form.getAttribute("class");
  let overlayAtr = overlay.getAttribute("class");
  if (formAtr === "form-test-active" && overlayAtr === "overlay-active") {
    form.setAttribute("class", "form-test") ||
      overlay.setAttribute("class", "overlay");
  }
});
