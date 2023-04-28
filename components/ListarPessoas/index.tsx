

// Cada PESSOA na lista
interface pessoa {
  id: number;
  nome: string;
  idade: number;
  sexo: string;
}

// Interface do ARRAy de objetos pessoas
interface pessoasProps {
  pessoas: pessoa[];
}



export default function ListarPessoas({ pessoas }: pessoasProps) {
  return (
    <>
    
      {pessoas.map((p) => {
        return (
          <div key={p.id}>
            <p>
             {p.nome} - {p.idade} - {p.sexo} - idadeString: {p.idade}
            </p>
          </div>
        );
      })}

      <p>Quantidade de pessoas na lista: {pessoas.length}</p>
      </>
  );
}
