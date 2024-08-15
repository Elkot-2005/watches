var allproducts = document.querySelectorAll(".list button");
var div1 = document.querySelector("#div1");
var div2 = document.querySelector("#div2");
var cardText = document.querySelector(".card-text");
var btn1 = document.querySelector(".btn-show");
var btn2 = document.querySelector(".btn-reset");
var overLay = document.querySelector(".overlay");
var countCart = document.querySelector(".countCart");
var totalprice = 0;
var x = 0;

allproducts.forEach(function(item) {
    item.onclick = function() {
        x++;
        countCart.textContent = x;
        totalprice += parseInt(item.getAttribute("price"));
        
        div1.innerHTML += `
            <div class="d-flex justify-content-between align-content-center">
                <img src="./images/${item.title}.jpg" class="rounded" height="51px" width="40px">
                <span style="color: #000; font-weight:bold;">${item.name}</span>
                <p style="color: #a61e22; font-weight:bold;">${item.value}</p>
            </div>`;
        
        if (div1.innerHTML != "") {
            btn1.style.display = "block";
            btn2.style.display = "block";
        }
    };
});

btn1.onclick = function() {
    div2.innerHTML = totalprice;
};

btn2.onclick = function() {
    totalprice = 0;
    div1.innerHTML = "";
    div2.innerHTML = totalprice;
};

var cart = document.querySelector(".cart");
var icon = document.querySelector(".shop");
var wishIcon = document.querySelector(".wish");

icon.onclick = function() {
    cart.style.display = "block";
    overLay.style.opacity = "0.35";
};

var closeBtn = document.querySelector(".btn-close");
closeBtn.onclick = function() {
    cart.style.display = "none";
    overLay.style.opacity = "1";
};
