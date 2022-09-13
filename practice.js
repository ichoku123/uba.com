
/*
function tring() {
    var a = "3";
    var b = "8";
    var c = a;
    a = b;
    b=c;
    alert("a is : " + a);
    alert("b is: " + b);
}
tring();

var User_text = prompt("your text shouldn't be more than 140 characters");
document.write(User_text);
var store = document.write("you have written :" + User_text.length + "Characters" + "you have" +(140-User_text.length)+"characters left" );
*/
function Tweet() {
    var Get = document.getElementById("tweet").value.slice(0,10);
    var Getj = document.getElementById("text");
    Getj.innerText= ("you have written " + Get.length + " Characters" + " you have " + ( 140-Get.length)+" characters left");
    document.body.appendChild(Getj);
    

    console.log("you have written " + Get.length + "Characters" + " you have" + ( 140-Get.length)+" characters left")    


}

