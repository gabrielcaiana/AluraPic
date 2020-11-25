import Cadastro from "./components/cadastro/Cadastro"
import Home from "./components/home/Home"

export const routes = [
 { path: "", name: 'home',  component: Home, titulo: "Home" },
 { path: "/cadastro", name: 'cadastro', component: Cadastro, titulo: "Cadastro"},
 {path: '*', component: Home}
]