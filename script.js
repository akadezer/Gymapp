const add = document.getElementById("add");
const overview = document.querySelector(".overview");
const workoutSelection = document.querySelectorAll(".workoutSelection");
const closeModal = document.querySelector(".cancel");

var newSetBtns = document.querySelectorAll(".newSetBtn");
const excBTN = document.querySelectorAll(".newExcBtn");

//initiate functionality to buttons
addExercise();
addNewSet();

// add functionality to setButtons

function addExercise() {
  let newExcBtn = excBTN[excBTN.length - 1];
  newExcBtn.addEventListener("click", () => addExerciseLayout(newExcBtn));
}

function addNewSet() {
  let elem = newSetBtns[newSetBtns.length - 1];

  elem.addEventListener("click", () => {
    console.log(elem);
    console.log(newSetBtns);
    addSetLayout(elem);
  });
}

// adding set Layout after pressing new set Button

function addSetLayout(elem) {
  let set = elem.previousElementSibling;
  let parent = elem.parentElement;
  let setcount = 1;
  setcount += parent.querySelectorAll(".set").length;
  console.log(setcount);
  set.insertAdjacentHTML(
    "afterend",
    ` <div class="set">
    <p>Set ${setcount}: <p>
                  <table>
                <tr>
                  <td>
                    <label for="reps">Repetitions:</label>
                  </td>
                  <td>
                    <input
                      type="number"
                      name="reps"
                      class="reps"
                      placeholder="0"
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label for="weight">Weight:</label>
                  </td>
                  <td>
                    <input
                      type="number"
                      name="weight"
                      class="weight"
                      placeholder="0"
                    />
                  </td>
                  <td>
                    <label for="weight">kg</label>
                  </td>
                </tr>
              </table>
               </div>   
                  `
  );

  if (setcount == 2) {
    elem.insertAdjacentHTML(
      "afterend",
      ` 
              <input
              type="button"
              value="Delete Set"
              class="deleteSetBtn dialogButton"
            />`
    );
    let dSet = elem.nextElementSibling;
    dSet.addEventListener("click", () => {
      deleteSet(dSet, elem);
    });
  }
}

// functionality for delete set button

function deleteSet(dSet, elem) {
  let set = elem.previousElementSibling;
  let parent = elem.parentElement;
  set.remove();
  console.log;
  if (parent.querySelectorAll(".set").length == 1) {
    dSet.remove();
  }
}

// adding new exercise
function addExerciseLayout(newExcBtn) {
  let excOverview = newExcBtn.previousElementSibling;
  excOverview.insertAdjacentHTML(
    "beforeend",
    `<div class = newExercise>
      <div>
      <label for="exercise" class="exerciseLabel">Exercise:</label>
      <input type="text" class="exercise" name="exercise" placeholder="exercise">
      </div>
      <div class="set">
      
      <p>Set 1: <p>
      <table>
      <tr>
      <td>
      <label for="reps">Repetitions:</label>
      </td>
      <td>
      <input
      type="number"
      name="reps"
      class="reps"
      placeholder="0"
      />
      </td>
      </tr>
      
      <tr>
      <td>
      <label for="weight">Weight:</label>
      </td>
      <td>
      <input
      type="number"
      name="weight"
      class="weight"
      placeholder="0"
      />
      </td>
      <td>
      <label for="weight">kg</label>
      </td>
      </tr>
      </table>
      
      </div>
      
      <input type="button" value="New Set" class="newSetBtn dialogButton">
      <input type="button" value="Delete Exercise" class="deleteExercise dialogButton">
      </div>      
      `
  );

  newSetBtns = document.querySelectorAll(".newSetBtn");
  deleteExerciseBtn = document.querySelectorAll(".deleteExercise");
  deleteExercise(deleteExerciseBtn);
  addNewSet();
}

function deleteExercise(deleteExerciseBtn) {
  let i = deleteExerciseBtn[deleteExerciseBtn.length - 1];
  let grandparent = i.parentElement.parentElement;
  console.log(grandparent);
  let allExercises = grandparent.querySelectorAll(".newExercise");
  if (allExercises.length < 1) {
    deleteExercise.remove();
  } else {
    let i = deleteExerciseBtn[deleteExerciseBtn.length - 1];
    i.addEventListener("click", () => {
      let parent = i.parentElement;
      parent.remove();
    });
  }
}

add.addEventListener("click", function () {
  let openModal = workoutSelection[workoutSelection.length - 1];
  openModal.showModal();
});

closeModal.addEventListener("click", () => {
  let openModal = workoutSelection[workoutSelection.length - 1];
  openModal = openModal.close();
});
