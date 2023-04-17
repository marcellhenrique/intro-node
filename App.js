function App() {

  const lista = [
    {titulo: 'lixeira', id:1},
    {titulo: 'cadeira', id:2},
    {titulo: 'mesa', id:3}
  ]
  function Clicou(){
    alert("Tarefa feita!")
  }

  const lista2 = lista.map((item)=> <li key={item.id} ><input type="checkbox" onClick={Clicou}/>{item.titulo}</li>)

  return(
    <div>
      <ul>
        {lista2}
        <br/>
      </ul>
    </div>
  )
}

export default App;
