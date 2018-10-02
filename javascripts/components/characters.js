import {printToDom} from '../helpers/util.js'

const characters = [

{id: 'character1' name: "John Snow", house: "Stark", imageURL: "https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553"},
{id: 'character2' name: "Arya Stark", house: "Stark", imageURL: "https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553"},
{id: 'character3' name: "Daenerys Targaryen", house: "Targaryen", imageURL: "https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553"},
{id: 'character4' name: "Tyrion Lannister", house: "Lannister", imageURL: "https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553"},

];

const createEvents = () => {
    const characterCards = document.getElementsByClassName('character-card');
    for(let i=0;i<characterCards.length; i++) {
        characterCards[i].addEventListener('click', characterClick);
    }
};

const charactersBuilder = () => {
    let domString = '';
    characters.forEach ((character) => {
      domString += `<div class="col-2 character-card">`;
      domString += `<div class="card">`;
      domString +=  `<img class="card-img-top" src="${character.imageURL}" alt="Card image cap">`;
      domString +=  `<div class="cardBody">`;
      domString +=     `<h5 class="card-title">${character.name}</h5>`;
      domString += `</div>`;
      domString += `</div>`;
      domString +=  `</div>`;
    });
    printToDom(domString);
    createEvents();

};

export {charactersBuilder};
