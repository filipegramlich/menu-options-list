//
let option
let itemsList = []

while(option != 3){
option = Number(prompt(`
        -------------------------------------
        Olá usuário! Digite a opção desejada: 

        1- Cadastrar um item na lista.
        2- Mostrar itens cadastrados.
        3- Sair do programa.
        -------------------------------------
    `))

switch(option){
    case 1:
        let item = prompt("Digite o nome do item: ")
        itemsList.push(item)
    break
    case 2:
        if(itemsList.length == 0){
            alert("Não existem itens cadastrados.")
        }else{
            alert(itemsList)
        }
    break
    case 3:
        alert("GoodBye")
    break
    default:
        alert("Opção inválida. Tente novamente.")
    }
}
