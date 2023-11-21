const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
btn.setAttribute('class', 'light');
const overlay = document.querySelector('.overlay');

/* Declarar um array com o nome de arquivos das imagens */

images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"]

/* Declarar um array com o texto declarativo para cada arquivo de imagem (o que ira aparecer no alt="") */

images_alt = ["Olho", "Rocha", "Flor", "Pintura egípicia", "Borboleta"]

/* Realizar um loop nas imagens */

for (var i = 0; i < images.length; i++) {

    const newImage = document.createElement('img');
    newImage.setAttribute('src', "./images/" + images[i]);
    newImage.setAttribute('alt', images_alt[i]);

    newImage.onclick = function setFullSizeImage() {

        displayedImage.setAttribute('src', newImage.getAttribute('src'));

    }

    thumbBar.appendChild(newImage);
}


/* Conectando o botão Escurecer/Clarear */

btn.onclick = function () {

    btn.setAttribute("class", btn.getAttribute('class') == 'dark' ? 'light' : 'dark');
    btn.textContent = btn.getAttribute('class') == 'dark' ? 'Clarear' : 'Escurecer';
    overlay.style.backgroundColor = btn.getAttribute('class') == 'dark' ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)';

}