import style from "./Sidebar.module.css";
import favicon from "../assets/img/favicon.svg";

function Sidebar({ paginaAtual, setPaginaAtual }) {
  return (
    <header className={style.sidebar}>
      <article className={style.titulo}>
        <img src={favicon} alt="icone do site" width="35px" height="35px" />
        <h1> Stock-Flow</h1>
      </article>

      <nav className={style.nav_itens}>
        <ul>
          <li>
            <button className={paginaAtual === "dashboard" ? style.ativo : ""}>
              Dashboard
            </button>
          </li>
          <li>
            <button className={paginaAtual === "historico" ? style.ativo : ""}>
              Histórico
            </button>
          </li>
          <li>
            <button
              className={paginaAtual === "movimentacoes" ? style.ativo : ""}
            >
              Movimentações
            </button>
          </li>
          <li>
            <button
              className={paginaAtual === "produtos" ? style.ativo : ""}
              onClick={() => setPaginaAtual("produtos")}
            >
              Produtos
            </button>
          </li>
          <li>
            <button
              className={paginaAtual === "clientes" ? style.ativo : ""}
              onClick={() => setPaginaAtual("clientes")}
            >
              Clientes
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Sidebar;
