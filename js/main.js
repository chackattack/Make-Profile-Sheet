//get users data
function getUserData(form) {
	//store all form data in an object
	var userProfile = {
		firstname 	: form.userfname.value,
		lastname 	: form.userlname.value,
		gender 		: form.usergender.value,
		email		: form.userEmail.value,
		phone		: form.userPhone.value,
		animal		: form.favAnimal.value,
		language	: form.userLang.value,
		note		: form.userNote.value
	}
	//call displayProfile function and pass through userProfile object
	displayProfile(userProfile)
}

function displayProfile(userProfile) {
	//make sure the user data is being passed through
	console.log(userProfile)


	//select some HTML elements by id 
	var userName 		= document.getElementById('userName'),
		userGender		= document.getElementById('userGender'),
		userEmail		= document.getElementById('userEmail'),
		userPhone		= document.getElementById('userPhone'),
		userAnimal		= document.getElementById('userAnimal'),
		userLanguage	= document.getElementById('userLanguage')
		userNote		= document.getElementById('userNote')

	//change text of the variables using the userProfile object
	userName.innerText		= "Hi" + userProfile.firstname + ' ' + userProfile.lastname
	userGender.innerText 	= "Gender: " + userProfile.gender
	userEmail.innerText		= "Email: " + userProfile.email
	userPhone.innerText		= "Phone: " + userProfile.phone
	userAnimal.innerText	= "Favorite Animal: " + userProfile.color
	userLanguage.innerText = "First Language: " + userProfile.language
	userNote.innerText		= "Notes: " + userProfile.note

	//hide new profile form until they click it
	document.getElementById('newProfile').style.display = "none"
	//document updated profile data
	document.getElementById('updatedProfile').style.display = "block"
}
//get the HTML element with id="sendDataButton"
var sendDataButton = document.getElementById('sendDataButton')
//add click function to button
sendDataButton.addEventListener('click', function() {
	//pass newprofile form through getUserData function
	getUserData(document.newprofile1)
}, false)