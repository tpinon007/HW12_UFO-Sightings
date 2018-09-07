// from data.js
var tableData = data;

//Inspect ufo data from data.js on the console
console.log(data);

// Use D3 to select the table body
var tbody = d3.select("tbody");

var tHeadRow = table.append('tr');
var tBody = table.append('tbody');
var tHead = table.append('thead');

var inputDateTime = d3.select("#datetime");
var btnFilter=d3.select('#filter-btn');

// Create event listeners
//Activate load event 

//window.addEventListener("load", () => {createTable(tableData)});

d3.select("btnFilter").on("click", function (event){
//function handleClick(){
    // Prevent the page from refreshing
    d3.event.preventDefault();
    }) 
    
    var inputDateTime = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");
    var inputComments = d3.select("#comments");
   
    var table = renderTable(inputDateTime, inputCity, inputState, inputCountry, inputShape, inputComments, filters);

function renderTable(){
    if (!tbody.empty()){
        tbody.html('')
    }
}

//Create table
function createTable(input){
    var tbody = d3.select("tbody");
    var counter = 0;
   
    for (let j=0; j<111; j++){
        tBodyRow=tbody.append('tr');
        for (let k=0; k<110; k++){
            tBodyRow.append('td').html(selected[counter]);
            counter++;
        }
    }

}
