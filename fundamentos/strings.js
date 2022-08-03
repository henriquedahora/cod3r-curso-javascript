console.clear()

const escola = "Cod3r"
console.log(escola.charAt(4)) // Imprime o valor do índice 4.
console.log(escola.charAt(5)) // Imprime o valor do Índice 5 que não tem.
console.log(escola.charCodeAt(3)) // Código Unicode
console.log(escola.indexOf('3')) // Índice 3
console.log(escola.substring(1)) // Imprimir a partir do índice 1
console.log(escola.substring(0, 3)) // Imprimi do índice 0 até o 3
console.log('Escola '.concat(escola).concat("!")) // Concatenação de uma cadeia de caracteres.
console.log('Escola '+ (escola) + ("!")) // Concatenação de uma cadeia de caracteres usando o sinal de +.
console.log(escola.replace(3, 'e')) // Substitui o valor do índice 3.
console.log('Ana,Maria,Pedro'.split(',')) // Utiliza a virgula como separador e cria um Array.
