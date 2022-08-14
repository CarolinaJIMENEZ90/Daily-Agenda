import React,{Component} from "react";
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCircleArrowDown, faCoffee, faFile, faFileCircleCheck, faMobile, faPhone } from '@fortawesome/free-solid-svg-icons'

class ContactoForm extends Component{
state={
    nombre:'',
    numero:'',
    email:''
}
onSubmint =(e)=>{
    this.props.addContacto(this.state.nombre, this.state.numero, this.state.email)
    e.preventDefault();

}
onChange =(e) =>{
    console.log(e.target.name, e.target.value)
    this.setState({
        [e.target.name]: e.target.value
    })
}
    render(){
        return(
         <div >
        <h3 >Contatos</h3>
        <br/>
        <form  onSubmit={this.onSubmint}>
       <div className="form-group row">
      <label>Nome: </label>
     <input type ="text"
                       
       name="nombre"
       id="Nombre"
      onChange={this.onChange}
      value={this.state.nombre}/>

         </div>
         <div className="form-group row">
            <label>Telefone: </label>
            <input type ="text"
             name="numero"
             id="Numero"
             onChange={this.onChange}
             value={this.state.numero}/>
             </div>

         <div className="form-group row">
             <label>Email: </label>
             <input type ="text"
              name="email"
              id="exampleInputEmail1"
              onChange={this.onChange}
              value={this.state.email}/>

         </div>
             <button type="submit" className="btn btn-primary" >Cadastrar<FontAwesomeIcon icon={faFileCircleCheck} /></button>
        </form>

        </div>
        )
    }
}
export default ContactoForm
