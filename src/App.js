import React,{Component} from 'react';

import './App.css'

import contactos from './sample/contactos.json'

import Navbar from './components/nav-bar';
import Contactos from './components/Contactos';
import ContactoForm from './components/ContactoForm';

class App extends Component{
  state={
    contactos:contactos
  }
/*funcion de agregar contacto*/
  addContacto = (nombre,numero,email)=>{
  const newContacto={
    nombre:nombre,
    numero: numero,
    email: email,
    id:this.state.contactos.length
  }
  this.setState({
    contactos:[...this.state.contactos,newContacto]
  })
  }

  /*funcion de eliminar  contacto*/

  deleteContacto = (id)=> {
    const newContacto  = this.state.contactos.filter(contacto=>contacto.id !==id)
      this.setState({
        contactos: newContacto
  })
}



  render(){
    return <div>
    <Navbar
    key={contactos.id}
    searchContacto = {this.searchContacto}
    />
    <ContactoForm addContacto= {this.addContacto}/>
    <Contactos 
      contactos= {this.state.contactos}
      deleteContacto = {this.deleteContacto}/>
    </div>
  }
}
export default App;

