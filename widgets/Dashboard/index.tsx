import { useState } from "react";
import Button from "../../components/Button";
import styles from "./dashboard.module.css";
import SomarFuncaoPura from "../../utils/SomarFuncaoPura";

const pessoasMockadas = [
  { id: 1, nome: "João", idade: 25, sexo: "M", telefone: "24992590852", dataNascimento: "14/04/1998" },
  { id: 2, nome: "Italo", idade: 30, sexo: "M", telefone: "24992590852", dataNascimento: "14/04/1998" },
  { id: 3, nome: "Juan", idade: 20, sexo: "M", telefone: "24992590852", dataNascimento: "14/04/1998" },
  { id: 4, nome: "Rachel", idade: 18, sexo: "F", telefone: "24992590852", dataNascimento: "14/04/1998" },
  { id: 5, nome: "Paula", idade: 19, sexo: "F", telefone: "24992590852", dataNascimento: "14/04/1998" },
  { id: 6, nome: "Matheus", idade: 13, sexo: "M", telefone: "24992590852", dataNascimento: "14/04/1998" },
  { id: 7, nome: "Evani", idade: 25, sexo: "F", telefone: "24992590852", dataNascimento: "14/04/1998" },
  { id: 8, nome: "Lucas", idade: 16, sexo: "M", telefone: "24992590852", dataNascimento: "14/04/1998" },
  { id: 9, nome: "Andre Ruan", idade: 35, sexo: "M", telefone: "24992590852", dataNascimento: "14/04/1998" },
  { id: 10, nome: "Giselle", idade: 15, sexo: "F", telefone: "24992590852", dataNascimento: "14/04/1998" },
];

export default function Dashboard() {
  const [pessoas, setPessoas] = useState(pessoasMockadas);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");

  //   Função que vai ADICIONAR um item novo a lista
  function adicionarItem() {
    const newPessoa = {
      nome,
      idade,
    };
    console.log(newPessoa);

    const objetoMockado = { id: 10, nome: "Giselle", idade: 15, sexo: "F", telefone: "24992590852", dataNascimento: "14/04/1998" };

    const novasPessoas = [...pessoas, objetoMockado];

    setPessoas(novasPessoas);
    console.log("novo Array:", pessoas);
  }

  // Função que vai DELETAR o item da lista
  function deletarItem(id: number) {
    console.log(id);
  }

  return (
    <>
      <div className={styles.inputsContainer}>
        <input placeholder="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        <input placeholder="idade" value={idade} onChange={(e) => setIdade(e.target.value)} />
        <input placeholder="sexo" />

        <Button cor="green" quandoClicar={adicionarItem} texto="Inserir Pessoa" />
      </div>

      <div>
        <ul>
          {pessoas.map((pessoa) => {
            return (
              <li key={pessoa.id} className={styles.pessoaListItem}>
                {pessoa.nome} - {pessoa.idade} - {pessoa.sexo}
                <Button texto="Deletar" cor="red" quandoClicar={() => deletarItem(pessoa.id)} />
              </li>
            );
          })}
        </ul>

        
        Soma é: {SomarFuncaoPura(1,1)}

      </div>
    </>
  );
}
