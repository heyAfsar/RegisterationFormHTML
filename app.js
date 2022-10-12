const requiredElements = document.getElementsByClassName("isRequired");
const formClass = document.getElementsByClassName("form-control");
that = this;

function isFormEmpty(){
  var err = false;
  for (let i = 0; i < requiredElements.length; i++) {
    if(requiredElements[i].value == ""){
      err=true;
      requiredElements[i].classList.add("ValidationError");
      requiredElements[i].classList.remove("ValidationSuccess");
    }else{
      requiredElements[i].classList.remove("ValidationError");
      requiredElements[i].classList.add("ValidationSuccess");
    }
  }

  return err;
}

document.getElementById('submit').addEventListener('click', function(e) {

var err = that.isFormEmpty();
if(err){
  alert("Please Enter The Required Data");
  return;
}
let username = document.getElementById("name");
let dob = document.getElementById("dob");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let city = document.getElementById("city");
let institute = document.getElementById("institute");
var qual = document.getElementsByName("c");

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
      });


      // fetch('http://localhost:9000/register',{
      fetch('https://registration-eta.vercel.app/register',{
        method: 'post',
        body:data,
        headers: {
            'Content-Type':'application/json'
        }
      }).then(function(response) {
        window.location.href="/success.html";
        // window.location.href="/success.html";
        (function(){
          let fields = document.getElementsByTagName("input");
          for(let i =0;i<fields.length;i++){
              fields[i].value="";
          }
        })();
        var button = document.getElementById("submit")
        button.value = "Update Response";

        // return response.text;

      }).then(function(text) {
        console.log(text);
      }).catch(function(error) {
        console.log(error);
      });
    // }

     
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
    return new RegExp(/((((\+)?91){1})*(0{1})?)?[9876]{1}[0-9]{9}/);
   },
   "email": function(){
    return new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
   },
   "institute": function(){
    return new RegExp(/^([A-Za-z]+\s)*[a-zA-Z]+$/);
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