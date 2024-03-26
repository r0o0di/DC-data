// mergeArrays.js
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
        }
    });

    // Create a new array with the desired order (id, episode, title, isFiller, BGM)
    const rearrangedArray = episodesData.map(item => {
        const formattedData = item.BGM.map(row => `["${row.join('", "')}"]`).join(',\n');
        return `{ id: "${item.id}", number: "${item.id}", title: "${item.title}", isFiller: ${item.isFiller}, 
            description: "${item.episodeDescription}", 
            information: [\n${formatInformation(item.information)}],
            BGM: [\n${formattedData}\n] }`;
    });

    return rearrangedArray;
}

function formatInformation(information) {
    if (!information || information.length === 0) {
        return '';
    }

    return information.map(info => {
        const [property, value] = Object.entries(info)[0];
        return `{ ${property}: "${value}" }`;
    }).join(',\n');
}

const mergedArray = mergeArrays(episodes, episodesData);
console.log(mergedArray);

var resultDiv = document.createElement("div");
resultDiv.id = "mergedarray";

// Join the array items and add commas
resultDiv.innerText = mergedArray.join(',\n');

document.body.appendChild(resultDiv);


