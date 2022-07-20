const urlApi = 'http://localhost:8888/forem-api/';

const formInscription = document.querySelector('.form_inscription');
const sessionChoice = document.querySelector('.form_inscription_session_select');
const inputParticipants = document.querySelector('.form_inscription_student_input');

const choixListe = document.querySelector('.choix_liste_participants');
const choixListeItem = document.querySelector('.choix_liste_participants_item');
const listeParticipants = document.querySelector('.liste_participants');
const listeParticipantsItem = document.querySelector('.liste_participants-item');



// --------------- C H O I X   D E   S E S S I O N ---------------
fetch(urlApi + 'session')
    .then(response => response.json())
    .then(response => {
        console.log(response)
        let template = ''
        response.data.forEach(el => {
            template += `<option data-id="${el.id_session}">${el.label_session}</option>`
        });
        sessionChoice.innerHTML += template
    })
    .catch(error => console.error(error));

    // --------------- R E C H E R C H E R   P A R T I C I P A N T S ---------------
if (inputParticipants) {
    inputParticipants.addEventListener('keyup', function(e) {
        fetch(`${urlApi}user?search=${e.target.value}&type=stagiaire`)
            .then(response => response.json())
            .then(response => {
                let template = ''
                response.data.forEach(user => {
                    template += `<p class="choix_liste_participants_item-un">${user.firstname} ${user.lastname} - ${user.email}</p>`
                })
                choixListe.classList.remove('hidden')
                choixListeItem.classList.remove('hidden')
                choixListeItem.classList.add('hover')
                choixListeItem.innerHTML = template
            })
    })
}

    // --------------- Ajouter participants à la liste ---------------

choixListeItem.addEventListener('click', (e) => {

    fetch(`${urlApi}user?search=&type=stagiaire`)
    .then(response => response.json())
    .then(response => {
                let template = ''
                response.data.forEach(el => {
                    template += `<li class="liste_participants-item" data-id="${el.id_user}">${el.firstname} ${el.lastname} - ${el.email}</li>`
                });
                listeParticipants.innerHTML += template
            })
            .catch(error => console.error(error));
            console.log("stagiaire ajouté !")
        
})

// --------------- A J O U T E R (DB)  participants à un session  ---------------

formInscription.addEventListener('submit', e => {
    e.preventDefault();
    fetch(urlApi + 'inscription?alldatas', {
        method: 'POST',
        headers: {
        'Content-Type':'application/json'
            },
        body: JSON.stringify({
            id_session: sessionChoice.value,
            id_user: choixListeItem.value,
            token: localStorage.token
        })
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
        if(response.code === 200){
            //alert('session added');
            //window.location.href = 'admin.html';
        } else {
            // alert('token error');
            //window.location.href = 'admin.html';
        }
    })
    .catch(error => console.log(error))
})
