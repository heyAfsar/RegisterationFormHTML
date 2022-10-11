
document.getElementById('submit').addEventListener('click', function() {
  
let name = document.getElementById("name");
let dob = document.getElementById("dob");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let city = document.getElementById("city");
let institute = document.getElementById("institute");
var gen = document.getElementsByName("gender");
var qual = document.getElementsByName("c");



    if (name.value == 0) {
      window.alert("please enter your name");
      return false;
    }
    else if(dob.value == 0) {
        window.alert("please enter your date of birth");
        return false;
      }
    else if(phone.value == 0) {
        window.alert("please enter your contact number");
        return false;
      }
    else if(email.value == 0) {
        window.alert("please enter your emaili");
        return false;
      }
    else{
    
 
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
        "name":name.value,
        "dob":dob.value,
        "email":email.value,
        "phone":phone.value,
        "city":city.value,
        "institute":institute.value,
        "qualification":qualification,
        "gender":gender
      });


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
    }

      window.location.href="/success.html";

      (function(){
        let fields = document.getElementsByTagName("input");
        for(let i =0;i<fields.length;i++){
            fields[i].value="";
        }
      })();
}); 


