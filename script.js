const exOverview = document.getElementById('exerciseOverview');
let newExerciseHTML; 
function Create_new_exercise(){
    newExerciseHTML = 
    `
    <dialog open>
    <div id=newExercise>
    <form>
    <label for="exerciseFor">Exercise:</label>
    <input type="text" id="exerciseFor">
    <label for="weightFor">Weight:</label>
    <input type="number" id="weightFor">
    <label for="repetitionsFor">Reps:</label>
    <input type="number" id="repetitionsFor">
    <Button onclick = "saveExcercise()"> save </Button> 
    </form>
    </dialog>
    `;
    exOverview.innerHTML += newExerciseHTML;
    
}

function saveExcercise(){

    newExerciseHTML = 
    `

    <form>
    <label for="exerciseFor">Exercise:</label>
    <label> "document.getElementById('exerciseFor').value" </label> 
    <label for="weightFor">Weight:</label>
    <input type="number" id="weightFor">
    <label for="repetitionsFor">Reps:</label>
    <input type="number" id="repetitionsFor">
    <Button onclick = "saveExcercise()"> save </Button> 
    </form>

    `
    exOverview.innerHTML += newExerciseHTML;
}

