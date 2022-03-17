let time = 2000, 
currentImageIndex = 0;
const img = document.querySelectorAll('#container img');
max = img.length;
const active = document.querySelector('.active');

 function nextImages(){
 	img[currentImageIndex].classList.remove("active");
 	currentImageIndex++;
 	if(currentImageIndex >= max){
 		currentImageIndex = 0;
 	}
 	img[currentImageIndex].classList.add("active");
 }

function transition(){
	setInterval( ()=> {
		nextImages();
	}, time);
}
window.addEventListener('load', transition);

let i = 0;
let txt = "Trabalhos completos e profissionais em sua residência!";
let velocidade = 30;

function text(){
	if(i < txt.length){
		document.getElementById('textDinamic').innerHTML += txt.charAt(i);
		i++;
		setTimeout(text, velocidade)
	
	}
}


const envio = document.querySelector("#envio")



//==============  efeito digitação automática =================
window.addEventListener('load', text)

