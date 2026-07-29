import Sidebar from "./components/sidebar"
import Produtos from "./pages/Produtos"

function App(){
  return(
      <div style={{display:'flex'}}>
        <Sidebar/>
        <main style={{padding:'20px', flex:1}}>
          <Produtos/>
        </main>
      </div>


  )
}

export default App