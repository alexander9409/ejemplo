// Add your javascript here


//Empty
function empty(){
    var isEmpty = false,
    insertD = document.getElementById("insertD").value;
    
    if (insertD === ""){
        alert("Write some data");
        isEmpty=true;
    }
    
    return isEmpty;
}


//New row

function addHTMLTableRow(){
    
    if(!empty()){
           var table = document.getElementById("table"),
        newRow = table.insertRow(table.length),
        cell1=newRow.insertCell(0),
        insertD = document.getElementById("insertD").value;
    
        cell1.innerHTML = insertD;
        
        document.getElementById("insertD").value='';
    }
    

    
}