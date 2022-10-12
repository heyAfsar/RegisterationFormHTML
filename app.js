const requiredElements = document.getElementsByClassName("isRequired");
const formClass = document.getElementsByClassName("form-control");
that = this;

function isFormEmpty(){
  for (let i = 0; i < requiredElements.length; i++) {
    if(requiredElements[i].value == ""){
      requiredElements[i].classList.add("ValidationError");
      requiredElements[i].classList.remove("ValidationSuccess");
    }else{
      requiredElements[i].classList.remove("ValidationError");
      requiredElements[i].classList.add("ValidationSuccess");
    }
    
  }
}

document.getElementById('submit').addEventListener('click', function(e) {

that.isFormEmpty();
let username = document.getElementById("name");
let dob = document.getElementById("dob");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let city = document.getElementById("city");
let institute = document.getElementById("institute");
var gen = document.getElementsByName("gender");
var qual = document.getElementsByName("c");
const form = document.getElementById("form");


  for(let i = 0; i<formClass.length;i++){
    // var span = that.getElementByXpath('//*[contains(@class,"form-control")]/span[text()]')
    // var input = that.getElementByXpath('//*[contains(@class,"form-control")]/input')
    var span = document.querySelector('div'); 
    span.classList.contains('form-control')
    debugger;
    var input = that.getElementByXpath('//*[contains(@class,"form-control")]/input')
    var message = span.textContent;
    if(input.classList.contains("ValidationError")){
      alert(`Please Enter A Valid ${message}`);
      return;
    }
  }
 
    for(let i = 0; i<gen.length; i++){
        if(gen[i].checked){
            var gender  = gen[i].value;
            
        }
    }
    for(let i = 0; i<qual.length; i++){
        if(qual[i].checked){
            var qualification  = qual[i].value;
        }
    }
    
    const data = JSON.stringify({
        "name":username.value,
        "dob":dob.value,
        "email":email.value,
        "phone":phone.value,
        "city":city.value,
        "institute":institute.value,
        "qualification":qualification,
        "gender":gender
      });

return;
      fetch('https://registration-eta.vercel.app/register',{
        method: 'post',
        body:data,
        headers: {
            'Content-Type':'application/json'
        }
      }).then(function(response) {
        return response.text;
      }).then(function(text) {
        console.log(text);
      }).catch(function(error) {
        console.log(error);
      });
    // }

      window.location.href="/success.html";

      (function(){
        let fields = document.getElementsByTagName("input");
        for(let i =0;i<fields.length;i++){
            fields[i].value="";
        }
      })();
})

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function validate(oEvent){
  var helper = {
   "name": function(){
    return new RegExp(/^([A-Za-z]+\s)*[a-zA-Z]+$/);
   },
   "phone": function(){
    return new RegExp(/^[+0-9]*[0-9]+$/);
   }
  };
  
  // var element = document.getElementById(id),validation;
  var element = oEvent.target;
  if(!element.value.match(helper[element.id]())){
    element.classList.add("ValidationError");
    element.classList.remove("ValidationSuccess");
  }else{
    element.classList.remove("ValidationError");
    element.classList.add("ValidationSuccess");
  }
}