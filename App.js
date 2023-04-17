

function App(){

  const lista = [
    {titulo: 'lixeira', id:1},
    {titulo: 'cadeira', id:2},
    {titulo: 'mesa', id:3}
  ]
  function Clicou(){
    alert("Tarefa feita!")
  }

  const lista2 = lista.map((item)=> <button key={item.id} onClick={Clicou}>{item.titulo}</button>)


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