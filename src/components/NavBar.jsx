import React from 'react'
import { Link } from "react-router-dom";



const NavBar = () =>{ 
    return  (
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <a className="navbar-brand" href="/">
                <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/logo_white.png" width="30" height="30" alt="logo"/>
                 YourCallCenter
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse" id="navbar-list-4">

                {/* Whitout session */}
                {(false && true) && <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                        <   Link to="/AboutView" className="nav-link">About us <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ContactView" className="nav-link">Contact us <span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                    <Link to="/login" className="nav-link">Sign in <span className="sr-only">(current)</span></Link>
                    </span>
                </div> }

                {/* Admin User */}
                {(false && true) &&  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/CallView" className="nav-link">Llamar<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Llamadas
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="/CallHistoryView" className="dropdown-item"> Ver llamadas por asistente<span className="sr-only">(current)</span></Link>
                        {/* <div className="dropdown-divider"></div> */}
                        <Link to="/CallOriginView" className="dropdown-item"> Procedencia de llamadas<span className="sr-only">(current)</span></Link>
                        {/* <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div> */}
                        {/* <a className="dropdown-item" href="#">Something else here</a> */}
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Ventas
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="/SalesManagerView" className="dropdown-item">Añadir una venta<span className="sr-only">(current)</span></Link>
                        <Link to="/SalesUserView" className="dropdown-item">Añadir una venta a un asistente<span className="sr-only">(current)</span></Link>
                        <Link to="/SalesHistoryView" className="dropdown-item">Ver vetnas por asistente<span className="sr-only">(current)</span></Link>
                        <Link to="/SalesNameView" className="dropdown-item">Aprobar ventas por nombre<span className="sr-only">(current)</span></Link>
                        <Link to="/SalesNumberView" className="dropdown-item">Aprobar ventas por numero<span className="sr-only">(current)</span></Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Asistentes
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="/AssistantView" className="dropdown-item">Ver accesos<span className="sr-only">(current)</span></Link>
                        <Link to="/AddAssistantView" className="dropdown-item">Añadir asistente<span className="sr-only">(current)</span></Link>
                        <Link to="/DeleteAssistantView" className="dropdown-item">Eliminar asistente<span className="sr-only">(current)</span></Link>
                       </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Administración
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="/ReportFromView" className="dropdown-item">Llamadas por procedencia<span className="sr-only">(current)</span></Link>
                        <Link to="/ReportFromAllView" className="dropdown-item">LLamadas por procedencia (Todas)<span className="sr-only">(current)</span></Link>
                        <Link to="/ReportUserView" className="dropdown-item">LLamadas por asistente<span className="sr-only">(current)</span></Link>
                        <Link to="/PayrollReportView" className="dropdown-item">Reporte de nómina<span className="sr-only">(current)</span></Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="/BreakView" className="nav-link">Descanso<span className="sr-only">(current)</span></Link>
                    </li>
                </ul>}
               
                {/*User */}
                {(true && true) &&  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/CallView" className="nav-link">Llamar<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/CallHistoryView" className="nav-link">Historial de llamadas<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/SalesUserView" className="nav-link">Ventas<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/SalesHistoryView" className="nav-link">Segurimiento de ventas<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/BreakView" className="nav-link">Descanso<span className="sr-only">(current)</span></Link>
                    </li>
                </ul>}
               
               
                {/* Profile*/}
                {(true && true) && <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" className="rounded-circle"/>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link to="/UpdateAssistantView" className="dropdown-item">Edit Profile<span className="sr-only">(current)</span></Link>
                            <Link to="/" className="dropdown-item">Log Out<span className="sr-only">(current)</span></Link>
                        </div>
                    </li>   
                </ul>}
                {(true && true) && <span className="navbar-text">
                    David Rocha
                </span>}
            </div>
        </nav>
    );
}

export default NavBar;