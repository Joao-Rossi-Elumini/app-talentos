


interface NotasInterface{
    notas: number[]
}


export default function Soma({notas}:NotasInterface){

    console.log(notas)

    let totalDasNotas = notas.reduce((acc,current) => acc + current)

    return (
        <>
         Soma de todas as notas:{totalDasNotas} <br/>
         Média de todas as notas: {totalDasNotas/notas.length}
        </>
    )
}