$(document).ready(function(){

    $("#create-grid").on("click", function makeGrid() {

        let gridHeight = $("#input-rows").val();
        let gridWidth = $("#input-columns").val();
        let table = "<table id='table'>";

        for (let r = 0; r < gridHeight; r ++) {
            table += "<tr class='tr'>";
            for (let c = 0; c < gridWidth; c++) {
                table += ("<td class='td'></td>")
            }
            table += "</tr>";
        }
        table += "</table>";
        console.log(table);
        $(".grid-controls").append(table);
    });

    $("div.grid-controls").on("click", ".td", function colorCell() {

        //select picked color and store it
        let color = $("#color-scheme").val();

        // fill only clicked cell with selected color
        $(this).css("background-color", color);
    });

    $("div.grid-controls").on("mouseover", ".td", function() {
        $(this).css("background-color", "");
    });

    $("#reset-grid").on("click", function(){
        $("table").children().remove();
    });
});