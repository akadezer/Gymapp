const add = document.getElementById("add");
const cancel = document.getElementById("cancel");
const dialog = document.getElementById("workout");
// show modal

add.addEventListener("click", () => {
  dialog.showModal();
});

// adding new set when button is clicked
const newSetHtml = `
                <div class="g">

                  <label for="weight">Weight in kg: </label>
                  <input type="number" name="weight" id="weight">
              
                  
                  
                  <label for="reps">Repititions: </label>
                  <input type="number" name="reps" id="reps">
                </div>
              </div>`;
const newSetBtn = document.querySelector(".newSet");
newSetBtn.addEventListener("click", () => {
  let exc = newSetBtn.parentElement;
  let setCounter = exc.querySelectorAll(".set").length + 1;
  newSetBtn.insertAdjacentHTML(
    "beforebegin",
    `<div class="set">
                
                <p>Set ${setCounter}</p>` + newSetHtml
  );
});
