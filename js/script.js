// JavaScript Document

function changeImage( imgName ){
	
var curImage = document.getElementById('currentImg');
var path = "../assets/images/desktop/";
var source = path + imgName;

curImage.src = source;

}

function validateForm() {
	var fname = document.getElementById("fname").value; // value from the First name box
	var lname = document.getElementById("lname").value; // value from the Last name box
	var email = document.getElementById("email").value; // value from the Email box
	var confirmEmail = document.getElementById("confirmEmail").value; // value from the confirm email box
	var telephone = document.getElementById("telephone").value; // value from the telephone box
	var enquiry = document.getElementById("enquiry").value; // value from the enquiry box
	var at = email.indexOf("@"); // to find the position of @ sign in email.
	var dot = email.lastIndexOf("."); // to find the position of the last dot in email
	
	if (fname == "") { // if the name box is empty
		alert("You must enter your first name"); // Show an alert to the user
		document.getElementById("fname").focus(); // Bring the focus back to the box where the mistake was found
		changeGrey(this.fname); // Change the colour of the box to grey
		return false; // Stop form submit by returning false command
	} 

	if (lname == "") { // same as above with Last name
		alert(fname + ", you forgot to enter your last name"); 
		document.getElementById("lname").focus(); 
		changeGrey(this.lname); 
		return false; 
	} 

	if (email == "") { // same goes for email box
		alert(fname + ", please give us your email address");
		document.getElementById("email").focus();
		changeGrey(this.email);
		return false;
		}
		else if (at < 1 || (dot - at < 2)) { // Also if there is not at least one character before the @, or between the @ and the .
		alert(fname + ", the email address you provided is not valid");// Show an alert to the user
		document.getElementById("email").focus();// Bring the focus back to the box where the mistake was found
		changeGrey(this.email);// Change the colour of the box to grey
		return false;// Stop form submit by returning false command
		}
		
		else if (email != confirmEmail) { // Also if email does not match the email confirmation
		alert(fname + ", the email addresses you entered do not match");
		document.getElementById("confirmEmail").focus();
		changeGrey(this.confirmEmail);
		return false;
	}
	
	if (telephone == "") { // If telephone is empty...
		alert(fname + ", you forgot to provide us with your telephone number");
		document.getElementById("telephone").focus();
		changeGrey(this.telephone);
		return false;
		} 
		
		else if (isNaN(telephone)){ //Also if it is not a number...
		alert("You should only use numbers in the field 'telephone number'");
		document.getElementById("telephone").focus();
		changeGrey(this.telephone);
		return false;
		} 
		
		else if (telephone.length < 10){ //Also if the telephone number contains less than 11 characters...
		alert(fname + ", the telephone number provided is too short");
		document.getElementById("telephone").focus();
		changeGrey(this.telephone);	
		return false;
		}
	
	if (enquiry == "") { //If the field enquiry is empty...
		alert(fname + ", You forgot to fill up the 'enquiry' field");
		document.getElementById("enquiry").focus();
		changeGrey(this.enquiry);
		return false;
	}
	
} // end of validation function


function changeNormal(id) { //This function will bring the normal colours to the boxes after pressing a key
	id.style.background = "white";
	id.style.color= "black";
}

function changeGrey(id) { //This function will change the colours of the boxes when entering wrong data into them.
	id.style.backgroundColor = "#cccccc";
	id.style.color = "white";
}


