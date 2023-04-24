const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const submit = document.getElementsByClassName('form-contact')[0];var

submit.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log("Clicked");

	Email.send({
		SecureToken : "cda447d3-36dd-436a-b572-b3a2b9c19273",
		To : 'ecocheckaz@gmail.com',
		From : "ecocheckaz@gmail.com",
		Subject : "Testing subject",
		Body : "And this is the body"
	}).then(
	message => alert(message)
	);
	
})