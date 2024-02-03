// mergeArrays.js
import episodes from './anime-episodes.js';
import episodesData from './episodes-data.js';

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

    // Create a new array with the desired order (id, title, data)
    const rearrangedArray = episodesData.map(item => {
        const formattedData = item.data.map(row => `["${row.join('", "')}"]`).join(',\n');
        return `{ id: "${item.id}", episode: "${item.id}", title: "${item.title}", BGM: [\n${formattedData}\n] }`;
    });

    return rearrangedArray;
}

const mergedArray = mergeArrays(episodes, episodesData);
console.log(mergedArray);

var resultDiv = document.getElementById("mergedarray");

// Join the array items and add commas
resultDiv.innerText = mergedArray.join(',\n');

document.body.appendChild(resultDiv);

const button = document.querySelector("button");

button.addEventListener("click", function copyToClipboard() {
    var outputElement = document.getElementById("mergedarray");
    var range = document.createRange();
    range.selectNode(outputElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}) 