$(document).ready(function () {
    $.get("assets/drink-menu.json", function (data) {
        console.log(data);
    }).fail(function (error) {
        console.error("Failed to fetch")
    }); 
});

$.get("assets/drink-menu.json", function(data){
    data.forEach(function(drink){
        var cardHtml = `
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="card">
            <img src="${drink.image}" class="card-img-top" alt="${drink.name}">
            <div class="card-body">
              <h5 class="card-title">${drink.name}</h5>
              <p class="badge text-bg-success text-white">${drink.type}</p>
              <p class="card-text">${drink.price}</p>
            </div>
          </div>
        </div>
      `;
        $("#drink-menu").append(cardHtml);
    });
}).fail(function(error) {
    $("#drink-menu").text("Failed to fetch drink menu. Please try again later.");
});