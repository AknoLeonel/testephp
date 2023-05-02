const form = document.querySelector('#contact-form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	const name = document.querySelector('#name').value;
	const email = document.querySelector('#email').value;
	const message = document.querySelector('#message').value;

	Email.send({
		SecureToken: "service_vkaldze",
		To: 'podsaudedigital@gmail.com',
		From: email,
		Subject: `Contato de ${name} (${email})`,
		Body: message
	}).then((message) => alert('Mensagem enviada com sucesso!'));
});
