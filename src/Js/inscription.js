const urlApi = 'http://localhost:8888/forem-api/';

const sessionChoice = document.querySelector('.form_inscription_session_select');
const inputParticipants = document.querySelector('.form_inscription_student_input');

// --------------- C H O I X   D E   S E S S I O N ---------------
fetch(urlApi + 'session')
    .then(response => response.json())
    .then(response => {
        console.log(response)
        let template = ''
        response.data.forEach(el => {
            template += `<option data-id="${el.id_session}">${el.label}</option>`
        });
        sessionChoice.innerHTML += template
    })
    .catch(error => console.error(error));

    // --------------- R E C H E R C H E R   P A R T I C I P A N T S ---------------
inputParticipants.addEventListener("click", (e) => {
    
})