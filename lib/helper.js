import axios from "axios";
import cheerio from "cheerio";

export const getHTML = async (url) => {
    let res = await axios.get(url);
    if(res.status === 200){
        return res.data;
    }else{
        return null;
    }
}

export const parseHTML = (html, movieName) => {
    const $ = cheerio.load(html);
    return $(`.movie-card-container[data-title='${movieName}']>a`).attr('href');
}