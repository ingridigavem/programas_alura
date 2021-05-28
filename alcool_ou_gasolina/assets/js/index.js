const selecaoAlcool = document.querySelector("#alcool");
const selecaoGasolina = document.querySelector("#gasolina");
const submit = document.querySelector("#submit");
const campoDistancia = document.querySelector("#distancia");
const campoLitros = document.querySelector("#litros");
const pResultado = document.querySelector("#resultado");

function calculaConsumo(distancia, litros){
    return (distancia/litros).toFixed(2);
}

function selecionaCombustivel(distancia, litros){
    if(selecaoAlcool.checked){
        pResultado.classList.remove("resultado-obtido");
        const consumo = calculaConsumo(distancia, litros);
        pResultado.innerHTML = `O consumo de Álcool foi de: ${consumo} Km/l`;
        pResultado.classList.add("resultado-obtido");
        campoDistancia.value = '';
        campoLitros.value = '';
        
    } else if(selecaoGasolina.checked){
        pResultado.classList.remove("resultado-obtido");
        const consumo = calculaConsumo(distancia, litros);
        pResultado.innerHTML = `O consumo de Gasolina foi de ${consumo} Km/l`;
        pResultado.classList.add("resultado-obtido");
        campoDistancia.value = '';
        campoLitros.value = '';
    }
}

submit.addEventListener('click', function(){
    const distancia = Number(campoDistancia.value);
    const litros = Number(campoLitros.value);
    selecionaCombustivel(distancia, litros);

});
