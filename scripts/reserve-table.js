$(document).ready(function(){
    var bookingStatus = JSON.parse(localStorage.getItem("bookedTable")) || [];
    var selectedTable = null;

    function selectmessage(tableId){
        var con = 
        `<button id="confirm" class="btn btn-primary" type="button">Confirm</button>
        `;
        var dis = 
        `<button id="dismiss" class="btn btn-secondary" type="reset">Dismiss</button>
        `;

        $("#text").html("You are selecting: Table " + tableId);
        $("#confirm").html(con);
        $("#dismiss").html(dis);

    }

    $("circle").click(function() {
        var tableId = $(this).attr("id");
        if (bookingStatus.includes(tableId)) {
          alert("This table is already booked.");
        } else {
            selectedTable = tableId;
            selectmessage(tableId);   
        }
      });

      $("#confirm").click(function() {
        bookingStatus.push(selectedTable);
        localStorage.setItem("bookedTable", JSON.stringify(bookingStatus));
        $("#" + selectedTable).addClass("booked");
        $("#text").html("Click a Table to book");
        $("#confirm").html("");
        $("#dismiss").html("");
      });

      $("#dismiss").click(function() {
        selectedTable = null;

        $("#text").html("Click a Table to book");
        $("#confirm").html("");
        $("#dismiss").html("");
      });
});