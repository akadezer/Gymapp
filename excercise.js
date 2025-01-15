const save = document.getElementById("save");

class Excersice {
  constructor(t) {
    this.t = t;
  }

  printTitle() {
    console.log(this.t);
  }
}

let exc;
let ti = document.getElementById("title");
save.addEventListener("click", () => {
  exc = new Excersice(title.value);
  exc.printTitle();
});
