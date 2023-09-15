const btns = document.querySelectorAll(".button");
const body = document.querySelector("body");

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (event.target.id === "grey") {
      // console.log(event);
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "white") {
      // console.log(event);
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "blue") {
      // console.log(event);
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "yellow") {
      // console.log(event);
      body.style.backgroundColor = event.target.id;
    }
  });
});
