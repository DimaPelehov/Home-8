// фейкове додавання товаров в кошик
let addBtns = document.querySelectorAll(".add");
// console.log(addBtns);
let current = document.querySelector(".number");
// console.log(current);

// addBtns.forEach((item) =>
//   item.addEventListener("click", function () {
//     current.textContent = +current.textContent + 1;
// варіант довше
// let currentValue = +current.textContent;
// current.textContent = currentValue + 1;
//   })
// );

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

// like.forEach((item) =>
//   item.addEventListener("click", function () {
//     item.classList.toggle("like-active");
//   })
// );

// АБО

like.forEach((item) =>
  item.addEventListener("click", function () {
    if (item.classList.contains("like-active")) {
      item.classList.remove("like-active");
    } else {
      item.classList.add("like-active");
    }
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

// moreBtns.forEach((item) =>
//   item.addEventListener("click", function () {
//     let formAtr = form.getAttribute("class");
//     let overlayAtr = overlay.getAttribute("class");
//     if (formAtr === "form-test" && overlayAtr === "overlay") {
//       form.setAttribute("class", "form-test-active");
//       overlay.setAttribute("class", "overlay-active");
//     }
//   })
// );

// closeFormBtn.addEventListener("click", function () {
//   let formAtr = form.getAttribute("class");
//   let overlayAtr = overlay.getAttribute("class");
//   if (formAtr === "form-test-active" && overlayAtr === "overlay-active") {
//     form.setAttribute("class", "form-test");
//     overlay.setAttribute("class", "overlay");
//   }
// });

// Або варіант коротший
moreBtns.forEach((item) =>
  item.addEventListener("click", function () {
    form.classList.toggle("form-test-active");
    overlay.classList.toggle("overlay-active");
  })
);

closeFormBtn.addEventListener("click", function () {
  form.classList.toggle("form-test-active");
  overlay.classList.toggle("overlay-active");
});

// лічильник  одного товару
// let decrementBtns = document.querySelectorAll(".decrement-btn")[0];
// let incrementBtns = document.querySelectorAll(".increment-btn")[0];
// let inputFields = document.querySelectorAll(".product-quantity input")[0];
// let minCount = 1;
// let maxCount = 10;

// ===Variant 1===

// let currentCount = +inputFields.value;
// toogleButtonState(currentCount);

// function toogleButtonState(count) {
// if (count <= minCount) {
//   decrementBtns.disabled = true;
//   incrementBtns.disabled = false;
// } else if (count >= maxCount) {
//   incrementBtns.disabled = true;
//   decrementBtns.disabled = false;
// } else {
//   decrementBtns.disabled = false;
//   incrementBtns.disabled = false;
// }

// АБО ПРОСТІШЕ
//   decrementBtns.disabled = count <= minCount;
//   incrementBtns.disabled = count >= maxCount;
// }
// ця функція нам потрібна для того, щоб при значенні 1 decrementBtn ставала неактивною і при  значенні 10 incrementBtn ставала неактивною

// incrementBtns.addEventListener("click", function () {
//   let currentCount = +inputFields.value;
//   let nextCount = currentCount + 1;
//   inputFields.value = nextCount;

//   toogleButtonState(nextCount);
// });

// decrementBtns.addEventListener("click", function () {
//   let currentCount = +inputFields.value;
//   let prevCount = currentCount - 1;
//   inputFields.value = prevCount;

//   toogleButtonState(prevCount);
// });

// ===Variat 2===

// incrementBtns.addEventListener("click", function () {
//   let currentCount = +inputFields.value;
//   inputFields.value = currentCount + 1;

//   decrementBtns.disabled = false;
// });

// decrementBtns.addEventListener("click", function () {
//   let currentCount = +inputFields.value;

//   if (currentCount <= 1) {
//     decrementBtns.disabled = true;
//   } else {
//     inputFields.value = currentCount - 1;
//   }
// });

// ===Variant 3= Об'єктно-орієнтовне програмування==

// let decrementBtns1 = document.querySelectorAll(".decrement-btn")[0];
// let incrementBtns1 = document.querySelectorAll(".increment-btn")[0];
// let inputFields1 = document.querySelectorAll(".product-quantity input")[0];
// let minCount = 1;
// let maxCount = 10;
// це я просто тестую
// let decrementBtns2 = document.querySelectorAll(".decrement-btn")[1];
// let incrementBtns2 = document.querySelectorAll(".increment-btn")[1];
// let inputFields2 = document.querySelectorAll(".product-quantity input")[1];

// function Counter(decrementBtn, inputField, incrementBtn) {
//   this.domRefs = {
//     decrementBtn,
//     inputField,
//     incrementBtn,
//   };

//   this.toogleButtonState = function () {
//     let count = +this.domRefs.inputField.value;
//     this.domRefs.decrementBtn.disabled = count <= minCount;
//     this.domRefs.incrementBtn.disabled = count >= maxCount;
//   };
//   this.toogleButtonState();
// ця функція робить кнопки неактивними при вказаних значеннях

//   this.increment = function () {
//     let nextCount = +this.domRefs.inputField.value + 1;
//     this.domRefs.inputField.value = nextCount;
//     this.toogleButtonState();
//   };
//   this.decrement = function () {
//     let prevCount = +this.domRefs.inputField.value - 1;
//     this.domRefs.inputField.value = prevCount;
//     this.toogleButtonState();
//   };

//   this.domRefs.incrementBtn.addEventListener(
//     "click",
//     this.increment.bind(this)
//   );

//   this.domRefs.decrementBtn.addEventListener(
//     "click",
//     this.decrement.bind(this)
//   );
// }

// const counter1 = new Counter(decrementBtns1, inputFields1, incrementBtns1);
// console.log(counter1);
// const counter2 = new Counter(decrementBtns2, inputFields2, incrementBtns2);

//-----Незалежні лічильники на всі товари----

function allCounters(item) {
  let decrementBtns = item.querySelector(".decrement-btn");
  let incrementBtns = item.querySelector(".increment-btn");
  let inputFields = item.querySelector(".product-quantity input");
  let minCount = 1;
  let maxCount = 10;

  let currentCount = +inputFields.value;
  toogleButtonState(currentCount);

  function toogleButtonState(count) {
    decrementBtns.disabled = count <= minCount;
    incrementBtns.disabled = count >= maxCount;
  }

  incrementBtns.addEventListener("click", function () {
    let currentCount = +inputFields.value;
    let nextCount = currentCount + 1;
    inputFields.value = nextCount;

    toogleButtonState(nextCount);
  });

  decrementBtns.addEventListener("click", function () {
    let currentCount = +inputFields.value;
    let prevCount = currentCount - 1;
    inputFields.value = prevCount;

    toogleButtonState(prevCount);
  });
}

let productQuantity = document.querySelectorAll(".product-quantity");
productQuantity.forEach(allCounters);
// ---------------------------------------

// Приклад функції конструктора
// function Car(model, year, color) {
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.hi = function () {
//     return "hi " + this.model;
//   };

//   console.log(this);
// поверне нам екземпляр
// }

// далі йдуть екземпляри
// let audi = new Car("audi qqq", "2020", "green");
// let ford = new Car("ford ccc", "2022", "red");
// let opel = new Car("opel bbb", "2021", "white");

// console.log(audi.hi());
// console.log(ford.hi());
// console.log(opel.hi());
