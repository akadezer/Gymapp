const add = document.getElementById("add");
const overview = document.querySelector(".overview");
const workoutSelection = document.querySelectorAll(".workoutSelection");
const closeModal = document.querySelector(".cancel");

var newSetBtns = document.querySelectorAll(".newSetBtn");
const excBTN = document.getElementById("newExcBtn");
const excOverview = document.querySelector(".excerciseOverview");

// add functionality to setButtons

function addNewSet() {
  let elem = newSetBtns[newSetBtns.length - 1];

  elem.addEventListener("click", () => {
    console.log(elem);
    console.log(newSetBtns);
    addSetLayout(elem);
  });
}

addNewSet();

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
}

// adding new exercise

excBTN.addEventListener("click", () => {
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
                
            </div>      
                `
  );

  newSetBtns = document.querySelectorAll(".newSetBtn");

  addNewSet();
});

add.addEventListener("click", function () {
  // overview.insertAdjacentHTML("afterbegin", `
  //                 <div class="workoutWidget" onclick="openWidget()">
  //             <h1> Chest day</h1>
  //             <p>03.08.24</p>
  //             <button type="button" class="delete"><span class="material-symbols-outlined">
  //                 delete
  //                 </span>
  //             </button>
  //         </div>`);
  // workoutSelection.showModal();
  // workoutSelection.close();
  let openModal = workoutSelection[workoutSelection.length - 1];
  openModal.showModal();
});

closeModal.addEventListener("click", () => {
  let openModal = workoutSelection[workoutSelection.length - 1];
  openModal = openModal.close();
});

const auswahl = document.querySelector(".workoutWidget");

// auswahl.addEventListener("click", function() {
//     console.log("hi");
// });

// addEventListener("click", () => {console.log("hi");})
