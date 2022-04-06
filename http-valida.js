const fetch = require('node-fetch');

function handler(err) {
    throw new Error(err.message)
}

async function checaStatus(arrayURLs) {
    try {
        const arrayStatus = await Promise
            .all(arrayURLs
                .map(async url => {
                    const res = await fetch(url);
                    return res.status;
        }))
        return arrayStatus;
    } catch(err) {
        handler(err);
    }
}

function geraArrayDeURL(arrayLinks) {
    return arrayLinks
        .map(objetoLink => Object
            .values(objetoLink).join());
}

async function validaURL(arrayLinks) {
    const links = geraArrayDeURL(arrayLinks);
    const statusLinks = await checaStatus(links)
    
    const resultados = arrayLinks.map((obj, index) => 
    ({ ...obj, status: statusLinks[index] })
        )
    
    return resultados;
}

module.exports = validaURL;