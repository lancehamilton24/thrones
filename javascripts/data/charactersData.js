import {setCharacters, charactersBuilder} from '../components/characters.js';

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setCharacters(data.characters);
    charactersBuilder();

    // console.log('request', data.characters);
}

function executeThiscodeIfXhrFails () {
    console.log('stuff broke');
}

const getCharacters = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', executeThiscodeIfXhrFails);
    myRequest.open('GET', './db/characters.json');
    myRequest.send();
};

export {getCharacters};