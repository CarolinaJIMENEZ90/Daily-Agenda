import React,{Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
   
   
    render(){
       
        return <div className="container-fluid">
          <nav className="navbar bg-light">
            <span  className="badge bg-secondary"><h1>Agenda de Contatos<FontAwesomeIcon icon={faPhone} /></h1></span>
            

          </nav>
        </div>
    }
    
}
export default Navbar;

