// --------------- L I S T E   D E S   S E S S I O N S ---------------
const urlApi = 'http://localhost:8888/forem-api/';
const sessionList = document.querySelector('.session_list');

fetch(urlApi + 'session')
    .then(response => response.json())
    .then(response => {
        console.log(response)
        let template = ''
        response.data.forEach(el => {
            template += `<li class="session_list-item" data-id="${el.id_session}"> Nom de la session: ${el.label} <ul><li>Métier: ${el.id_metier}</li><li>Centre: ${el.id_centre}</li><li>Formateur: ${el.id_user}</li><li>Date de début: ${el.date_start}</li></ul></li>`


        });
        sessionList.innerHTML = template
    })
.catch(error => console.error(error));