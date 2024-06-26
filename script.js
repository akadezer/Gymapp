const modal = document.querySelector('#modal');
const openModal = document.querySelector('#add');
const save = document.querySelector('#save');

openModal.addEventListener('click', () => {

    modal.show();

})

save.addEventListener('click', () => {
    const exercise = document.getElementById("exerciseFor").value;
    const weight =  document.getElementById("weightFor").value; 
    const reps =  document.getElementById("repetitionsFor").value; 
    const overview = document.getElementById("exerciseOverview");
    
    const exerciseHtml = 
    `
    <p> Exercise: ${exercise} Weight: ${weight} Reps: ${reps}
    `;
    
    overview.innerHTML += exerciseHtml; 
    modal.close();
})

