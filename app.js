
document.getElementById('submit').addEventListener('click', function() {
let name = document.getElementById("name").value;
let dob = document.getElementById("dob").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let city = document.getElementById("city").value;
let institute = document.getElementById("institute").value;
var gen = document.getElementsByName("gender");
var qual = document.getElementsByName("c");

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
        "name":name,
        "dob":dob,
        "email":email,
        "phone":phone,
        "city":city,
        "institute":institute,
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
}); 

