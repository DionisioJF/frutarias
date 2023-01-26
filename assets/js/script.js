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

  $.getJSON("fruit-table.json", function(data) {
    // Atualize o conteúdo da tabela com os dados do JSON
});


fetch('./fruit-table.json')
  .then(response => response.json())
  .then(data => {
    // Obtém a tabela do HTML
    let table = document.getElementById('fruit-table');

    // Limpa a tabela antes de adicionar as novas linhas
    while (table.rows.length > 1) {
      table.deleteRow(1);
    }

    // Adiciona as linhas com os dados do JSON
    data.forEach(fruit => {
      let row = table.insertRow();
      let nameCell = row.insertCell();
      let bagCell = row.insertCell();
      let quantityCell = row.insertCell();

      nameCell.innerHTML = fruit.name;
      bagCell.innerHTML = fruit.bag;
      quantityCell.innerHTML = fruit.quantity;
    });
  });


  $(document).ready(function(){
    // Carregar tabela do arquivo JSON
    $.getJSON("fruit-table.json", function(data) {
        // Limpar tabela HTML existente
        $("#fruit-table tbody").empty();

        // Iterar sobre cada linha de dados e adicionar à tabela
        $.each(data, function(index, fruit) {
            // Adicionar linha à tabela
            addFruitToTable(fruit.name, fruit.quantity, fruit.price);
        });
    });
});


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

// Obtém os dados da tabela
function getTableData() {
  // Código para obter os dados da tabela, por exemplo, usando o jQuery para selecionar as células e percorrer as linhas
  var rows = $("table tr");
  var data = [];
  rows.each(function(i, row) {
      var cells = $(row).find("td");
      var rowData = [];
      cells.each(function(j, cell) {
          rowData.push($(cell).text());
      });
      data.push(rowData);
  });
  return data;
}

// Converte os dados da tabela para JSON e salva no arquivo
function saveTableData() {
  var data = getTableData();
  var jsonData = JSON.stringify(data);
  // Código para salvar o arquivo jsonData no repositório
  var file = new Blob([jsonData], {type: "application/json"});
  saveAs(file, "fruit-table.json");
}

$("#save").click(function(){
  // Get the current data in the table
  var tableData = getTableData();

  // Convert the data to a JSON string
  var jsonData = JSON.stringify(tableData);

  // Save the JSON data to a file
  saveJSONToFile(jsonData);

  // Commit and push the changes to the repository
  gitCommitAndPush();
});

function getTableData(){
  // Code to retrieve the data from the table
  // and store it in a variable
}

function saveJSONToFile(jsonData){
  // Code to save the JSON data to a file
}

function gitCommitAndPush(){
  // Code to commit and push the changes to the repository
  // using the git command line
}