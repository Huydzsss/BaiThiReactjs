import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
function About() {
    const [expanded, setExpanded] = useState(false);
  return (
    
    <div>
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
    <div className="Container">
        <h2 style={{ textAlign : "center"}}>About us</h2>
    <img src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/358460170_2007255962961755_4646367360774206001_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yCntabI0rc8AX-lh9eG&_nc_ht=scontent.fhan14-4.fna&oh=00_AfDuHJzmZ4i-eMezy5Uyi34ajbtQJRWt0_rxvSRJNlLJpA&oe=654665E1" className="rounded-circle mb-2" style={{ width: "150px" }}
  alt="Avatar" />

<h5 className="mb-2"><strong>CEO</strong>: Huy </h5>
<p className="text-muted">Lập trình viên <span className="badge bg-primary">SUPER PRO</span></p>
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
    
)
  };
  export default About