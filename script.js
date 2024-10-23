const add = document.getElementById("add");
const overview = document.querySelector(".overview");
const workoutSelection = document.querySelector(".workoutSelection");
let setCounter = 1; 
let set = document.querySelector(".set"); 
let newSetBtns = document.querySelector(".newSetBtn"); 
const excBTN = document.getElementById("newExcBtn"); 
const excOverview = document.querySelector(".excerciseOverview"); 

 


newSetBtns.addEventListener("click", () => { 
    setCounter++; 
    console.log('hi');
    
    set.insertAdjacentHTML("beforeend", ` <label>Set : </label>
        <div>
            <label for="reps">Repetitions:</label>
            <input type="number" name="reps" id="reps" placeholder="0">
        </div>
        <div>
            
            <label for="weight">Weight:</label>
            <input type="number" name="weight" id="weight" placeholder="0">
            <label for="weight">kg</label>
        </div>`);

 
} );

excBTN.addEventListener("click", () => {
excOverview.insertAdjacentHTML("beforeend", `<div>
                        
                        <label for="exercise">Excercise:</label>
                        <input type="text" id="exercise" name="exercise" placeholder="exercise">
                    </div>
                    <div class="set">
                        
                        <label>Set 1: </label>
                        <div>
                            <label for="reps">Repetitions:</label>
                            <input type="number" name="reps" id="reps" placeholder="0">
                        </div>
                        <div>
                            
                            <label for="weight">Weight:</label>
                            <input type="number" name="weight" id="weight" placeholder="0">
                            <label for="weight">kg</label>
                        </div>
                        
                    </div>
                    <div>
                        <input type="button" value="New Set" class="newSetBtn">
                    </div>
                    
                `);
                    set = set.querySelectorAll(".set"); 
                    newSetBtns = document.querySelectorAll(".newSetBtn"); 
                    
                    console.log(newSetBtns); 
                    console.log(set);
                    console.log("hi"); 
}); 

add.addEventListener("click", function() {
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

});

const auswahl = document.querySelector(".workoutWidget"); 

// auswahl.addEventListener("click", function() {
//     console.log("hi");
// });

// addEventListener("click", () => {console.log("hi");})

function openWidget(){



}