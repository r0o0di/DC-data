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

        const formattedBGM = item.BGM.map((bg, index) => {
            const comma = index < item.BGM.length - 1 ? ',' : '';
            return `["${bg[0]}", "${bg[1]}", "${bg[2]}", "${bg[3]}"]${comma}<br>`;
        }).join('');

        const casesSolvedBy = item.hasOwnProperty('caseSolvedBy') ? item.caseSolvedBy : item.casesSolvedBy;

        return `<div> 
        { <br>

            id: "${item.id}", isFIller: ${item.isFiller}, title: "${item.title}",<br>
            cast: ["${item.cast.join('", "')}"],<br>
            episodeDescription: "${item.episodeDescription}",<br>
            japaneseTitle: "${item.japaneseTitle}",<br>
            titleInOtherLanguages: [<br>${formattedLanguages}],<br>
            season: "${item.season}",<br>
            originalAirdate: "${item.originalAirdate}",<br>
            englishAirdate: "${item.englishAirdate}",<br>
            broadcastRating: "${item.broadcastRating}",<br>
            remasteredRating: "${item.remasteredRating}",<br>
            mangaCase: "${item.mangaCase}",<br>
            mangaSource: "${item.mangaSource}",<br>
            dubbedEpisode: "${item.dubbedEpisode}",<br>
            englishTitle: "${item.englishTitle}",<br>
            caseSolvedBy: "${casesSolvedBy}",<br>
            nextConansHint: "${item.nextConansHint}",<br>
            director: "${item.director}",<br>
            episodeDirector: "${item.episodeDirector}",<br>
            animationDirector: "${item.animationDirector}",<br>
            screenplay: "${item.screenplay}",<br>
            storyboard:"${item.storyboard}",<br>
            characterDesign: "${item.characterDesign}",<br>
            voiceCast: "${item.voiceCast}",<br>
            openingSong: "${item.openingSong}",<br>
            endingSong: "${item.closingSong}",<br>
            prevCase: "${item.prevCase}",<br>
            nextCase: "${item.nextCase}",<br>
            BGM: [<br>${formattedBGM}]<br> 
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

