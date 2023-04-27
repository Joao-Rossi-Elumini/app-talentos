interface pessoaInterface {
  id: number;
  nome: string;
  idade: number;
  sexo: string;
}
interface profissaoInterface {
  pessoaId: number;
  nomeProf: string;
}
interface associacaoProps {
  pessoas: pessoaInterface[];
  profissoes: profissaoInterface[];
}

export default function AssociarEmpregos({ pessoas, profissoes }: associacaoProps) {
  const pessoasComProfissao = pessoas.map((p) => {
    const profissaoEncontrada = profissoes.find((profissao) => profissao.pessoaId === p.id);

    return {
      ...p,
      nomeProfissao: profissaoEncontrada ? profissaoEncontrada.nomeProf : null,
    };
  });


  return (
    <>
      <ul>
        {pessoasComProfissao.map((p) => {
          return (
            <li key={p.id}>
              <h2>
                {p.id} - {p.nome} - {p.nomeProfissao ?? "Desempregado"}
              </h2>
            </li>
          );
        })}
      </ul>
    </>
  );
}
