import { resourceLimits } from "worker_threads"

/*
function lowerCase(str = '') {
    const alphabe: any = {
        'A': 'a',
        'B': 'b',
        'C': 'c',
    }
    let result = ''
    for (let i=0; i < str.length ; i++) {
        if (alphabet[str[i]] != undefined) {
            result = result + alphabet[str[i]]
        } else {
            result += str[i]
        }
    }
    return str
console.log(lowerCase('Chopper'))
}
*/

/*
//console.log("hello world")
//npm i ts-node
//npx ts-node [fichier]
*/


function lowerCase(str = '') {
    for (let i=0; i < string.length; i++) {
        const code = str.charCodeAt(i)
    if (code >= 65 && code <= 90) {
        result += String.fromCharCode(code + 32)
    } else {
        result += str[i]
    }
    return result
}