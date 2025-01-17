let a = "";
let b = "";
let sign = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
const operation = ["-", "+", "/", "X"];

// screen
const out = document.querySelector(".calc-screen p"); // output

function clearAll() {
  // ac
  a = "";
  b = "";
  sign = "";
  finish = false;
  out.textContent = 0;
}

document.querySelector(".ac").onclick = clearAll;

document.querySelector(".buttons").onclick = (event) => {
  // нажата не кнопка
  if (!event.target.classList.contains("btn")) {
    return;
  }
  // нажата кнопка clearALl = ac
  if (event.target.classList.contains("ac")) {
    return;
  }
  out.textContent = "";
  // получаем нажатую кнопку
  const key = event.target.textContent;
  // если нажата клавиша 0-9 or .
  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key;

      out.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
    }
    return;
  }
  // если нажата клавиша + - / X
  if (operation.includes(key)) {
    sign = key;
    out.textContent = sign;
    return;
  }
  // нажата =
  if (key === "=") {
    if (b === "") b = a;
    switch (sign) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = +a - +b;
        break;
      case "X":
        a = +a * +b;
        break;
      case "/":
        if (b === "0") {
          out.textContent = "∞";
          a = "";
          b = "";
          sign = "";
          return;
        }
        a = +a / +b;
        break;
    }
    finish = true;
    out.textContent = ("" + a).split("").slice(0, 8).join("");
  }
};
