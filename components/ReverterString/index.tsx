

interface ReverterStringInterface{
    frase: string
}

export default function ReverterString({frase}:ReverterStringInterface){

    console.log(frase)

    let stringDividida = frase.split(' ')
    let stringInvertida = stringDividida.reverse();
    let stringUnida = stringInvertida.join(' ')

    return (
        <>
            <br/>
            Frase Original: {frase}
            <br/>
            Frase Revertida: {stringUnida}
        </>
    )
}