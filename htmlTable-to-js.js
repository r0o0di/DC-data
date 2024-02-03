const parseBtn = document.getElementById("parse");


parseBtn.addEventListener("click", function filterHTML() {
    var episodeId = document.getElementById("episodeId").value;
    var htmlCode = document.getElementById("htmlCode").value;

    // Create a temporary div element to parse the HTML code
    var tempDiv = document.getElementById("output");
    tempDiv.innerHTML = htmlCode;

    // Find all tr elements inside the temporary div
    var trElements = tempDiv.querySelectorAll('tr');

    // Initialize the filtered data structure
    var filteredData = {
        id: episodeId,
        data: []
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
            filteredData.data.push([timestamp, jpnTitle, rmjTitle, enTitle, ost]);
        }
    }

    // Display the filtered data without quotes around id and data
    // Format each row in one line
    var formattedOutput = `{\n  id: "${episodeId}",\n  data: [\n`;
    for (var j = 0; j < filteredData.data.length; j++) {
        formattedOutput += `    ["${filteredData.data[j].join('", "')}"],\n`;
    }
    formattedOutput += '  ]\n},';

    document.getElementById("output").innerText = formattedOutput;

})


const copyBtn = document.getElementById("copy");

copyBtn.addEventListener("click",  function copyToClipboard() {
    var outputElement = document.getElementById("output");
    var range = document.createRange();
    range.selectNode(outputElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}
 )