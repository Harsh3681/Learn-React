import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ContextApp from './ContextApp.jsx'
import RecoilApp from './RecoilApp.jsx'
import './index.css'
import AtomSelectorTodoApp from './TodoApp_with_atom_selector.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <h1 style={{display:"flex", justifyContent:"center"}}>Below by Context API</h1>
    <ContextApp />

    <h1 style={{display:"flex", justifyContent:"center"}}>Below by Recoil</h1>
    <RecoilApp />

    <h1 style={{display:"flex", justifyContent:"center"}}>TodoApp with Atom and Selector</h1>
    <h5 style={{display:"flex", justifyContent:"center"}}>we try to create TodoApp which filter todo by mentioning single name Ex. gym then search all todos contain name gym</h5>
    <AtomSelectorTodoApp />

  </StrictMode>,
)
