import style from './Produtos.module.css'
import BarraPesquisa from '../components/BuscaEfiltro/BarraPesquisa'
import FormProduto from '../components/Forms/FormProduto'
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
               <FormProduto onClose={Form_ativado} />
            )}
        </div>
    )
}

export default Produtos