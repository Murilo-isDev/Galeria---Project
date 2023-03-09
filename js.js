 let btnGaleria = document.querySelector('#avancar');
 let btnVoltar = document.querySelector('#voltar');
 let imagem = document.querySelector('#imagem');
 let imagens = ['brasil.png','barcelona.png', 'city.png', 'liverpool.png', 'allnasser.png', 'borussia.png', 'psg.png'];
 let imAtual = 0;

 btnGaleria.addEventListener('click', function(){
    imAtual++;
   if(imAtual >= imagens.length){
         imAtual = 0;
     }
     imagem.setAttribute('src', imagens[imAtual]);

     setTimeout(function(){
         imagem.style.transition = '1s';
     }, 1000);

     

     btnVoltar.addEventListener('click', function(){
         imAtual--;
         if(imAtual < 0){
             imAtual = imagens.length -1;
        }
         imagem.setAttribute('src', imagens[imAtual]);

         setTimeout(function(){
             imagem.style.transition = '1s';
         }, 1000);
     }); });

     function barcelona() {
        document.getElementById("imagem").src="barcelona.png";
        imagem.style.border= '15px solid';
        imagem.style.borderImage = "url(https://st3.depositphotos.com/1816831/17630/i/600/depositphotos_176303658-stock-photo-colors-barcelona-illustration.jpg) 30 round ";
     }

     function city() {
        document.getElementById("imagem").src="city.png";
        imagem.style.border= '15px solid';
        imagem.style.borderImage = "url(https://www.vogue.pt/media/content/english-version-fashion-to-be-continued-fun-facts-blue.jpg) 30 round";
     }

     function liverpool() {
        document.getElementById("imagem").src="liverpool.png";
        imagem.style.border= '15px solid';
        imagem.style.borderImage = "url(https://static.vecteezy.com/ti/vetor-gratis/t2/3421390-minimal-futuristic-abstract-gradient-red-stripes-background-design-gratis-vetor.jpg) 30 round";
     }

     function allnasser() {
        document.getElementById("imagem").src="allnasser.png";
        imagem.style.border= '15px solid';
        imagem.style.borderImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUZ88IbtHN7qlQrZlpKNaodG3CCYPxfliWbTeQn5a8C2sqKjbtw-5FNeKJn_IN-9Vbuk&usqp=CAU) 30 round";        
        
     }

     function borussia() {
        document.getElementById("imagem").src="borussia.png";
        imagem.style.border= '15px solid';
        imagem.style.borderImage = "url(https://d2r9epyceweg5n.cloudfront.net/stores/002/158/472/products/camisa-borussia-dortmund-home-22-23-puma-masculino-torcedor-amarelo-21-2a76c3b7e6500481db16535323532426-640-0.jpg) 30 round";

     }

     function psg() {
        document.getElementById("imagem").src="psg.png";
        imagem.style.border= '15px solid';
        imagem.style.borderImage = "url(https://pbs.twimg.com/media/ES7rKJ9XYAA5i2l.jpg:large) 30 round";
     }
