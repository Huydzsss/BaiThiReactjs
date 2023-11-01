import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

export default function AddPos(props) {
const [Product, setProduct] = useState("")
  const [Name, setName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  
  

  const submit = (e) => {
    e.preventDefault();

    fetch("http://localhost:7070/posts", {
      method: "POST",
      body: JSON.stringify({
        Product: Product,
        Name:Name,
        PhoneNumber :PhoneNumber,
        Email:Email
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        alert("Resgister succession");
        setProduct("");
        setName("");
        setPhoneNumber("");
        setEmail("");
      });
  };

  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
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
      <h1 style={{ color: "black" }}>Resgister</h1>
      <div style={{ width: "40%", float: "left", marginLeft: "60px" }}>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="Product" className="form-label">Product</label>
            <input
              type="text"
              value={Product}
              name="Product"
              onChange={(e) => setProduct(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">Name</label>
            <input
              type="text"
              value={Name}
              name="Name"
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="PhoneNumber" className="form-label">Phone Number</label>
            <input
              type="number"
              value={PhoneNumber}
              name="PhoneNumber"
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="form-control"
            />
            <label htmlFor="Email" className="form-label">Email</label>
            <input
              type="email"
              value={Email}
              name="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          
      
          <button type="submit" className="btn btn-primary">Register</button>
          <button type="button" className="btn btn-primary" onclick="window.history.back();">Cancel</button>
        </form>
      </div>
      <div className="container">
        <div className="row" >
          <a href="Posting">View postings</a>
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
