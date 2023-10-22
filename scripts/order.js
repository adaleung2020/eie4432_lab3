function calculatePrice(){
    var size = document.querySelector('input[name="size"]:checked').value;
    var drink = document.getElementById("drink").value;
    let price = 0;

    if(drink === "Bubble Milktea"){
        if(size === "small"){
            price += 30;
        }else if(size === "medium"){
            price += 35;
        }else if(size === "large"){
            price += 40;
        }
    }else if(drink === "Iced Latte"){
        if(size === "small"){
            price += 30;
        }else if(size === "medium"){
            price += 35;
        }else if(size === "large"){
            price += 40;
        }
    }else if(drink === "Caramel Macchiato"){
        if(size === "small"){
            price += 30;
        }else if(size === "medium"){
            price += 35;
        }else if(size === "large"){
            price += 40;
        }

    }else if(drink ==="Please Select"){
        alert("Please select a drink.");
        location.reload();
    }
    

    document.getElementById("price").textContent=price;

}

$(document).ready(function() {
    $("body").on("change", "#drink", function() {
      if ($("#drink").val() === "Please Select") {
        $(this).removeClass("valid")
               .addClass("invalid");
      }
      if ($(this).val() !== "Please Select") {
        $(this).addClass("valid")
               .removeClass("invalid");
      }
    });
  });

  $(document).ready(function(){
    $("#drink").change(function(){
        $("#visibleimg").removeClass("d-none");
        if($("#drink").val() ==="Bubble Milktea"){
            $("#image").attr({src: "assets/bubble-milktea.png", alt: "Bubble Milktea"});
        }else if($("#drink").val() === "Iced Latte"){
            $("#image").attr({src: "assets/iced-latte.jpg", alt: "Iced Latte"});
        }if($("#drink").val() === "Caramel Macchiato"){
            $("#image").attr({src: "assets/caramel-macchiato.jpg", alt: "Caramel Macchiato"});
        }if ($("#drink").val() === "Please Select") {
            $("#visibleimg").addClass("d-none");
        }
    });
});

function validateForm(){
    var name = document.getElementById("name").value.trim();
    var drink = document.getElementById("drink").value;
    var size = document.querySelector('input[name="size"]:checked');
    var ice = document.querySelector('input[name="ice"]:checked');
    var sweetness = document.querySelector('input[name="sweetness"]:checked');

    if(name === ""){
        alert("Please enter your name.");
        return false;
    }
    if(drink === "Please Select"){
        alert("Please select a drink.");
        return false;
    }
    if(size == null){
        alert("Please select a size.");
        return false;
    }
    if(ice == null){
        alert("Please select an ice preference.");
        return false;
    }
    if(sweetness == null){
        alert("Please select a sweetness level.");
        return false;
    }
        return true;
}

function placeOrder(event){

    event.preventDefault();

    if(validateForm()){
        var name = document.getElementById("name").value.trim();
        var drink = document.getElementById("drink").value;
        var size = document.querySelector('input[name="size"]:checked').value;
        var ice = document.querySelector('input[name="ice"]:checked').value;
        var sweetness = document.querySelector('input[name="sweetness"]:checked').value;
        var orderData = [name, drink, size, ice, sweetness];

        localStorage.setItem("orders", orderData);
        $("#placeSuccess").html("<div>Order placed successfully!Thank you for your order.</div>");
        $("#placeSuccess > div").addClass("alert alert-success").fadeIn(500);
        $("#placeSuccess > div").delay(3000);
        $("#placeSuccess > div").fadeOut(500,function(){
            $("#placeSuccess").remove();
            location.reload();
        });
    }
}

