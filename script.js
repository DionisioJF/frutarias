function addFruit() {
  var fruitName = $("#fruit-name").val();
  var fruitBag = $("#fruit-bag").val();
  var fruitQuantity = $("#fruit-quantity").val();
  
  var table = $("#fruit-table");
  var row = $("<tr>");
  
  var cell1 = $("<td>").html(fruitName);
  var cell2 = $("<td>").html(fruitBag);
  var cell3 = $("<td>").html(fruitQuantity);
  
  row.append(cell1, cell2, cell3);
  table.append(row);
  }
  
  var selectedCell;
  
  function selectCell(cell) {
  if (selectedCell) {
  $(selectedCell).removeClass("selected");
  }
  selectedCell = cell;
  $(cell).addClass("selected");
  }
  
  function removeFruit(event) {
  event.stopPropagation();
  if (!selectedCell) {
  return;
  }
  var table = $("#fruit-table");
  $(selectedCell).closest("tr").remove();
  selectedCell = null;
  }
  
  function updateFruit(event, row) {
  event.stopPropagation();
  var newValue = prompt("Digite o novo valor:");
  $(selectedCell).html(newValue);
  }

  $(document).ready(function(){
    // Carregar tabela do arquivo JSON
    $.getJSON("fruit-table.json", function(data) {
    // Limpar tabela HTML existente
    $("#fruit-table tbody").empty();
    
      // Iterar sobre cada linha de dados e adicionar à tabela
      $.each(data, function(index, fruit) {
          // Adicionar linha à tabela
          addFruitToTable(fruit.name, fruit.quantity, fruit.bag);
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
    return data; }

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

      $(document).ready(function(){
        // Carregar tabela do arquivo JSON
        $.getJSON("fruit-table.json", function(data) {
          // Limpar tabela HTML existente
          $("#fruit-table tbody").empty();
          
          // Iterar sobre cada linha de dados e adicionar à tabela
          $.each(data, function(index, fruit) {
              // Adicionar linha à tabela
              addFruitToTable(fruit.name, fruit.quantity, fruit.bag);
          });
        });
      });

      function addFruitToTable(name, quantity, bag) {
        var table = $("#fruit-table");
        var row = $("<tr>");
      
        var cell1 = $("<td>").html(name);
        var cell2 = $("<td>").html(bag);
        var cell3 = $("<td>").html(quantity);
      
        row.append(cell1, cell2, cell3);
        table.append(row);
      }