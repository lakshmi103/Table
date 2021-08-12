var first = 0;

fetch('http://127.0.0.1:5500/table.json').then(

    res=>{
        res.json().then(
            data=>{
                console.log("fetching");
                let count = 0;
                data.forEach(element => generateTable(element));

            }
        )
    }
);


function printElement(element){
    console.log(element)
    return element
}

// get the div that will hold the table
function getTableElement()
{
    var tableBody = document.getElementsByClassName("table-body")
    return tableBody
}
// Get the head container
function getTableElement()
{
    var tableBody = document.getElementsByClassName("table-head")
    return tableBody
}

function generateRow(data){
    // We create an empty row
    var rowContainer = document.createElement("tr")
    // TODO: This needs to be changed to fit the incoming data layout but the internals are relativly
    // the same
    for(item in data){
        console.log(item)
        // Create new row data element
        let rowData = document.createElement("td")
        // set that elements text to the appropriate item
        rowData.innerHTML = item
        // add that data to the row
        rowContainer.appendChild(rowData)
    }
    return rowContainer;
}

function generateHeader(data){
    // We create an empty row
    var rowContainer = document.createElement("tr")
    // TODO: This needs to be changed to fit the incoming data layout but the internals are relativly
    // the same
    for(item in data){
        console.log(item)
        // Create new row data element
        let rowData = document.createElement("th")
        // set that elements text to the appropriate item
        rowData.innerHTML = item
        // add that data to the row
        rowContainer.appendChild(rowData)
    }
}

function generateTable(row){
    // build header
    if (first == 0){
        console.log(row)
        first = 1
    }
    // build rows
    else{
        first = 13;
    }

}