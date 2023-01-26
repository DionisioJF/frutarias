function addFruit() { 
    var fruitName = document.getElementById("fruit-name").value; 
    var fruitBag = document.getElementById("fruit-bag").value; 
    var fruitQuantity = document.getElementById("fruit-quantity").value; 
    
    var table = document.getElementById("fruit-table"); 
    var row = table.insertRow(-1); 
    
    var cell1 = row.insertCell(0); 
    var cell2 = row.insertCell(1); 
    var cell3 = row.insertCell(2); 
    
    cell1.innerHTML = fruitName; 
    cell2.innerHTML = fruitBag; 
    cell3.innerHTML = fruitQuantity; 
    }

    var selectedCell;

function selectCell(cell) {
  if (selectedCell) {
    selectedCell.classList.remove("selected");
  }
  selectedCell = cell;
  cell.classList.add("selected");
}

function removeFruit(event) {
    event.stopPropagation();
    if (!selectedCell) {
      return;
    }
    var table = document.getElementById("fruit-table");
    table.deleteRow(selectedCell.parentNode.rowIndex);
    selectedCell = null;
  }

  
  function updateFruit(event, row) {
    event.stopPropagation();
    var newValue = prompt("Digite o novo valor:");
    selectedCell.innerHTML = newValue;
  }


var table = document.getElementById("fruit-table");
table.onclick = function(event) {
  var target = event.target;
  while (target != this) {
    if (target.tagName == 'TD' && target.cellIndex != 3 && target.cellIndex != 4) {
      selectCell(target);
      return;
    }
    target = target.parentNode;
  }
}
