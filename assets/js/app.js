const form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
   const inputPeso = e.target.querySelector('#peso');
   const inputAltura = e.target.querySelector('#altura');
   const peso = Number(inputPeso.value);
   const altura = Number(inputAltura.value);
   const imc = getImc(peso, altura);

   if (!peso || !altura){
    setResultado('Valor inválido');
    return;
   }else{
    setResultado(`Seu iMC é ${imc}`)
   }
});

function getImc(peso, altura){
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

function criaParagrafo(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg){
   const resultado = document.querySelector('#resultado');
   const p = criaParagrafo();
   resultado.innerHTML = '';
   p.innerHTML = msg;
   resultado.appendChild(p);
}

