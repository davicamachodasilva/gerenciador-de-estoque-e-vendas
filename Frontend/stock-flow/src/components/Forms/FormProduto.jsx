import style from './FormProduto.module.css'
import { useState } from 'react'

function FormProduto({ onClose, onSalvar }) {
    const [formData, setFormData] = useState({
        nome: '',
        precoCusto: '',
        precoVenda: '',
        estoque: '',
        minEstoque: '',
        categoria: '',
        status: 'Ativo'
    })
    // const [nome, setNome] = useState('')
    // const [precoCusto, setPrecoCusto] = useState('')
    // const [precoVenda, setPrecoVenda] = useState('')
    // const [estoque, setEstoque] = useState('')
    // const [minEstoque, setMinEstoque] = useState('')
    // const [categoria, setCategoria] = useState('')
    // const [status, setStatus] = useState('ativo')

    function handleChange(e) {
        const { id, value } = e.target

        setFormData((estadoAnterior) => ({
            ...estadoAnterior,
            [id]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()

        const NovoProduto = {
            id: crypto.randomUUID(),
            nome: formData.nome,
            precoCusto: Number(formData.precoCusto) || 0,
            precoVenda: Number(formData.precoVenda) || 0,
            estoque: Number(formData.estoque) || 0,
            minEstoque: Number(formData.minEstoque) || 0,
            categoria: formData.categoria || 'Outros',
            status: formData.status
        }
        onSalvar(NovoProduto)
    }
    return (
        <div>
            <div className={style.form_centro}>
                <form className={style.formularioContainer} onSubmit={handleSubmit}>
                    <div className={style.formularioCabecalho}>
                        <h2 className={style.formularioTitulo}>Novo Produto</h2>

                        <button
                            type="button"
                            className={style.botaoFechar}
                            aria-label="Fechar form"
                            onClick={onClose}
                        >
                            &times;
                        </button>
                    </div>

                    <div className={style.campoGrupoTotal}>
                        <label htmlFor="nomeProduto" className={style.rotulo}>
                            Nome do Produto
                        </label>
                        <input
                            type="text"
                            id="nome"
                            className={style.campoTexto}
                            placeholder="Ex: Camiseta Básica"
                            value={formData.nome}
                            onChange={handleChange}
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
                                value={formData.precoCusto}
                                onChange={handleChange}
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
                                value={formData.precoVenda}
                                onChange={handleChange}
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
                                id="estoque"
                                className={style.campoTexto}
                                placeholder="0"
                                value={formData.estoque}
                                onChange={handleChange}

                            />
                        </div>

                        <div className={style.campoGrupo}>
                            <label htmlFor="minimoObrigatorio" className={style.rotulo}>
                                Mínimo Obrigatório
                            </label>
                            <input
                                type="number"
                                id="minEstoque"
                                className={style.campoTexto}
                                placeholder="5"
                                value={formData.minEstoque}
                                onChange={handleChange}

                            />
                        </div>
                    </div>

                    <div className={style.linhaDupla}>
                        <div className={style.campoGrupo}>
                            <label htmlFor="categoria" className={style.rotulo}>
                                Categoria
                            </label>
                            <select id="categoria" className={style.campoSelecione} value={formData.categoria} onChange={handleChange}>
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
                            <select id="status" className={style.campoSelecione} value={formData.status} onChange={handleChange}>
                                <option value="Ativo">Ativo</option>
                                <option value="Inativo">Inativo</option>
                            </select>
                        </div>
                    </div>

                    <div className={style.formularioAcoes}>

                        <button
                            type="button"
                            className={style.botaoCancelar}
                            onClick={onClose}
                        >
                            Cancelar
                        </button>
                        <button type="submit" className={style.botaoSalvar}>
                            Criar Produto
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormProduto