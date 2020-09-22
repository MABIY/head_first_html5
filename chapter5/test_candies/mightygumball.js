window.onload =function(){
    // var url = "http://127.0.0.1:5500/chapter5/test_candies/index.html";
    // var request = new XMLHttpRequest();
    // request.onload = function(){
        // if(request.status = 200){
            // updateSales(request.responseText);
        // }
    // }
    // request.open("GET",url);
    // request.send(null);
}

function animalSays(animal){
    alert(animal.type + " says " + animal.sound);
}
function  updateSales(sales){
    var salesDiv = document.getElementById("sales");
    for (let i = 0; i < sales.length; i++) {
        var sale = sales[i];
        var div = document.createElement("div");
        div.setAttribute("class","saleItem");
        div.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
        salesDiv.appendChild(div);
    }
}