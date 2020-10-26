import scrapeIt from 'scrape-it';

export var scrapeItAsync = async (url, scrapingStructure) => {
    const news = await scrapeIt(url, scrapingStructure)
        .then(({data, response}) => {
            console.log(`Status Code: ${response.statusCode}`);
            return data;
        })
        .catch( error => {
            console.log(error);
        });
        return news;
};