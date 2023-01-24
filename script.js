"use strict";
let value = document.querySelector("#value");

let power = "";

window.addEventListener("keydown", function keycode(e) {
  if (e.code === "NumpadEnter" || e.code === "Enter") {
    document.querySelector("#equals").onclick();
  } else if (e.key == "0") {
    value.textContent += 0;
  } else if (e.key == "1") {
    value.textContent += 1;
  } else if (e.key == "2") {
    value.textContent += 2;
  } else if (e.key == "3") {
    value.textContent += 3;
  } else if (e.key == "4") {
    value.textContent += 4;
  } else if (e.key == "5") {
    value.textContent += 5;
  } else if (e.key == "6") {
    value.textContent += 6;
  } else if (e.key == "7") {
    value.textContent += 7;
  } else if (e.key == "8") {
    value.textContent += 8;
  } else if (e.key == "9") {
    value.textContent += 9;
  } else if (e.key == ".") {
    value.textContent += ".";
  } else if (e.keyCode == "8") {
    back();
  } else if (e.keyCode == "46") {
    clean();
  }

  if (e.key == "+") {
    value.textContent += "+";
  } else if (e.key == "-") {
    value.textContent += "-";
  } else if (e.key == "/") {
    value.textContent += "/";
  } else if (e.key == "*") {
    value.textContent += "*";
  }
  if (value.length == 1) {
    value.textContent = value.textContent.substring(
      0,
      value.textContent.length - 1
    );
  }

  console.log(e);
});

function infinity() {
  if (
    value.textContent === "Infinity" ||
    value.textContent === "Undefined" ||
    value.textContent === "Null" ||
    value.textContent === "NaN"
  ) {
    value.textContent = "-0";
  }
}

function insert(num) {
  if (value.textContent == 0) {
    value.textContent = "";
    value.textContent += num;
  } else value.textContent += num;
}

function clean() {
  value.textContent = "";
  power = "";
}

function back() {
  let exp = value.textContent;
  value.textContent = exp.substring(0, exp.length - 1);
}

function equal() {
  let exp = value.textContent;
  if (value.textContent.includes("^")) {
    let tmp = value.textContent.split("^");
    let num = eval(power);
    let pow = +tmp[1];
    value.textContent = Math.pow(num, pow);
    power = "";
    return;
  }
  if (exp) {
    value.textContent = eval(exp);
  }
  infinity();
}

function percent() {
  value.textContent = eval(value.textContent) / 100;
  infinity();
}

function constant(name) {
  if (value.textContent == 0) {
    value.textContent = "";
  }
  if (name == "pi") value.textContent += Math.PI.toFixed(8);
  if (name == "e") value.textContent += Math.E.toFixed(8);
  infinity();
}

function operation(name) {
  if (name == "sqrt") value.textContent = Math.sqrt(eval(value.textContent));
  if (name == "sqr") value.textContent = Math.pow(eval(value.textContent), 2);
  if (name == "^-1") value.textContent = Math.pow(eval(value.textContent), -1);
  if (name == "^") {
    power = value.textContent;
    value.textContent += "^";
  }
  infinity();
}

function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}
function fact() {
  value.textContent = factorial(+eval(value.textContent));
  infinity();
}

function log(name) {
  if (name == "lg") {
    value.textContent = Math.log10(eval(value.textContent)).toFixed(8);
  }
  if (name == "ln") {
    value.textContent = Math.log(eval(value.textContent)).toFixed(8);
  }
}

document.getElementById("toggle").addEventListener("click", function () {
  document.querySelector("body").classList.toggle("dark-body");
  document.querySelector(".calculator").classList.toggle("dark-mode-calc");
  document.getElementById("c-body").classList.toggle("dark-mode");
  document
    .querySelector(".calculator__value")
    .classList.toggle("dark-value-calc");
  value.classList.toggle("dark-value");
  document.querySelectorAll(".number").forEach((n) => {
    n.classList.toggle("dark-btn");
    console.log(n);
  });
});
// const value = document.querySelector("#value");
// const numbers = document.querySelectorAll(".number");
// const signs = document.querySelectorAll(".sign");
// const equals = document.querySelector(".equals");
// const negative = document.querySelector("#plus-minus");
// const clear = document.querySelector("#Clear");
// const backspace = document.querySelector("#backspace");
// const dot = document.querySelector("#dot");

// let a = "";
// let b = false;
// let c = "";
// let d = false;
// let sign = "";
// let result = 0;

// function getFirstValue(el) {
//   value.innerHTML = "";
//   a += el;
//   value.innerHTML = a;
//   a = +a;
// }

// function getSecondValue(el) {
//   if (a != "" && sign != "") {
//     c += el;
//     value.innerHTML = c;
//     c = +c;
//   }
// }

// for (let i = 0; i < numbers.length; i++) {
//   numbers[i].addEventListener("click", (e) => {
//     let abc = e.target.getAttribute("value");
//     if (b === false) {
//       getFirstValue(abc);
//     }
//     if (d == false) {
//       getSecondValue(abc);
//     }
//   });
// }
// let plus;
// function getSign() {
//   for (let i = 0; i < signs.length; i++) {
//     signs[i].addEventListener("click", (e) => {
//       sign = e.target.getAttribute("value");
//       b = true;
//     });
//   }
// }
// getSign();

// equals.addEventListener("click", () => {
//   result.innerHTML = "0";
//   if (sign === "-") {
//     result = a -= c;
//   } else if (sign === "+") {
//     result = a += c;
//   } else if (sign === "*") {
//     result = a *= c;
//   } else if (sign === "/") {
//     result = a /= c;
//   }
//   value.innerHTML = result;
//   a = result;
//   c = "";
// });

// function checkResult() {
//   result = JSON.stringify(result);

//   if (result.length >= 8) {
//     result = JSON.parse(result);
//     result.innerHTML = result.toFixed(5);
//   }
// }

// negative.addEventListener("click", () => {
//   result.innerHTML = "";
//   if (a != "") {
//     result = -a;
//     a = result;
//   }
//   if (a != "" && c != "" && sign != "") {
//     result = -result;
//   }

//   result.innerHTML = result;
// });

// clear.addEventListener("click", () => {
//   value.innerHTML = 0;

//   a = "";
//   b = false;
//   c = "";
//   d = false;
//   sign = "";
//   result = 0;
// });

// backspace.addEventListener("click", () => {
//   let exp = value.innerHTML;
//   value.innerHTML = exp.substring(0, exp.length - 1);
//   if (exp.length === 1) {
//     value.innerHTML = 0;
//   }
//   return true;
// });

// // const buttons = document.querySelector(".button");

// // buttons.forEach((item) => {
// //   item.onclick = () => {
// //     if (item.id == "Clear") {
// //     } else if (value.innerText != "" && item.id == "equals") {
// //       value.innerText = eval(value.innerText);
// //     } else if (value.innerText == "" && item.id == "equals") {
// //       value.innerText = "Empty!";
// //       setTimeout(() => (value.innerText = ""), 2000);
// //     } else {
// //       value.innerText += item.id;
// //     }

// //     if (value.innerHTML == "00" || value.innerHTML == "000") {
// //       value.innerHTML = "0";
// //     }
// //   };
// // });

// // clear.console.time(2000);
