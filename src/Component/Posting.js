import React, { useState } from "react";
import ProductData from "./titls/ProductData"
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { json } from "react-router-dom";

 
  export default function Posting(props) {
    const { data } = ProductData("http://localhost:7070/posts");
    const [expanded, setExpanded] = useState(false);
  
    

  return (
    <div className="container">
       <Navbar expanded={expanded} expand="lg" bg="secondary" variant="dark" className="text-uppercase fixed-top">
      <Navbar.Brand href="#home">Menu</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="About">About</Nav.Link>
          <Nav.Link href="Register">Resgister</Nav.Link>
          <Nav.Link href="Posting">Posting</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

      <div className="row">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data &&
            data.map((item) => (
              
              <div className="col" key={item.Product}>
                <div className="card">
                <img src="item.image" class="card-img-top" alt=""></img>
                  <div className="card-body">
                  <h5 className="card-title">{item.Product}</h5>
                    <h5 className="card-title">{item.Name}</h5>
                    <p className="card-text">{item.PhoneNumber}</p>
                    <p className="card-text">{item.Email}</p>
                    
                    <p ></p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            Việt Name
                            <br />
                            Hà Nội
                        </p>
                    </div>
                    
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!">Facebook<i className="fab fa-fw fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!">X<i className="fab fa-fw fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!">linked-in<i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!">youtube<i className="fab fa-fw fa-dribbble"></i></a>
                    </div>
                    
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About me</h4>
                        <p className="lead mb-0">
                            Cây nhà lá vườn
                            <a href="http://startbootstrap.com"></a>
                            .
                        </p>
                    </div>
          </div>
        </div>
      </footer>

      <div className="copyright py-4 text-center text-white">
        <div className="container"><small>Copyright &copy; Your Website 2023</small></div>
      </div>
    </div>
  );
}
