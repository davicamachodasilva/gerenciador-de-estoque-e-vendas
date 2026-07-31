import Sidebar from "./components/sidebar"
import Produtos from "./pages/Produtos"

function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <main style={{ padding: '20px', flex: 1, minWidth: 0 }}>
        <Produtos />
      </main>
    </div>
  )
}

export default App