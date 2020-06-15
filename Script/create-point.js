function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
.then(res => res.json())
.then(states => {

    for ( const state of states){
        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    
    })
}

populateUFs()

function getCities(event){
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.selectedeIndex
    stateInput.value = event.target.options[indexOfSelectedState]

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a cidade</option>"
    
    fetch(url)
    .then(res => res.json())
    .then(cities => {
        for( const city of cities){
         citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
    
    })

}


document
.querySelector("select[name=uf]")
.addEventListener("change", getCities)

// Itens de coleta
// todos os li

const itemsToCollet = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollet) {
    item.addEventListener("Click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target
    

    // adicionar ou remover uma classe em JS
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    // Verificar se tem itens selecionados e quais são, pegar selecionados

    const alreadySelected = selectedItems.findIndex( item => {
        return item == itemId
    })

    // Se ja tiver selecionado, tirar da seleção

    if (alreadySelected >= 0) {
        const filteredItems = selectedItems.filter (item =>{
            const itemDifferent = item != itemId // false
            return itemDifferent
        })
        selectedItems = filteredItems
    }else {
        //Se não tiver selecionado, ativar a seleção

        selectedItems.push(itemId)
    }

    //Atualizar o campo escondido com os itens selecionados

    collectedItems.value = selectedItems

}