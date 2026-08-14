import style from "./Produtos.module.css";
import BarraPesquisa from "../components/BuscaEfiltro/BarraPesquisa";
import FormProduto from "../components/Forms/FormProduto";
//  import FormCliente from "../components/Forms/FormCLiente";
import { useState } from "react";

function Produtos() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [produtoEmEdicao, setProdutoEmEdicao] = useState(null);
  const [produtos, setProdutos] = useState([]);


  function handleSalvarProduto(produto) {
    setProdutos((listaAntiga) => {
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
    setProdutos((ListaNova) =>
      ListaNova.filter((produtos) => produtos.id !== ItemRemover),
    );
  }

  return (
    <div>
      <div className={style.article}>
        <div className={style.infos}>
          <h1>Produtos</h1>
          <p className={style.subDescricao}>Produtos cadastrados</p>
        </div>
        <button onClick={handleAbrirCriacao} className={style.botao}>
          Novo produto
        </button>
      </div>

      <BarraPesquisa />

      <ul className={style.Lista}>
        {produtos.length === 0 ? (
          <p className={style.SemProdutos}>Nenhum produto cadastrado.</p>
        ) : (
          produtos.map((prod) => (
            <li key={prod.id} className={style.Iten_Lista}>
              <div className={style.Iten_Lista_Cima}>
                <div className={style.Icone_Cubo}></div>
                <div className={style.Iten_Lista_Cima_infos}>
                  <p className={style.Nome_Produto}>
                    <strong>{prod.nome}</strong>
                  </p>
                  <p className={style.Categoria_Produto}>{prod.categoria}</p>
                </div>
              </div>

              <div className={style.Iten_Lista_Meio}>
                <div className={style.Iten_Lista_Meio_Infos}>
                  <p className={style.Info}>Custo</p>
                  <p className={style.info_num}>
                    R$ {(prod.precoCusto ?? 0).toFixed(2)}
                  </p>
                </div>

                <div className={style.Iten_Lista_Meio_Infos}>
                  <p className={style.Info}>Venda</p>
                  <p className={style.info_num}>
                    R$ {(prod.precoCusto ?? 0).toFixed(2)}
                  </p>
                </div>

                <div className={style.Iten_Lista_Meio_Infos}>
                  <p className={style.Info}>Status</p>
                  <p className={style.info_num}>{prod.status}</p>
                </div>
              </div>

              <div className={style.Iten_Lista_Bottom}>
                <p className={style.quant}>Estoque: {prod.estoque}</p>
                <p className={style.quat_min}>Mínimo: {prod.minEstoque}</p>

                <div className={style.Iten_Lista_Bottom_Options}>
                  <button
                    className={style.Button_Editar}
                    aria-label="Editar"
                    onClick={() => handleIniciarEdicao(prod)}
                  ></button>
                  <button
                    className={style.Button_Remover}
                    aria-label="Remover"
                    onClick={() => handleRemoverItem(prod.id)}
                  ></button>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>

      {isFormOpen && (
        <FormProduto
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

export default Produtos;
