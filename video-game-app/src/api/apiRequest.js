let backendURL = "https://api.rawg.io/api/games?key=e1bdbe0a8c164f1f8ca90361579a3c39";

const axios = require("axios");
const fs = require("fs");
const games = [];

let counter = 0;
async function fetchGames() {
    try {
        if (!backendURL || counter === 10) {
            fs.writeFileSync("games.json", JSON.stringify(games, null, 2));
            return;
        }
        const response = await axios.get(backendURL);
        counter++;
        games.push(...response.data.results);
        console.log(`We now have ${games.length} characters`);
        backendURL = response.data.next;
        await sleep(1000);
        fetchGames();
    } catch (error) {
        console.log(error);
    }
    
}

async function sleep(time) {
    return new Promise((accept) => {
        setTimeout(() => {
            accept();
        }, time)
    });
}

fetchGames();

