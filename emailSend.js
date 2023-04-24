function sendMail() {
	var params = {
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		message: document.getElementById("message").value,
	};
	
	const serviceID = "service_97020ju";
	const templateID = "template_f59b00d";

	emailjs
	.send(serviceID, templateID, params)
	.then((res) => {
		document.getElementById("name").value = "";
		document.getElementById("email").value = "";
		document.getElementById("message").value = "";
		console.log(res);
		alert("Your message sent successfully");
	})
	.catch((err) => console.log(err));
}

