const urlApi = 'http://localhost:8888/forem-api/';

const sessionChoice = document.querySelector('.form_inscription_session_select');
const inputParticipants = document.querySelector('.form_inscription_student_input');
const myListe = document.querySelector('.myListe');
const afficheListe = document.querySelector('.section_inscription_liste');
const btnCible = document.querySelector('.btnCible')


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
if (inputParticipants) {
    inputParticipants.addEventListener('keyup', function(e) {
        fetch(`${urlApi}users?search=${e.target.value}&type=stagiaire`)
            .then(response => response.json())
            .then(response => {
                let template = ''
                response.data.forEach(user => {
                    template += `<li class="myListe_item hover">${user.firstname} ${user.lastname} - ${user.email}</li>`
                })
                myListe.classList.remove('hidden')
                myListe.innerHTML = template
            })
    })
}

    // --------------- Click sur le bouton + ---------------
myListe.addEventListener('click', (e) => {
    e.preventDefault();
    let cible = e.target
    if (cible.classList.contains('btnCible')) {
        let id = cible.dataset.id
/*         let payload = {
            id_users : id,
            id_session : id_session,
            token: localStorage.token
        } */
        fetch(urlApi = 'inscriptions')
/*             method: 'POST',
            body: JSON.stringify(payload) */
            .then(response => response.json())
            .then(response => {
                let template = ''
                response.data.forEach(user => {
                    template += `<li>${user.firstname} ${user.lastname} - ${user.email}</li>`
                })
                afficheListe.innerHTML = template
            })
        }
    })

