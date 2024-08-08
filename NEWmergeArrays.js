// import episodes from './dc-anime-ep-titles.js';
// import episodesData from './dc-anime-ep-information-and-bgm-data.js';

// const mergeArrays = (episodes, episodesData) => {
//     // Create an object to store episodesData elements based on id
//     const mapEpisodesDataById = episodesData.reduce((acc, item) => {
//         acc[item.id] = item;
//         return acc;
//     }, {});

//     // Iterate through episodes and update corresponding elements in episodesData
//     episodes.forEach(episode => {
//         const id = episode.id;
//         if (mapEpisodesDataById[id]) {
//             mapEpisodesDataById[id].title = episode.title;
//         }
//     });

//     // Create a new array with the merged and formatted data
//     const mergedAndFormatted = episodesData.map(item => {
//         const formattedLanguages = item.inOtherLanguages.map((lang, index) => {
//             const comma = index < item.inOtherLanguages.length - 1 ? ',' : '';
//             return `["${lang[0]}", "${lang[1]}", "${lang[2]}"]${comma}<br>`;
//         }).join('');

//         const formattedBGM = item.BGM.map((bg, index) => {
//             const comma = index < item.BGM.length - 1 ? ',' : '';
//             return `["${bg[0]}", "${bg[1]}", "${bg[2]}", "${bg[3]}"]${comma}<br>`;
//         }).join('');

//         const casesSolvedBy = item.hasOwnProperty('caseSolvedBy') ? item.caseSolvedBy : item.casesSolvedBy;
//         return `<div> 
//         { <br>

//             id: "${item.id}", isFiller: ${item.isFiller}, title: "${item.title}",<br>
//             appearances: ["${item.cast.join('", "')}"],<br>
//             episodeDescription: "${item.episodeDescription}",<br>
//             japaneseTitle: "${item.japaneseTitle}",<br>
//             titleInOtherLanguages: [<br>${formattedLanguages}],<br>
//             season: "${item.season}",<br>
//             originalAirdate: "${item.originalAirdate}",<br>
//             englishAirdate: "${item.englishAirdate}",<br>
//             broadcastRating: "${item.broadcastRating}",<br>
//             remasteredRating: "${item.remasteredRating}",<br>
//             fillerCase: "${item.fillerCase}",<br>
//             mangaCase: "${item.mangaCase}",<br>
//             mangaSource: "${item.mangaSource}",<br>
//             dubbedEpisode: "${item.dubbedEpisode}",<br>
//             englishTitle: "${item.englishTitle}",<br>
//             caseSolvedBy: "${casesSolvedBy}",<br>
//             nextConansHint: "${item.nextConansHint}",<br>
//             director: "${item.director}",<br>
//             episodeDirector: "${item.episodeDirector}",<br>
//             animationDirector: "${item.animationDirector}",<br>
//             screenplay: "${item.screenplay}",<br>
//             storyboard:"${item.storyboard}",<br>
//             characterDesign: "${item.characterDesign}",<br>
//             voiceCast: "${item.voiceCast}",<br>
//             openingSong: "${item.openingSong}",<br>
//             endingSong: "${item.closingSong}",<br>
//             prevCase: "${item.prevCase}",<br>
//             nextCase: "${item.nextCase}",<br>
//             BGM: [<br>${formattedBGM}]<br> 
//         },
//         </div>`;
//     });

//     return mergedAndFormatted.join('');
// };

// const mergedData = mergeArrays(episodes, episodesData);

// // Render the merged data on the webpage
// const container = document.getElementById('episodesContainer');
// container.innerHTML = mergedData;



// // Create a button to copy the content of the container
// const copyButton = document.getElementById("copy")
// copyButton.textContent = 'Copy to Clipboard';
// copyButton.addEventListener('click', function() {
//     const range = document.createRange();
//     range.selectNode(allContent);
//     window.getSelection().removeAllRanges();
//     window.getSelection().addRange(range);
//     document.execCommand('copy');
//     window.getSelection().removeAllRanges();
//     console.log('Copied to clipboard');
// });
























import episodes from './dc-anime-ep-titles.js';
import episodesData from './dc-anime-ep-information-and-bgm-data.js';

