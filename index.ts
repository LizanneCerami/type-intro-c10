let age : number = 23
let firstName: string = 'Liz'
let isTall: boolean = true;
let childrensNames: string[] = ['Lily', 'David']

// console.log(`${firstName} is ${age} years old.`)

if (isTall) {
  // console.log('and so tall')
} else {
  // console.log('is so pretty')
}

for(let i: number = 0; i < childrensNames.length; i++){
  // console.log(childrensNames[i])
}


enum taxForm {
  standardTaxForm = "1040",
  childTaxForm = "641",
  cryptoTaxForm = '420S'
}
// console.log("the crypto one is:", taxForm.cryptoTaxForm)
// console.log("the crypto one is:", taxForm.cryptoTaxForm)
// console.log("the crypto one is:", taxForm.cryptoTaxForm)
// console.log("the crypto one is:", taxForm.cryptoTaxForm)



let zipCode: string | number = 12345
zipCode = "ABCDE"
// console.log(zipCode)


function sum(x: number, y: number): number {
  return  x+y
}

let total: number = sum(5,6)
console.log(total)