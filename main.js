// const PASSWORD = "pao123"

// let attemps = 3

// alert("Olá, você! \nCaptive Portal da Padaria")

// while(attemps > 0){
// let sla = prompt("Digite a senha:")

// if(sla === PASSWORD){
//     alert("Conectado, bom café")
//     process.exit()
// }
// else{
//     attemps--
//     alert(`Senha incorreta, você ainda tem ${attemps} tentativas`)
// }
// if(attemps === 0){
//     alert("Acesso bloqueado!")
// }
// }

// let count = 10
// while(count > 0){
//     alert(`${count}`)
//     count--
//     if(count === 0){
//         alert("Feliz Ano Novo!")
//     }
// }

// let total = 0
// let weeks = 0
// let recebido = 0

// while(total <= 300){
//     while (true) {
//     let valor = +prompt("Digite o valor recebido:")
//     recebido = Number(valor)
//     if (valor !== "" && valor !== null && Number.isInteger(recebido) && recebido > 0) {
//          let sla = total + valor
//          total = sla
//          let falta = 300 - total
//          weeks++
//          if(total >= 300){
//     alert(`Você já pode comprar sua bicicleta, você demorou ${weeks} semanas`)}
//     else{
// alert(`Agora você tem R$${total}, ainda falta R$${falta} `)
// }
// break
//     }
//     alert("Entrada inválida! Por favor, digite um número inteiro maior que zero.")
// }
// }
const balas = 35
let number = +prompt("Digite um número entre 1 e 50:")
if(number > 50 || number < 0){
    while(true){
    alert("Número inválido")
    number = +prompt("Digite um novo número")
    }
}    
if(number > balas){
alert("Menos")
    number = +prompt("Digite seu proximo número:")
}
else{
    alert("Mais")
    number = +prompt("Digite seu proximo número:")
}
