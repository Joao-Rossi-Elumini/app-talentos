import React, { useState } from "react";
import Button from "../../components/Button";
import styles from "./dashboard.module.css";

interface PessoaInterface {
  id: number;
  nome: string;
  idade: number;
  sexo: string;
  numTelefone: string;
  dataNascimento: string;
}

const pessoasMockadas: PessoaInterface[] = [
  { id: 1, nome: "João", idade: 25, sexo: "M", numTelefone: "24992590852", dataNascimento: "14/04/1998" },
  { id: 2, nome: "Italo", idade: 30, sexo: "M", numTelefone: "24992590852", dataNascimento: "14/04/1998" },
  { id: 3, nome: "Juan", idade: 20, sexo: "M", numTelefone: "24992590852", dataNascimento: "14/04/1998" },
  { id: 4, nome: "Rachel", idade: 18, sexo: "F", numTelefone: "24992590852", dataNascimento: "14/04/1998" },
  { id: 5, nome: "Paula", idade: 19, sexo: "F", numTelefone: "24992590852", dataNascimento: "14/04/1998" },
  { id: 6, nome: "Matheus", idade: 13, sexo: "M", numTelefone: "24992590852", dataNascimento: "14/04/1998" },
  { id: 7, nome: "Evani", idade: 25, sexo: "F", numTelefone: "24992590852", dataNascimento: "14/04/1998" },
  { id: 8, nome: "Lucas", idade: 16, sexo: "M", numTelefone: "24992590852", dataNascimento: "14/04/1998" },
  { id: 9, nome: "Andre Ruan", idade: 35, sexo: "M", numTelefone: "24992590852", dataNascimento: "14/04/1998" },
  { id: 10, nome: "Giselle", idade: 15, sexo: "F", numTelefone: "24992590852", dataNascimento: "14/04/1998" },
];

export default function Dashboard() {
  const [pessoas, setPessoas] = useState<PessoaInterface[]>(pessoasMockadas);
  const [nome, setNome] = useState<string>("");
  const [idade, setIdade] = useState<string>("");

  const [sexo, setSexo] = useState("M");

  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  //   Função que vai ADICIONAR um item novo a lista
  function adicionarItem() {
    const newPessoa = {
      id: new Date().getTime(),
      nome:nome,
      idade: parseInt(idade),
      sexo:sexo,
      numTelefone: telefone,
      dataNascimento: dataNascimento
    };
    console.log(newPessoa);

    const novasPessoas = [...pessoas, newPessoa];
    setPessoas(novasPessoas);
    console.log("novo Array:", pessoas);
  }

  // Função que vai DELETAR o item da lista
  function deletarItem(id: number) {

    const arrayNovoSemItem = pessoas.filter((p => p.id !== id))

    setPessoas(arrayNovoSemItem)
    console.log(id);
  }

  function handleNameInput(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("Input do nome: ", e.target.value);
    setNome(e.target.value);
  }

  function handleIdadeInput(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("Input Idade:", e.target.value);
    const filteredText = e.target.value.replace(/\D/g, '')
    console.log('Input idade Filtrado:', filteredText)
    
    setIdade(filteredText);
  }

  function handleTelefoneInput(e: React.ChangeEvent<HTMLInputElement>) {

    let numeroOriginal = e.target.value
    numeroOriginal = numeroOriginal.replace(/\D/g, '')//Remove tudo o que não é dígito
    numeroOriginal = numeroOriginal.replace(/^(\d{2})(\d)/g, `($1) $2`)//Coloca parênteses em volta dos dois primeiros dígitos
    numeroOriginal = numeroOriginal.replace(/(\d)(\d{4})$/, '$1-$2') //Coloca hífen entre o quarto e o quinto dígitos

    console.log("Input Telefone:", e.target.value);



    setTelefone(numeroOriginal);
  }

  function handleDataNascimento(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("Input Data de Nascimento:", e.target.value);
    setDataNascimento(e.target.value);
  }

  function handleSexo(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    setSexo(e.target.value);
  }

  return (
    <>
      <div className={styles.inputsContainer}>
        <input placeholder="nome" value={nome} onChange={(e) => handleNameInput(e)} />
        <input placeholder="idade" value={idade} onChange={(e) => handleIdadeInput(e)} type="text" inputMode="numeric" pattern="[0-9]*" />

        <div style={{display:'flex', flexDirection:'row', gap:'8px'}}>
          <input type="radio" value="M" name="sexo" onChange={handleSexo} />
          <label htmlFor="html">Masculino</label>
        </div>

        <br />

        <div style={{display:'flex', flexDirection:'row', gap:'8px'}}>
          <input type="radio" value="F" name="sexo" onChange={handleSexo} />
          <label htmlFor="css">Feminino</label>
        </div>

        <br />

        <input placeholder="telefone" value={telefone} maxLength={15} onChange={(e) => handleTelefoneInput(e)} />
        <input placeholder="data de nascimento" value={dataNascimento} onChange={(e) => handleDataNascimento(e)} />

        <Button cor="green" quandoClicar={adicionarItem} texto="Inserir Pessoa" />
      </div>

      <div>
        <ul>
          {pessoas.map((pessoa) => {
            return (
              <li key={pessoa.id} className={styles.pessoaListItem}>
                {pessoa.id} - {pessoa.nome} - {pessoa.idade} - {pessoa.sexo} - {pessoa.numTelefone} - {pessoa.dataNascimento}
                <Button texto="Deletar" cor="red" quandoClicar={() => deletarItem(pessoa.id)} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
