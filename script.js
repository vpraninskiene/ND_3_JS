var inputName = document.getElementById("inputName")
var inputSName = document.getElementById("inputSName")
var inputAge = document.getElementById("inputAge")
var addelement = document.getElementById("addelement")
var delfirst = document.getElementById("delfirst")
var dellast = document.getElementById("dellast")


addelement.addEventListener("click", function(){

    if(inputName.value, inputSName.value, inputAge.value ){
        var tr = document.createElement("tr")
        var td1 = tr.appendChild(document.createElement('td'));
        var td2 = tr.appendChild(document.createElement('td'));
        var td3 = tr.appendChild(document.createElement('td'));
        td1.innerText = inputName.value
        td1.classList.add("tdstyle")
        inputName.value = ""
        td2.innerText = inputSName.value
        td2.classList.add("tdstyle")
        inputSName.value = ""
        td3.innerText = inputAge.value
        td3.classList.add("tdstyle")
        inputAge.value = ""
        document.getElementById("result").appendChild(tr);       
    } else {
             alert("Įveskite duomenys")
            }
})


dellast.addEventListener("click", function(){ 
    var tdl = document.getElementsByTagName("tr")
    if(tdl.length){
        tdl[tdl.length - 1].remove()        
    }else {
        alert("Nebėra ką trinti")
    }
})


delfirst.addEventListener("click", function(){
    var tdf = document.getElementsByTagName("tr")
    if(tdf.length){
        tdf[0].remove()
    }else {
        alert("Nebėra ką trinti")
    }
})