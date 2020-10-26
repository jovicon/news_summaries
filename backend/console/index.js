import {saveScraping} from '../tools/scrapeit/index.js';
import { Scraper } from '../src/models/Scraper.js';


// const googleUrl = "https://news.google.com/topstories";
const googleUrl = "https://news.google.cl/topstories";
const googleStructure = {
    articles: {
        listItem: ".NiLAwe",
        data: {
            title: "h3.ipQwMb.ekueJc.RD0gLb",
            url: {
                selector: "h3.ipQwMb.ekueJc.RD0gLb a",
                attr: "href"
            }
        }
    }
}

Scraper.init();

const scraper = {
    url: googleUrl,
    structure: googleStructure
}
const scraperSave = new Scraper(scraper);
scraperSave.save()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })


// saveScraping(googleUrl, googleStructure);


// const bbcUrl = "https://www.bbc.com/news";
// const bbcStructureA = {
//     articles: {
//         listItem: ".gel-layout__item.nw-c-top-stories__primary-item",
//         data: {
//             title: "h3.gs-c-promo-heading__title.gel-paragon-bold.nw-o-link-split__text",
//             url: {
//                 selector: "a.gs-c-promo-heading.gel-paragon-bold",
//                 attr: "href"
//             }
//         }
//     }
// }
// const bbcStructureB = {
//     articles: {
//         listItem: ".gel-layout__item.nw-c-top-stories__secondary-item",
//         data: {
//             title: "h3.gs-c-promo-heading__title.gel-pica-bold.nw-o-link-split__text",
//             url: {
//                 selector: "a.gs-c-promo-heading.gs-o-faux-block-link__overlay-link.gel-pica-bold.nw-o-link-split__anchor",
//                 attr: "href"
//             }
//         }
//     }
// }
// const bbcStructureC = {
//     articles: {
//         listItem: ".gel-layout__item.nw-c-top-stories__tertiary-items",
//         data: {
//             title: "h3.gs-c-promo-heading__title.gel-pica-bold.nw-o-link-split__text",
//             url: {
//                 selector: "a.gs-c-promo-heading.gs-o-faux-block-link__overlay-link.gel-pica-bold.nw-o-link-split__anchor",
//                 attr: "href"
//             }
//         }
//     }
// }

// const bbcStructureD = {
//     articles: {
//         listItem: "#u6098469211298796 .gel-layout__item.gs-o-faux-block-link",
//         data: {
//             title: "span.gs-c-promo-heading__title.gel-pica-bold",
//             url: {
//                 selector: "a.gs-c-promo-heading.nw-o-link.gs-o-bullet__text",
//                 attr: "href"
//             }
//         }
//     }
// }



// save_scraping(bbcUrl, bbcStructureA);
// save_scraping(bbcUrl, bbcStructureB);
// save_scraping(bbcUrl, bbcStructureC);
// save_scraping(bbcUrl, bbcStructureD);



// const google_news = scraping("https://news.google.com/topstories")
//                         .then(response => { console.log(response)});

// console.log(google_news);

// Promise interface
// const scrape = scrapeIt("https://ionicabizau.net", {
//     title: ".header h1"
//   , desc: ".header h2"
//   , avatar: {
//         selector: ".header img"
//       , attr: "src"
//     }
// }).then(({ data, response }) => {
//     console.log(`Status Code: ${response.statusCode}`)
//     console.log(data)
// })


// Callback interface
// scrapeIt("https://ionicabizau.net", {
//     // Fetch the articles
//     articles: {
//         listItem: ".article"
//       , data: {

//             // Get the article date and convert it into a Date object
//             createdAt: {
//                 selector: ".date"
//               , convert: x => new Date(x)
//             }

//             // Get the title
//           , title: "a.article-title"

//         //     // Nested list
//         //   , tags: {
//         //         listItem: ".tags > span"
//         //     }

//         //     // Get the content
//         //   , content: {
//         //         selector: ".article-content"
//         //       , how: "html"
//         //     }

//         //     // Get attribute value of root listItem by omitting the selector
//         //   , classes: {
//         //         attr: "class"
//         //     }
//         }
//     }

// //     // Fetch the blog pages
// //   , pages: {
// //         listItem: "li.page"
// //       , name: "pages"
// //       , data: {
// //             title: "a"
// //           , url: {
// //                 selector: "a"
// //               , attr: "href"
// //             }
// //         }
// //     }

// //     // Fetch some other data from the page
// //   , title: ".header h1"
// //   , desc: ".header h2"
// //   , avatar: {
// //         selector: ".header img"
// //       , attr: "src"
// //     }

// }, (err, { data }) => {
//     console.log(err || data)
// })