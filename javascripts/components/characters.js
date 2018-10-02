import {printToDom} from '../helpers/util.js'

const characters = [

{name: "John Snow", house: "Stark", imageURL: "https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553"},
{name: "Arya Stark", house: "Stark", imageURL: "https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553"},
{name: "Daenerys Targaryen", house: "Targaryen", imageURL: "https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553"},
{name: "Tyrion Lannister", house: "Lannister", imageURL: "https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553"},

];

const charactersBuilder = () => {
    let domString = '';
    characters.forEach ((character) => {
    domString += `<h1>${character.name}</h1>`;
    });
    printToDom(domString);

};

export {charactersBuilder};