let txtArea = document.querySelector("textarea");
let trButton = document.querySelector("#tButton");
let optxt = document.querySelector("#output");

let apiUrl = "https://api.funtranslations.com/translate/minion.json"

function getFetchUrl(input){
    return apiUrl + "?text=" + input 
}
function errorHandler(error){
    console.log("Error has Occured ! : "+ error);
    alert("Something went wrong with server!\nPlease try after some time");
}
trButton.addEventListener("click",function clickEventHandler(){
    let iptxt = txtArea.value
    // fetching API
    fetch(getFetchUrl(iptxt))
    .then(Response => Response.json())
    .then(json=>{
        let finaloutput = json.contents.translated;
        optxt.innerText = finaloutput;
    }).catch(errorHandler)
});
