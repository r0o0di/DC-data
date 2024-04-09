import episodes from './dc-anime-ep-titles.js';
import episodesData from './dc-anime-ep-information-and-bgm-data.js';

const button = document.createElement("button");
button.textContent = "Copy to Clipboard";

button.addEventListener("click", function copyToClipboard() {
    var outputElement = document.getElementById("mergedarray");
    var range = document.createRange();
    range.selectNode(outputElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    console.log("copied");
});

document.body.appendChild(button);

function mergeArrays(episodes, episodesData) {
    // Create an object to store array2 elements based on id
    const mapArray2ById = episodesData.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {});

    // Iterate through array1 and add title elements to corresponding elements in array2
    episodes.forEach(item => {
        const id = item.id;
        if (mapArray2ById[id]) {
            mapArray2ById[id].title = item.title;
            mapArray2ById[id].inOtherLanguages = item.inOtherLanguages;
            mapArray2ById[id].cast = item.cast;

        }
    });

    // Create a new array with the desired order 
    const rearrangedArray = episodesData.map(item => {
        const formattedData = item.BGM.map(row => `["${row.join('", "')}"]`).join(',\n');
        const formattedInformation = formatInformation(item.information);
        const formattedLanguages = formatLanguages(item.inOtherLanguages);
        return `{\nid: "${item.id}", number: "${item.id}", isFiller: ${item.isFiller}, title: "${item.title}",
            titleInOtherLanguages: [\n${formattedLanguages}\n],
            cast: ["${item.cast}"], 
            description: "${item.episodeDescription}", 
            information: {\n${formattedInformation}\n},
            BGM: [\n${formattedData}\n]\n   }`;
    });

    return rearrangedArray;
}

function formatInformation(information) {
    if (!information) {
        return '';
    }

    // Convert object properties to formatted string
    const formattedInfo = Object.entries(information)
        .map(([property, value]) => {
                return {
                    property: formatPropertyName(property),
                    value: value
                };
            
        })
        .map(info => {

                return `${info.property}: "${info.value}"`;
            
        })
        .join(',\n');

    return formattedInfo;
}


function formatPropertyName(name) {
    // Check if the name consists of two or more words
    if (name.includes('_')) {
        if (name.includes('prev_episode')) {
            return "prevCase";
        } else if (name.includes('next_episode')) {
            return "nextCase";
        }
        // Convert to camelCase
        return name.toLowerCase().replace(/_(.)/g, (match, group1) => group1.toUpperCase());
    } else if (name.includes('prev_episode')) {
        return "prevCase:";
    } else if (name.includes('next_episode')) {
        return "nextCase";
    } {
        return name;
    }
}

function formatLanguages(languagesArray) {
    if (!languagesArray || languagesArray.length === 0) {
        return '';
    }

    return languagesArray.map(language => `["${language.join('", "')}"]`).join(',\n');
}

const mergedArray = mergeArrays(episodes, episodesData);
console.log(mergedArray);

var resultDiv = document.createElement("div");
resultDiv.id = "mergedarray";

// Join the array items and add commas
resultDiv.innerText = mergedArray.join(',');

document.body.appendChild(resultDiv);
