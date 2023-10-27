function Warn(str) {
	alert (str+" Field cannot be empty!");
	
 }

function validateForm(){
 var name = document.getElementsById("name").value;
 var email = document.getElementById("email").value;
 var password = document.getElementById("pass").value;
 var mobile = document.getElementById("mob").value;

 console.log(name);
 // Regular expressions for email and password validation
 var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
 const nameRegex = /^[A-Za-z]{6,}$/;

 var errors = [];

 if(nameRegex.test(name)!=true){
	 alert("name field error")
	 return false;
 }

 if(email !="" || email!=null){
	 if(emailRegex.test(email)!=true){
	 errors.push("invalid email address");
	 alert("enter email")
	 return false;
	 }
 }

 if(password=='' || password==null){
	 alert("enter password")
	 return false;
 }else if(password.length<6){
	 alert("password is short");
	 return false;
 }

 if(mobile=="" || mobile==null){
	 alert("enter mobile no.")
	 errors.push("enter mobile no..");
	 return false;
 }else if(mobile.length<10 || mobile.length>10){
	 alert("invalid mob no");
	 return false;

 }

 return true;
}

function reset(){
 document.getElementById("name").value = "";
 document.getElementById("email").value = "";
 document.getElementById("password").value = "";
 document.getElementById("mob").value = "";


}