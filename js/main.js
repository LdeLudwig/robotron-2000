const controle = document.querySelectorAll('[data-controle]')
const estatistica = document.querySelectorAll('[data-estatistica]')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
/* Para cada elemento de "+" e "-" que for clicado, ele vai buscar um evento que recebe, o conteudo do click e aonde está esse conteudo;*/

//inves de buscarmos os elementos por classes/id ou qualquer que seja, para deixamos o codigo mais eficiente, usamos data-attributes;

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) =>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.controle, evento.target.dataset.peca)
        // Aqui mudamos qual o parametro que vai receber, pois mudamos a busca dos elementos para data-attributes
    })
})
  /* Na função ManipulaDados, ele recebe a operação que deve ser feita baseada no textContent recebido no click da outra função
  e busca o pai do elemento que foi clicado, assim ele consegue diferenciar qual parte do robô que tem que ser adicionada*/

function manipulaDados (operacao, controle) {
    const contador = controle.querySelector('[data-contador]')

    if(operacao === "+"){
        contador.value = parseInt(contador.value) + 1;
    } else {
        contador.value = parseInt(contador.value) - 1;
    }
}

function atualizaEstatistica(operacao, peca){
    estatistica.forEach((elemento)=>{
        if(operacao === "+" ){
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        } else{
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        }
    })

}
