import { useEffect, useState } from "react";


export default function ButtonCount() {
  const [count, setCount] = useState(0);

    useEffect(() =>{
        const pegandoContadorDoLocalStorage = localStorage.getItem('contador')
        if(pegandoContadorDoLocalStorage){
            const converTidoPraNumber = parseInt(pegandoContadorDoLocalStorage)
            setCount(converTidoPraNumber)
        }
    },[])

  function aumentarContador() {
    if(count <10){
        setCount(count + 1);
        localStorage.setItem("contador", (count + 1).toString());
    }
    else{
        alert('NAO PODE PASSAR DE 10!')
    }
  }

  function diminuirContador() {
    if(count > 0){
        setCount(count - 1);
        localStorage.setItem("contador", (count - 1).toString());
    }
    else {
        alert('Não pode ser abaixo de 0')
    }
  }

  return (
    <>
      <button onClick={() => aumentarContador()} style={{ width: "200px" }}>
        {count} Incrementar
      </button>
      <button onClick={() => diminuirContador()} style={{ width: "200px" }}>
        {count} Decrementar
      </button>

    </>
  );
}
