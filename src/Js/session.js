const urlApi = 'http://localhost:8888/forem-api/';

const addMetier = document.querySelector('.form_add-session_metier_select');
const addCentre = document.querySelector('.form_add-session_centre_select');
const addFormer = document.querySelector('.form_add-session_former_select');

// --------------- M E T I E R S ---------------
fetch(urlApi + 'metiers')
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
fetch(urlApi + 'centres')
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
fetch(urlApi + 'users')
    .then(response => response.json())
    .then(response => {
        if(users.getAttribute("level") === "formateur") {
            console.log(response)
            let template = ''
            response.data.forEach(el => {
                template += `<option data-id="${el.id_users}">${el.firstname} ${el.lastname}</option>`
            });
            addFormer.innerHTML += template
        } 
    })
    .catch(error => console.error(error));