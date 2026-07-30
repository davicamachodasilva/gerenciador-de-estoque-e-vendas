import style from './Produtos.module.css'
import BarraPesquisa from '../components/BuscaEfiltro/BarraPesquisa'
import FormProduto from '../components/Forms/FormProduto'
import { useState } from 'react'



function Produtos() {

    const [form, setForm] = useState(false)
    const [produtos, setProdutos] = useState([])

    const Form_ativado = () => {
        setForm(!form)
    }

function receberDadosDoForm (dadosDoForm){
    console.log("Chegou as infos:", dadosDoForm)
    setProdutos((produtosAntigos) => [...produtosAntigos, dadosDoForm])
     setForm(false)
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
                {produtos.lenght === 0 ?(
                    <p>Nenhum produto cadastrado ainda.</p>
                ) : (
                    produtos.map((prod, index) =>(
                        <li key={index} className={style.Iten_Lista}>
                            <div className={style.Iten_Lista_Cima}>
                                <div className={style.Iten_Lista_Cima_infos}>
                                    <p className={style.Nome_Produto}><strong>{prod.nome}</strong></p>
                                    <p className={style.Categoria_Produto}>{prod.categoria}</p>
                                </div>
                            </div>

                            <div className={style.Iten_Lista_Meio}>
                                <div className={style.Iten_Lista_Meio_Infos}>
                                    <p className={style.Info}>Custo</p>
                                    <p className={style.info_num}>R$ {prod.precoCusto.toFixed(2)}</p>
                                </div>

                                <div className={style.Iten_Lista_Meio_Infos}>
                                    <p className={style.Info}>Venda</p>
                                    <p className={style.info_num}>R$ {prod.precoVenda.toFixed(2)}</p>
                                </div>

                                <div className={style.Iten_Lista_Meio_Infos}>
                                    <p className={style.Info}>Status</p>
                                    <p className={style.info_num}>{prod.status}</p>
                                </div>
                            </div>

                            <div className={style.Iten_Lista_Bottom}>
                                <p className={style.quant}>Estoque: {prod.estoque}</p>
                                <p className={style.quat_min}>Mínimo: {prod.minEstoque}</p>
                            </div>
                        </li>
                    ))
                 )}
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
                        <div className"Iten_Lista_Bottom_Options"> 
                         <button className"Button_Editar"></button>
               <button className"Button_Remover"></button>
               </div>
                    </div>
                </li> */}
            </ul>
            {form && (
                <FormProduto onClose={Form_ativado} onSalvar={receberDadosDoForm}/>

            )}
        </div>
    )
}

export default Produtos