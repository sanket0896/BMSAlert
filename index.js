import { getHTML, parseHTML } from "./lib/helper";

const rootUrl = "https://in.bookmyshow.com";
const city = "bhubaneswar";
const url = `${rootUrl}/${city}/movies`;
const movieName = "Avengers: Endgame";

const startProcess = async () => {
    const html = await getHTML(url);
    let movieLink = parseHTML(html, movieName);

    if (!!movieLink) {
        movieLink = rootUrl + movieLink;
        console.log("Buy tickets at ", movieLink);
        
    }else{
        console.log("Have some patience");
    }
}

startProcess();