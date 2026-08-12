import style from "./FormProduto.module.css";
import { useState } from "react";

function FormCliente({ clienteParaEditar = null, onClose, onSalvar }) {
  const editing = Boolean(clienteParaEditar);

  const [formData, setFormData] = useState({
    nome: clienteParaEditar?.nome || "",
    email: clienteParaEditar?.email || "",
    telefone: clienteParaEditar?.telefone || "",
    endereco: clienteParaEditar?.endereco || "",
  });

  function handleChange(e) {
    const { id, value } = e.target;

    setFormData((estadoAnterior) => ({
      ...estadoAnterior,
      [id]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const novoCliente = {
      id: editing ? clienteParaEditar.id : crypto.randomUUID(),
      nome: formData.nome,
      email: formData.email,
      telefone: formData.telefone,
      endereco: formData.endereco,
    };

    onSalvar(novoCliente);
  }

  return (
    <div>
      <div className={style.form_centro}>
        <form className={style.formularioContainer} onSubmit={handleSubmit}>
          <div className={style.formularioCabecalho}>
            <h2 className={style.formularioTitulo}>
              {editing ? "Editar Cliente" : "Novo Cliente"}
            </h2>

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
            <label htmlFor="nome" className={style.rotulo}>
              Nome
            </label>
            <input
              type="text"
              id="nome"
              className={style.campoTexto}
              placeholder="Nome completo"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className={style.campoGrupoTotal}>
            <label htmlFor="email" className={style.rotulo}>
              Email
            </label>
            <input
              type="email"
              id="email"
              className={style.campoTexto}
              placeholder="email@exemplo.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={style.campoGrupoTotal}>
            <label htmlFor="telefone" className={style.rotulo}>
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              className={style.campoTexto}
              placeholder="(00) 00000-0000"
              value={formData.telefone}
              onChange={handleChange}
            />
          </div>

          <div className={style.campoGrupoTotal}>
            <label htmlFor="endereco" className={style.rotulo}>
              Endereço
            </label>
            <input
              type="text"
              id="endereco"
              className={style.campoTexto}
              placeholder="Endereço completo"
              value={formData.endereco}
              onChange={handleChange}
            />
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
              {editing ? "Salvar alteração" : "Criar Cliente"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormCliente;