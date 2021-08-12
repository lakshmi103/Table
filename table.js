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
function getTableBodyElement()
{
    var tableBody = document.getElementsByClassName("table-body")
    return tableBody
}
// Get the head container
function getTableHeadElement()
{
    var tableBody = document.getElementsByClassName("table-head")
    return tableBody
}
// Get the table container
function getTableElement()
{
    var tableBody = document.getElementById("table")
    return tableBody
}

function generateCellData(element, row){
    console.log(element)
    // Create new row data element
    // set that elements text to the appropriate item
    cell = row.insertCell();
    cell.innerHTML = element
}

function generateHeader(data, table){
    // We create an empty row
    var header = table.createTHead();
    var row = header.insertRow();

    // TODO: This needs to be changed to fit the incoming data layout but the internals are relativly
    // the same
    data.forEach(element=> generateCellData(element, row))
}

function generateRow(data, table){
    // We create an empty row
    var row = table.insertRow();

    // TODO: This needs to be changed to fit the incoming data layout but the internals are relativly
    // the same
    data.forEach(element=> generateCellData(element, row))
}

function generateTable(row){
    let table = getTableElement();
    // build header
    if (first == 0){
        console.log(row)
        first = 1
        generateHeader(row, table)
    //get header from doc
    //add header to doc
    // header.appendChild(headerData);
    }
    // build rows
    else{
        generateRow(row, table)
    }

}