const mergeArrays = (episodes, episodesData) => {
    // Create an object to store episodesData elements based on id
    const mapEpisodesDataById = episodesData.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {});

    // Iterate through episodes and update corresponding elements in episodesData
    episodes.forEach(episode => {
        const id = episode.id;
        if (mapEpisodesDataById[id]) {
            mapEpisodesDataById[id].title = episode.title;
        }
    });

    // Create a new array with the merged and formatted data
    const mergedAndFormatted = episodesData.map(item => {
        const formattedLanguages = item.inOtherLanguages.map((lang, index) => {
            const comma = index < item.inOtherLanguages.length - 1 ? ',' : '';
            return `["${lang[0]}", "${lang[1]}", "${lang[2]}"]${comma}<br>`;
        }).join('');

        const formattedCharacters = item.characters ? item.characters.map((text, index) => {
            const comma = index < item.characters.length - 1 ? ',' : '';
            return `"${text}"${comma} `;
        }).join('') : '';

        const formattedGadgets = item.gadgets ? item.gadgets.map((text, index) => {
            const comma = index < item.gadgets.length - 1 ? ',' : '';
            return `"${text}"${comma} `;
        }).join('') : '';

        const formattedMangaToAnimeChanges = item.mangaToAnimeChanges ? item.mangaToAnimeChanges.map((text, index) => {
            const comma = index < item.mangaToAnimeChanges.length - 1 ? ',' : '';
            return `"${text}"${comma}<br>`;
        }).join('') : '';

        const formattedTrivia = item.trivia ? item.trivia.map((text, index) => {
            const comma = index < item.trivia.length - 1 ? ',' : '';
            return `"${text}"${comma}<br>`;
        }).join('') : '';

        const formattedBGM = item.BGM.map((bg, index) => {
            const comma = index < item.BGM.length - 1 ? ',' : '';
            bg[3] = bg[3].replace(/ver\./gi, "Version");
            return `["${bg[0]}", "${bg[1]}", "${bg[2]}", "${bg[3]}", "${bg[4]}"]${comma}<br>`;
        }).join('');

        const casesSolvedBy = item.hasOwnProperty('caseSolvedBy') ? item.caseSolvedBy : item.casesSolvedBy;

        // Check each property individually before including it in the template
        const id = item.hasOwnProperty('id') ? `id: "${item.id}", ` : '';
        const isFiller = item.hasOwnProperty('isFiller') ? `isFiller: ${item.isFiller}, ` : '';
        const title = item.hasOwnProperty('title') ? `title: "${item.title}", ` : '';
        const cast = item.hasOwnProperty('cast') ? `appearances: ["${item.cast.join('", "')}"], ` : '';
        const episodeDescription = item.hasOwnProperty('episodeDescription') ? `episodeDescription: "${item.episodeDescription}", ` : '';
        const japaneseTitle = item.hasOwnProperty('japaneseTitle') ? `japaneseTitle: "${item.japaneseTitle}", ` : '';
        const titleInOtherLanguages = item.hasOwnProperty('inOtherLanguages') ? `titleInOtherLanguages: [<br>${formattedLanguages}], ` : '';
        const season = item.hasOwnProperty('season') ? `season: "${item.season}", ` : '';
        const originalAirdate = item.hasOwnProperty('originalAirdate') ? `originalAirdate: "${item.originalAirdate}", ` : '';
        const englishAirdate = item.hasOwnProperty('englishAirdate') ? `englishAirdate: "${item.englishAirdate}", ` : '';
        const broadcastRating = item.hasOwnProperty('broadcastRating') ? `broadcastRating: "${item.broadcastRating}", ` : '';
        const remasteredRating = item.hasOwnProperty('remasteredRating') ? `remasteredRating: "${item.remasteredRating}", ` : '';
        const fillerCase = item.hasOwnProperty('fillerCase') ? `fillerCase: "${item.fillerCase}", ` : '';
        const mangaCase = item.hasOwnProperty('mangaCase') ? `mangaCase: "${item.mangaCase}", ` : '';
        const mangaSource = item.hasOwnProperty('mangaSource') ? `mangaSource: "${item.mangaSource}", ` : '';
        const dubbedEpisode = item.hasOwnProperty('dubbedEpisode') ? `dubbedEpisode: "${item.dubbedEpisode}", ` : '';
        const englishTitle = item.hasOwnProperty('englishTitle') ? `englishTitle: "${item.englishTitle}", ` : '';
        const caseSolvedBy = item.hasOwnProperty('caseSolvedBy') || item.hasOwnProperty("casesSolvedBy") ? `caseSolvedBy: "${casesSolvedBy}", ` : '';
        const nextConansHint = item.hasOwnProperty('nextConansHint') ? `nextConansHint: "${item.nextConansHint}", ` : '';
        const director = item.hasOwnProperty('director') ? `director: "${item.director}", ` : '';
        const episodeDirector = item.hasOwnProperty('episodeDirector') ? `episodeDirector: "${item.episodeDirector}", ` : '';
        const animationDirector = item.hasOwnProperty('animationDirector') ? `animationDirector: "${item.animationDirector}", ` : '';
        const screenplay = item.hasOwnProperty('screenplay') ? `screenplay: "${item.screenplay}", ` : '';
        const storyboard = item.hasOwnProperty('storyboard') ? `storyboard:"${item.storyboard}", ` : '';
        const characterDesign = item.hasOwnProperty('characterDesign') ? `characterDesign: "${item.characterDesign}", ` : '';
        const voiceCast = item.hasOwnProperty('voiceCast') ? `voiceCast: ["${item.voiceCast.replace(/  /gi, '", "')}"], ` : '';
        const openingSong = item.hasOwnProperty('openingSong') ? `openingSong: "${item.openingSong}", ` : '';
        const endingSong = item.hasOwnProperty('closingSong') ? `endingSong: "${item.closingSong}", ` : '';
        const prevCase = item.hasOwnProperty('prevCase') ? `prevCase: "${item.prevCase}", ` : '';
        const characters = item.hasOwnProperty('characters') ? `characters: [${formattedCharacters}], ` : '';
        const gadgets = item.hasOwnProperty('gadgets') ? `gadgets: [${formattedGadgets}], ` : '';
        const nextCase = item.hasOwnProperty('nextCase') ? `nextCase: "${item.nextCase}", ` : '';
        const people = item.hasOwnProperty('people') ? `people: ${formatPeople(item.people)}, ` : '';
        const resolution = item.hasOwnProperty('resolution') ? `resolution: "${item.resolution}", ` : '';
        const mangaToAnimeChanges = item.hasOwnProperty('mangaToAnimeChanges') ? `mangaToAnimeChanges: [<br>${formattedMangaToAnimeChanges}],` : '';
        const trivia = item.hasOwnProperty('trivia') ? `trivia: [<br>${formattedTrivia}],` : '';
        const BGM = item.hasOwnProperty('BGM') ? `BGM: [<br>${formattedBGM}]<br> ` : '';
        // console.log(`people: ${JSON.stringify(item.people)}, `)
        function formatPeople(peopleArray) {
            const jsonString = JSON.stringify(peopleArray, null); // Indent by 2 spaces
            return jsonString.replace(/\{/, '<br>{').replace(/\},/g, '},<br>').replace(/"name"/gi, "name").replace(/"info"/gi, "info");
          }
          return `<div> 
          { <br>
            ${id}
            ${isFiller}
            ${title}<br>
            ${cast}<br>
            ${characters}<br>
            ${people}<br>
            ${gadgets}<br>
            ${episodeDescription}<br>
            ${japaneseTitle}<br>
            ${titleInOtherLanguages}<br>
            ${season}<br>
            ${originalAirdate}<br>
            ${englishAirdate}<br>
            ${broadcastRating}<br>
            ${remasteredRating}<br>
            ${fillerCase}<br>
            ${mangaCase}<br>
            ${mangaSource}<br>
            ${dubbedEpisode}<br>
            ${englishTitle}<br>
            ${caseSolvedBy}<br>
            ${nextConansHint}<br>
            ${director}<br>
            ${episodeDirector}<br>
            ${animationDirector}<br>
            ${screenplay}<br>
            ${storyboard}<br>
            ${characterDesign}<br>
            ${voiceCast}<br>
            ${openingSong}<br>
            ${endingSong}<br>
            ${prevCase}<br>
            ${nextCase}<br>
            ${resolution}<br>
            ${mangaToAnimeChanges}<br>
            ${trivia}<br>
            ${BGM}
        },
        </div>`;
    });

    return mergedAndFormatted.join('');
};

const mergedData = mergeArrays(episodes, episodesData);

// Render the merged data on the webpage
const container = document.getElementById('episodesContainer');
container.innerHTML = mergedData;

// Create a button to copy the content of the container
const copyButton = document.getElementById("copy")
copyButton.textContent = 'Copy to Clipboard';
copyButton.addEventListener('click', function() {
    const range = document.createRange();
    range.selectNode(allContent);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    console.log('Copied to clipboard');
});
