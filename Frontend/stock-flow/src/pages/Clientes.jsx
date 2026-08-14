import style from "./Produtos.module.css";
import BarraPesquisa from "../components/BuscaEfiltro/BarraPesquisa";
// import FormProduto from "../components/Forms/FormProduto";
import FormCliente from "../components/Forms/FormCLiente";
import { useState } from "react";

function Clientes() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [produtoEmEdicao, setProdutoEmEdicao] = useState(null);
  const [clientes, setClientes] = useState([]);

  function handleSalvarProduto(produto) {
    setClientes((listaAntiga) => {
      const existe = listaAntiga.some((p) => p.id === produto.id);
      if (existe) {
        return listaAntiga.map((p) => (p.id === produto.id ? produto : p));
      }
      return [...listaAntiga, produto];
    });
    fecharFormulario();
  }

  function handleAbrirCriacao() {
    setProdutoEmEdicao(null);
    setIsFormOpen(true);
  }

  function handleIniciarEdicao(produto) {
    setProdutoEmEdicao(produto);
    setIsFormOpen(true);
  }

  function fecharFormulario() {
    setIsFormOpen(false);
    setProdutoEmEdicao(null);
  }
  function handleRemoverItem(ItemRemover) {
    setClientes((ListaNova) =>
      ListaNova.filter((produtos) => produtos.id !== ItemRemover),
    );
  }

  return (
    <div>
      <div className={style.article}>
        <div className={style.infos}>
          <h1>Clientes</h1>
          <p className={style.subDescricao}>CLientes cadastrados</p>
        </div>
        <button onClick={handleAbrirCriacao} className={style.botao}>
          Novo produto
        </button>
      </div>

      <BarraPesquisa />

     <ul className={style.Lista}>
  {clientes.length === 0 ? (
    <p className={style.SemProdutos}>Nenhum cliente cadastrado.</p>
  ) : (
    clientes.map((cliente) => (
      <li key={cliente.id} className={style.Iten_Lista}>
        <div className={style.Iten_Lista_Cima}>
          <div className={style.Icone_Cliente}>
            {cliente.nome ? cliente.nome.charAt(0).toUpperCase() : ''}
          </div>
          
          <div className={style.Iten_Lista_Cima_infos}>
            <p className={style.Nome_Produto}>
              <strong>{cliente.nome}</strong>
            </p>
            <p className={style.Categoria_Produto}>{cliente.email}</p>
          </div>
        </div>

        <div className={style.Iten_Lista_Bottom}>
          <p className={style.Categoria_Produto}>{cliente.telefone}</p>

          <div className={style.Iten_Lista_Bottom_Options}>
            <button
              className={style.Button_Editar}
              aria-label="Editar"
              onClick={() => handleIniciarEdicao(cliente)}
            ></button>
            <button
              className={style.Button_Remover}
              aria-label="Remover"
              onClick={() => handleRemoverItem(cliente.id)}
            ></button>
          </div>
        </div>
      </li>
    ))
  )}
</ul>
      {isFormOpen && (
        <FormCliente
          key={produtoEmEdicao ? produtoEmEdicao.id : "novo-produto"}
          produtoParaEditar={produtoEmEdicao}
          onClose={fecharFormulario}
          onSalvar={handleSalvarProduto}
        />
      )}

      {/* <FormCliente/> */}
    </div>
  );
}

export default Clientes;
