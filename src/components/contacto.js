import React,{Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

 class contacto extends Component{
    state={
        nombre:this.props.contacto.nombre,
        numero:this.props.contacto.numero,
        email:this.props.contacto.email,
        disabled:true
    }
    handleGameClik(){
        this.setState({disabled: !this.state.disabled})
    }
  
   onSubmit= (e) =>{
    e.preventDefault();
   }

   onChange=(e)=>{
    console.log(e.target.name, e.target.value)
    this.setState({
        [e.target.name]: e.target.value
    })
   }
render(){
    const {contacto}= this.props;

    return(
        <div className= "card">
            
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4t2jyAJYR_Sohhop3ahzvIRTxS2cay0SWEw&usqp=CAU"  className="img-fluid" alt="..."  />
    
        <div className="card-body">
        <form onSubmit={this.onSubmit}>
            <h5 >Nombre</h5>
            <div >
             <input type= "text"
             id="nombre"
             onChange={this.onChange}
             name="nombre"
             value= {this.state.nombre}
             disabled= {(this.state.disabled)? "disabled": ""}/>

            </div>

            <h5 >Telefono</h5>
            <div>
             <input type= "text"
             onChange={this.onChange}
             name="numero"
             value= {this.state.numero}
             disabled= {(this.state.disabled)? "disabled": ""}/>

            </div>
            <h5 >Email</h5>
            <div>
             <input type= "text"
             onChange={this.onChange}
             name="email"
             value= {this.state.email}
             disabled= {(this.state.disabled)? "disabled": ""}/>

            </div>
            <button type="submit"onClick = {this.handleGameClik.bind(this)}
            className="btn btn-success">Editar<FontAwesomeIcon icon={faCalendarPlus} /> </button>
            {" "}
            <button type="submit" onClick = {this.props.deleteContacto.bind(this,contacto.id)}
            className="btn btn-danger" >Deletar <FontAwesomeIcon icon={faTrash} /></button>

        </form>

        </div>
        </div>
    
    )
}

}
export default contacto;