

const btn = document.querySelector('.btn');
const formulario = document.querySelector('.formulario');
const divSecond = document.querySelector('.divSecond');
const divThree = document.querySelector('.divThree');
const textConfirmation = document.querySelector('.textConfirmation');


function forms(){
	var divPrimary = document.getElementById('divPrimary')
	divPrimary.remove();
	const divString =	(
		`
		<div class="forms" data-js='form'>
			<h2>Digite seus dados para entrarmos em contato</h2>
			<input type="text" placeholder="Digite seu Nome" data-js='name' required>
			<input type="email" placeholder="Digite seu E-mail" data-js='email' required>
			<br>
			<button data-js='text' class="btn">Acessar</button>
			<br>
		</div>
	`);

	divSecond.innerHTML = divString;

   let text = document.querySelector('[data-js="text"]').addEventListener('click', enviar);

   function enviar(){


   	let divString = document.querySelector('[data-js="form"]');
	   let divName = document.querySelector('[data-js="name"]').value;
   	let divEmail = document.querySelector('[data-js="email"]').value;
   	divString.remove();

   	const divStringTwo = (`

   		<div class="formsTwo">
   		<h1 class="confirmEmail">${divName}, acabamos de enviar um E-mail para ${divEmail}.</h2>
			<img class="Email" src="img/email.png"/>
				<br>
			<h1 class="confirmEmail">Acesse sua caixa de para ver nossa tabela de preços.</h2>
   		</div>

   		`)
   	divThree.innerHTML = divStringTwo;

   }
	
}

btn.addEventListener('click', forms);

