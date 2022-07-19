const urlApi = 'http://localhost:8888/forem-api/';

const formAddSession = document.querySelector('.form_add-session');
const addMetier = document.querySelector('.form_add-session_metier_select');
const addCentre = document.querySelector('.form_add-session_centre_select');
const addFormer = document.querySelector('.form_add-session_former_select');



// --------------- M E T I E R S ---------------
fetch(urlApi + 'metier')
    .then(response => response.json())
    .then(response => {
        console.log(response)
        let template = ''
        response.data.forEach(el => {
            template += `<option data-id="${el.id_metiers}">${el.label}</option>`
        });
        addMetier.innerHTML += template
    })
    .catch(error => console.error(error));

// --------------- C E N T R E S ---------------
fetch(urlApi + 'centre')
    .then(response => response.json())
    .then(response => {
        console.log(response)
        let template = ''
        response.data.forEach(el => {
            template += `<option data-id="${el.id_centres}">${el.name}</option>`
        });
        addCentre.innerHTML += template
    })
    .catch(error => console.error(error));

// --------------- F O R M A T E U R S ---------------
fetch(`${urlApi}user?search=&type=formateur`)
.then(response => response.json())
.then(response => {
    let template = ''
    response.data.forEach(user => {
        template += `<option>${user.firstname} ${user.lastname}</option>`
    })
    addFormer.innerHTML = template
})
    .catch(error => console.error(error));

// --------------- A J O U T E R   U N E   S E S S I O N ---------------

formAddSession.addEventListener('submit', e => {
    e.preventDefault();
    fetch(urlApi + 'session', {
        method: 'POST',
        headers: {
        'Content-Type':'application/json'
            },
        body: JSON.stringify({
            id_metier: addMetier.value,
            label: formAddSession.querySelector('.form_add-session_nom_input').value,
            id_centre: formAddSession.querySelector('.form_add-session_centre_select').value,
            id_user: formAddSession.querySelector('.form_add-session_former_select').value,
            date_start: formAddSession.querySelector('.form_add-session_date_input').value,
            token: localStorage.token
        })
    })
    .then(response => response.json())
    .then(response => {
        console.log(response)
        if(response.code === 200){
            alert('session added');
            window.location.href = 'inscription.html';
        } else {
            alert('token error');
            window.location.href = '../../index.html';
        }
    })
    .catch(error => console.log(error))
})


