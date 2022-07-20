// --------------- L I S T E   D E S   S E S S I O N S ---------------
const urlApi = 'http://localhost:8888/forem-api/';
const sessionList = document.querySelector('.session_list');

fetch(urlApi + 'session?alldata')
    .then(response => response.json())
    .then(response => {
        console.log(response)
        let template = ''
        response.data.forEach(el => {
            template += `<li class="session_list_label-session" data-id="${el.id_session}"> Nom de la session: ${el.label_session} <ul><li class="session_list_label-session_item">Métier: ${el.label}</li><li class="session_list_label-session_item">Centre: ${el.name}</li><li class="session_list_label-session_item">Formateur: ${el.firstname} ${el.lastname}</li><li class="session_list_label-session_item">Date de début: ${el.date_start}</li></ul></li>`


        });
        sessionList.innerHTML = template
    })
.catch(error => console.error(error));