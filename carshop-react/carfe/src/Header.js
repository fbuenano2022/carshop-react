//import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState } from 'react';
import AWS from 'aws-sdk'
AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey:process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1',
  sessionToken: process.env.REACT_APP_AWS_SESSION_TOKEN
});

function Header({estadoCliente,mostrarFormularioCliente}){

    
    function LinkPrincipal(){
        const [linkActivo,setLinkActivo] = useState(false);

        const handleClick = () => {
            setLinkActivo(!linkActivo);
            console.log('llego',estadoCliente);
            if(!estadoCliente){
                mostrarFormularioCliente();
                console.log('estado' + estadoCliente)
            }
                
        };

        return(
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" onClick={handleClick} href="#">Principal</a>
            </li>
        );
    };

    return(
    <div className="container">
    <div className="row justify-content-center">
        <div className="col-lg-12">
        
            <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><i className="fas fa-car"></i> Carshop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <LinkPrincipal></LinkPrincipal>
                        <li class="nav-item">
                            <a className="nav-link" onClick="https://www.eluniverso.com/" href="#"></a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="https://www.eluniverso.com/"></a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="https://www.eluniverso.com/"></a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Texto a buscar" aria-label="Search"></input>
                    </form>
                </div>
            </div>
        </nav>

        </div>
        </div>
    </div>
    );
};

export default Header;