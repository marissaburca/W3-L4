const tabellone = [];

const numbers = function () {
  for (let i = 1; i < 77; i++) {
    tabellone.push(i);
  }

  const createNumber = function () {
    for (let i = 0; i < tabellone.length; i++) {
      const grill = document.getElementById("tabellone");
      const newGrillElement = document.createElement("span");
      newGrillElement.classList.add("numero");
      newGrillElement.innerText = tabellone[i];
      grill.appendChild(newGrillElement);

      console.log(newGrillElement);
    }
  };
  createNumber();
};
numbers();
console.log(tabellone);

const pulsante = function () {
  const but = document.querySelector("button");
  but.addEventListener("click", () => {
    const pressBot = Math.floor(Math.random() * 77);
    console.log(pressBot);
    const numeriLight = document.querySelectorAll(".numero");
    const match = () => {
      for (let i = 0; i < numeriLight.length; i++)
        if (parseInt(numeriLight[i].innerText) === pressBot) {
          numeriLight[i].classList.add("selected");
        }
    };
    match();
  });
};

pulsante();
