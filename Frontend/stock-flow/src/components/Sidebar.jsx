import style from './Sidebar.module.css'
import favicon from '../assets/img/favicon.svg'

function Sidebar() {
    return (
        <header className={style.sidebar}>
            <article className={style.titulo}>
                <img src={favicon} alt='icone do site' width="35px" height="35px" />
                <h1> Stock-Flow</h1>
            </article>

            <nav className={style.nav_itens}>
                <ul>
                    <li>
                        <button>Dashboard</button>
                    </li>

                    <li>
                        <button>Historico</button>
                    </li>

                    <li>
                        <button>Movimentações</button>
                    </li>

                    <li>
                        <button>Produtos</button>
                    </li>

                    <li>
                        <button>Clientes</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Sidebar