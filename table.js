fetch('http://127.0.0.1:5500/table.json').then(
    res=>{
        res.json().then(
            data=>{
                console.log(data[0]);
                console.log(data[1]);
                console.log(data[2]);
                            

                
            }
        )
    }
)

// get the div that will hold the table
fucntion getTableElement(){
    var tableBody = document.getElementsByClassName("table-body")
    return tableBody
}

function generateRow(data){
    // We create an empty row
    var rowContainer = document.createElement("tr")
    // TODO: This needs to be changed to fit the incoming data layout but the internals are relativly
    // the same
    for(item in data){
        // Create new row data element
        let rowData = document.createElement("td")
        // set that elements text to the appropriate item
        rowData.innerHTML = item
        // add that data to the row
        rowContainer.appendChild(rowData)
    }
}