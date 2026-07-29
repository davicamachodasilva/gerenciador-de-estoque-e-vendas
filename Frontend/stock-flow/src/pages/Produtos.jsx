import style from './Produtos.module.css'
import BarraPesquisa from '../components/BuscaEfiltro/BarraPesquisa'
import { useState } from 'react'



function Produtos() {

    const [form, setForm] = useState(false)

    const Form_ativado = () => {
        setForm(!form)
    }
    return (
        <div>
            <div className={style.article}>
                <div className={style.infos}>
                    <h1>Produtos</h1>
                    <p className={style.subDescricao}>Produtos cadastrados</p>
                </div>
                <button onClick={Form_ativado} className={style.botao}>Novo produto</button>
            </div>


            <BarraPesquisa />

            <ul className='Lista'>
                {/* <li className='Iten_Lista'>
                    <div className="Iten_Lista_Cima">
                        <img src="" alt="image do produto" />
                        <div className="Iten_Lista_Cima_infos">
                            <p className='Nome_Produto'></p>
                            <p className='Categoria_Produto'></p>
                        </div>
                    </div>

                    <div className="Iten_Lista_Meio">
                        <div className="Iten_Lista_Meio_Infos">
                            <p className='Info'>Custo</p>
                            <p className='info_num'>Valor</p>
                        </div>

                        <div className="Iten_Lista_Meio_Infos">
                            <p className='Info'>Venda</p>
                            <p className='info_num'>Valor</p>
                        </div>

                        <div className="Iten_Lista_Meio_Infos">
                            <p className='Info'>Margem</p>
                            <p className='info_num'>Valor</p>
                        </div>
                    </div>

                    <div className="Iten_Lista_Bottom">
                        <p className='quant'>0</p>
                        <p className='quat_min'>0</p>
                    </div>
                </li> */}
            </ul>
            {form &&  (
                <div className={style.form_centro}>

                    <form className={style.formularioContainer}>
                        <div className={style.formularioCabecalho}>
                            <h2 className={style.formularioTitulo}>Novo Produto</h2>
                            <button type="button" className={style.botaoFechar} aria-label="Fechar" onClick={Form_ativado}>
                                &times;
                            </button>
                        </div>

                        <div className={style.campoGrupoTotal}>
                            <label htmlFor="nomeProduto" className={style.rotulo}>
                                Nome do Produto
                            </label>
                            <input
                                type="text"
                                id="nomeProduto"
                                className={style.campoTexto}
                                placeholder="Ex: Camiseta Básica"
                            />
                        </div>

                        <div className={style.linhaDupla}>
                            <div className={style.campoGrupo}>
                                <label htmlFor="precoCusto" className={style.rotulo}>
                                    Preço de Custo (R$)
                                </label>
                                <input
                                    type="number"
                                    step="0.01"
                                    id="precoCusto"
                                    className={style.campoTexto}
                                    placeholder="0.00"
                                />
                            </div>

                            <div className={style.campoGrupo}>
                                <label htmlFor="precoVenda" className={style.rotulo}>
                                    Preço de Venda (R$)
                                </label>
                                <input
                                    type="number"
                                    step="0.01"
                                    id="precoVenda"
                                    className={style.campoTexto}
                                    placeholder="0.00"
                                />
                            </div>
                        </div>

                        <div className={style.linhaDupla}>
                            <div className={style.campoGrupo}>
                                <label htmlFor="estoqueAtual" className={style.rotulo}>
                                    Estoque Atual
                                </label>
                                <input
                                    type="number"
                                    id="estoqueAtual"
                                    className={style.campoTexto}
                                    placeholder="0"
                                />
                            </div>

                            <div className={style.campoGrupo}>
                                <label htmlFor="minimoObrigatorio" className={style.rotulo}>
                                    Mínimo Obrigatório
                                </label>
                                <input
                                    type="number"
                                    id="minimoObrigatorio"
                                    className={style.campoTexto}
                                    placeholder="5"
                                />
                            </div>
                        </div>

                        <div className={style.linhaDupla}>
                            <div className={style.campoGrupo}>
                                <label htmlFor="categoria" className={style.rotulo}>
                                    Categoria
                                </label>
                                <select id="categoria" className={style.campoSelecione} defaultValue="">
                                    <option value="" disabled hidden>Selecione uma categoria</option>
                                    <option value="camisetas">Camisetas e Tops</option>
                                    <option value="camisas">Camisas</option>
                                    <option value="calcas">Calças e Jeans</option>
                                    <option value="bermudas">Bermudas e Shorts</option>
                                    <option value="casacos">Casacos e Jaquetas</option>
                                    <option value="moletom">Moletom e Suéteres</option>
                                    <option value="vestidos">Vestidos e Macacões</option>
                                    <option value="saias">Saias</option>

                                    <option value="calcados-casual">Calçados Casuais / Tênis</option>
                                    <option value="calcados-formal">Calçados Formais / Sapatos</option>
                                    <option value="sandalias">Sandálias e Chinelos</option>
                                    <option value="botas">Botas</option>

                                    <option value="acessorios">Acessórios Gerais</option>
                                    <option value="bolsas">Bolsas e Mochilas</option>
                                    <option value="carteiras">Carteiras e Cintos</option>
                                    <option value="bones">Bonés e Chapéus</option>
                                    <option value="relogios">Relógios e Joias</option>
                                    <option value="oculos">Óculos de Sol / Armações</option>

                                    <option value="eletronicos">Eletrônicos e Gadgets</option>
                                    <option value="smartphones">Smartphones e Acessórios</option>
                                    <option value="informatica">Informática e Periféricos</option>
                                    <option value="audio">Áudio e Fones de Ouvido</option>

                                    <option value="casa-decoracao">Casa e Decoração</option>
                                    <option value="cama-mesa-banho">Cama, Mesa e Banho</option>
                                    <option value="cozinha">Cozinha e Utensílios</option>

                                    <option value="beleza-cosmeticos">Beleza e Cosméticos</option>
                                    <option value="perfumaria">Perfumaria</option>
                                    <option value="cuidados-pessoais">Cuidados Pessoais</option>

                                    <option value="esporte-fitness">Esporte e Fitness</option>
                                    <option value="suplementos">Suplementos Alimentares</option>
                                    <option value="brinquedos">Brinquedos e Jogos</option>
                                    <option value="papelaria">Papelaria e Escritório</option>
                                    <option value="alimentos-bebidas">Alimentos e Bebidas</option>
                                    <option value="petshop">Pet Shop</option>
                                    <option value="ferramentas">Ferramentas e Construção</option>
                                    <option value="outros">Outros</option>
                                </select>
                            </div>

                            <div className={style.campoGrupo}>
                                <label htmlFor="status" className={style.rotulo}>
                                    Status
                                </label>
                                <select id="status" className={style.campoSelecione} defaultValue="Ativo">
                                    <option value="Ativo">Ativo</option>
                                    <option value="Inativo">Inativo</option>
                                </select>
                            </div>
                        </div>

                        <div className={style.formularioAcoes}>
                            <button type="button" className={style.botaoCancelar} onClick={Form_ativado}>
                                Cancelar
                            </button>
                            <button type="submit" className={style.botaoSalvar}>
                                Criar Produto
                            </button>
                        </div>
                    </form>

                </div>
            )}
        </div>
    )
}

export default Produtos