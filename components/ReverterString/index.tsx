

interface ReverterStringInterface{
    frase: string
}

export default function ReverterString({frase}:ReverterStringInterface){

    let stringDividida = frase.split(' ')
    let stringInvertida = stringDividida.reverse();
    let stringUnida = stringInvertida.join(' ')

    // let stringTudoEm1 = frase
    // .split(' ')
    // .reverse()
    // .join(' ')

    // console.log(stringTudoEm1)

    return (
        <>
            <br/>
            Frase Original: {frase}
            <br/>
            Frase Revertida: {stringUnida}
        </>
    )
}