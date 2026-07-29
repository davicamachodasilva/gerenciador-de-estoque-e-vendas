import style from './BarraPesquisa.module.css'

function Pesquisa(){
  return(
    <div>
        <input type="text" placeholder="Buscar produtos..." className={style.BarraPesquisa}/>
    </div>
  )
}

export default Pesquisa