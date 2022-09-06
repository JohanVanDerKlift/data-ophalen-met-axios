import axios from "axios";

async function fetchJoke() {
    try {
        const result = await axios.get('https://api.chucknorris.io/jokes/random');
        console.log('De grap is: ' + result.data.value);
        return result.data.value;
    } catch (e) {
        console.error(e);
    }
}

const output = document.getElementById('joke');
output.textContent = 'The joke is:' + fetchJoke().toString();