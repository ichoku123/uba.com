function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


var MainBalance = document.getElementById("MainB");
var Send = document.getElementById("send");
var account = document.getElementById("Account");
var bankSelect = document.getElementById("bank");
var reg = /^[0-9]+$/;

//function seperateComma(){
//     MainBalance.value = numberWithCommas(MainBalance.value);
//     
//}
//seperateComma();

function PerformOperation(){
    console.log(Send.value);
    console.log(MainBalance.value);
    
    var subtract = (MainBalance.value-Send.value);
    
    MainBalance.value = (subtract);
    document.getElementById("Notification-msg").innerHTML= " you have successfully transferred NGN" + (Send.value) + " to This acoount  " + account.value + " " + bankSelect.value + "Bank";
    if(account.value.match(reg) && Send.value !== ""){
        document.getElementById("Button").setAttribute("data-mdb-toggle", "modal");
        document.getElementById("Button").setAttribute("data-mdb-target", "#exampleModal");
    }else{
        alert("check your inputs well")
        document.getElementById("Button").removeAttribute("data-mdb-toggle");
        document.getElementById("Button").removeAttribute("data-mdb-target");
       
        
    }
    
    
}

function onKeyup(){
    if(account.value.match(reg)){
        document.getElementById("Button").setAttribute("data-mdb-toggle", "modal");
        document.getElementById("Button").setAttribute("data-mdb-target", "#exampleModal");
        document.getElementById("display-msg").style.display = "block";
        document.getElementById("display-msg").innerHTML = "valid";
        document.getElementById("display-msg").style.color = "green";
    }else{
        //alert("check your inputs well")
        document.getElementById("display-msg").style.display = "block";
        document.getElementById("display-msg").innerHTML = "invalid acount";
        document.getElementById("display-msg").style.color = "red";
        document.getElementById("Button").removeAttribute("data-mdb-toggle");
        document.getElementById("Button").removeAttribute("data-mdb-target");
        
    }
    
}
function onKeyupSecond(){
    if(Send.value !== "" && Send.value.match(reg)){
        document.getElementById("Button").setAttribute("data-mdb-toggle", "modal");
        document.getElementById("Button").setAttribute("data-mdb-target", "#exampleModal");
        document.getElementById("display-msgTwo").style.display = "none";

    }else{
        //alert("check your inputs well")
        document.getElementById("display-msgTwo").style.display = "block";
        document.getElementById("display-msgTwo").innerHTML = "invalid, enter a correct amount";
        document.getElementById("display-msgTwo").style.color = "red";
        document.getElementById("Button").removeAttribute("data-mdb-toggle");
        document.getElementById("Button").removeAttribute("data-mdb-target");
        
    }
    
}

function onMouseEnter(){
    if(bankSelect.value === "select a bank"){
        alert("Please select a bank");
    }
}

function windowReload(){
     Send.value = "";
     account.value = "";
     bankSelect.value === "select a bank";
    document.getElementById("display-msg").innerHTML = "";
    document.getElementById("Button").removeAttribute("data-mdb-toggle");
        document.getElementById("Button").removeAttribute("data-mdb-target");
}