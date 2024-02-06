const parseBtn = document.getElementById("parse");


parseBtn.addEventListener("click", function filterHTML() {
    var episodeId = document.getElementById("episodeId").value;
    var htmlCode = document.getElementById("htmlCode").value;
    var fillerCheckbox = document.getElementById("fillerCheckbox");
    // Create a temporary div element to parse the HTML code
    var tempDiv = document.getElementById("output");
    tempDiv.innerHTML = htmlCode;

    // Find all tr elements inside the temporary div
    var trElements = tempDiv.querySelectorAll('tr');

    // Initialize the filtered data structure
    var filteredData = {
        id: episodeId,
        isFiller: fillerCheckbox.checked,
        bgm: []
    };

    // Loop through each tr element
    for (var i = 0; i < trElements.length; i++) {
        var tdElements = trElements[i].querySelectorAll('td');

        // If the tr element has td elements, proceed with filtering
        if (tdElements.length > 0) {
            // Replace numbers with "00:00" for the timestamp
            var timestamp = tdElements[0].innerText.trim();
            timestamp = /^\d+$/.test(timestamp) ? "00:00" : timestamp;
            var jpnTitle = tdElements[1].innerText.trim();
            var rmjTitle = tdElements[2].innerText.trim();
            var enTitle = tdElements[3].innerText.trim();
            var ost = tdElements[4].innerText.trim();

            // Add the filtered data to the result
            filteredData.bgm.push([timestamp, jpnTitle, rmjTitle, enTitle, ost]);
        }
    }

    // Display the filtered data without quotes around id and data
    // Format each row in one line
    var formattedOutput = `{\n  id: "${episodeId}",\n isFiller: ${fillerCheckbox.checked},\n bgm: [\n`;
    for (var j = 0; j < filteredData.data.length; j++) {
        formattedOutput += `    ["${filteredData.bgm[j].join('", "')}"],\n`;
    }
    formattedOutput += '  ]\n},';

    document.getElementById("output").innerText = formattedOutput;

})

const extractBtn = document.getElementById("extract");

extractBtn.addEventListener("click", function extractTextContent() {
    var paragraphInput = document.getElementById("paragraphInput").value;

    // Create a temporary div element to parse the HTML code
    var tempDiv = document.createElement("div");
    tempDiv.innerHTML = paragraphInput;

    // Extract text content from the <p> element
    var textContent = tempDiv.querySelector('p').textContent.trim();

    // Display the extracted text content
    var formattedOutput = `situation: "${textContent}",`;

    document.getElementById("output").innerText = formattedOutput;
});











parseBtn.addEventListener("click", function filterHTML() {
    var table = document.querySelector('.infobox'); // Assuming the table has a unique class 'infobox'
    var rows = table.querySelectorAll('tr');

    var jsonData = {}; // Object to store the extracted data

    // Loop through each row in the table
    rows.forEach(function (row) {
        var cells = row.querySelectorAll('th, td'); // Select both header and data cells

        // Extract header and data information
        var header = cells[0].textContent.trim();
        var data = cells[1].textContent.trim();

        // Add the information to the JSON object
        jsonData[header] = data;
    });

    // Display the extracted JSON data
    var formattedOutput = JSON.stringify(jsonData, null, 2);
    document.getElementById("output").innerText = formattedOutput;
});







const copyBtn = document.querySelector(".copy");

copyBtn.addEventListener("click", function copyToClipboard() {
    var outputElement = document.getElementById("output");
    var range = document.createRange();
    range.selectNode(outputElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
})
































