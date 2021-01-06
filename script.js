var input=document.getElementById("input");
var btn= document.getElementById("translate");
var output= document.getElementById("output");
btn.addEventListener("click",translate)
function errorHandler(error)
{
    if(error)
    {
        console.log("Some error occcured "+error)
    alert(error)
    } 
}
function translate()
{
    var text=input.value;
    var url= "https://api.funtranslations.com/translate/pirate.json"+"?text="+text;
    fetch(url)
    .then(
        function response(response)
        {
            return response.json();
        }
    )
    .then(
        function logJson(JSON)
        {
            output.innerText=JSON.contents.translated
        }
    ).catch(errorHandler())
}
    