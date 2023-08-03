 var btn = document.querySelectorAll("button");
//console.log(btn);
btn.forEach(function(button,index){
 
    button.addEventListener("click",function(event){{
    var btnItem = event.target;
    var product = btnItem.parentElement;
    var productImg = product.querySelector("img").src
     var productName = product.querySelector("a").innerText
    var productPrice = product.querySelector("span").innerText
     addcart(productPrice,productImg,productName)
    }});
});
function addcart(productPrice,productImg,productName) {
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll("name")
        if (productT[i].innerHTML==productName){
            alert("Sản phẩm của bạn đã có trong giỏ hàng")
            return
        }
    }
    var trcontent = '<tr><td style="display: flex;align-items: center;"><img style="width:70px" src="'+productImg+'" alt=""><name>'+productName+'</name></td><td><p><span>'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px;outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><xoa class="cart-delete">Xóa</xoa></td></tr> '
    addtr.innerHTML = trcontent
   var cartTable = document.querySelector("tbody")
   //console.log(cartTable);
   cartTable.append(addtr)
    carttotal()
     deleteCart()
}
//---------------------totalprice----------------------------
function carttotal (){
    var cartItem = document.querySelectorAll("tbody tr")
       var totalC = 0
//    console.log(cartItem);
for (var i=0;i<cartItem.length;i++){
        var inputValue =  cartItem[i].querySelector("input").value
//        console.log(inputValue);
        var productPrice = cartItem[i].querySelector("span").innerHTML
//        console.log(productPrice);
        totalA = inputValue*productPrice*1000
//        console.log(totalA);
 totalC = totalC + totalA
// console.log(totalC);
//totalD =totalC.toLocaleString('de-DE')
    }
    var cartTotalA = document.querySelector(".price-total span")   
    cartTotalA.innerHTML = totalC.toLocaleString("de-DE");
   
     inputchange ()
    }
//---------------------Deletet cart----------------------------
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".cart-delete")
//        console.log(productT);
productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartitemR = cartDelete.parentElement.parentElement
            cartitemR.remove()
            carttotal ()
            // console.log(cartitemR)
        })
      
    }
}
function inputchange () {
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal ()
        })
      
    }
}
      

    