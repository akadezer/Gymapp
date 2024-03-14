function Create_new_exercise(){
    const exOverview = document.getElementById('exerciseOverview');
    const newExerciseHTML=
    `
    <div id=newExercise>
    <form>
    <label for="exerciseFor">Exercise:</label>
    <input type="text" id="exerciseFor">
    <label for="weightFor">Weight:</label>
    <input type="number" id="weightFor">
    <label for="repetitionsFor">Reps:</label>
    <input type="number" id="repetitionsFor">
    </form>
    `;
    exOverview.innerHTML = newExerciseHTML;

}