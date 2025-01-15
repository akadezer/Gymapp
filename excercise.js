const save = document.getElementById("save");

class Excersice {
  constructor(t, sets) {
    this.t = t;
    this.sets = this.setsToMap(sets);
  }

  printTitle() {
    console.log(this.t);
  }

  setsToMap(sets) {
    let array = [];
    for (let index = 0; index < sets.length; index++) {
      array[index] = new Map([
        ["weight", sets[index].querySelector("#weight").value],
        ["reps", sets[index].querySelector("#reps").value],
      ]);
    }
    return array;
  }

  printArray() {
    this.sets.forEach((element) => {
      console.log(element.get("weight"));
      console.log(element.get("reps"));
    });
  }
}

let exc;
let ti = document.getElementById("title");
save.addEventListener("click", () => {
  let sets = document.querySelectorAll(".set");
  //   console.log(sets[0].querySelector("#weight").value);
  exc = new Excersice(title.value, sets);
  exc.printTitle();
  exc.printArray();
});
