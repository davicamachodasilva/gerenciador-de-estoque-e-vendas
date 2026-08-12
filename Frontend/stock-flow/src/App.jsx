import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Produtos from "./pages/Produtos";
import Clientes from "./pages/Clientes";

function App() {
  const [paginaAtual, setPaginaAtual] = useState("produtos");
  const renderizarPagina = () => {
    switch (paginaAtual) {
      case "clientes":
        return <Clientes />;
      case "produtos":
        return <Produtos />;
      default:
        return <Produtos />;
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar paginaAtual={paginaAtual} setPaginaAtual={setPaginaAtual} />
      <main style={{ padding: "20px", flex: 1, minWidth: 0 }}>
        {renderizarPagina()}
      </main>
    </div>
  );
}

export default App;
