const urlApi = 'http://localhost:8888/forem-api/';

const addRadio = document.querySelector('.savoir_radio');

// --------------- C O M P O R T E M E N T S ---------------
fetch(urlApi + 'comportement/1')
    .then(response => response.json())
    .then(response => {
        console.log(response)
        let template = ''
        response.data.forEach(el => {
            template += `<label class="radio"><input type="radio" data-id="${el.id_comportement}"> ${el.niveau}. ${el.label}</label>`
        });
        addRadio.innerHTML += template
    })
    .catch(error => console.error(error));