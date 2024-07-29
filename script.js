const modal = document.getElementById('modal');
const openModal = document.querySelector('#add');
const save = document.querySelector('#save');

openModal.addEventListener('click', () => {

    console.log("hello");
    modal.show();

})

save.addEventListener('click', () => {
    const exercise = document.getElementById("exerciseFor").value;
    const weight =  document.getElementById("weightFor").value; 
    const reps =  document.getElementById("repetitionsFor").value; 
    const overview = document.getElementById("overview");
    modal.close();
    const exerciseHtml = 
    `
    <p> Exercise: ${exercise} Weight: ${weight} Reps: ${reps}
    `;
    
    overview.innerHTML += exerciseHtml; 
    
})

