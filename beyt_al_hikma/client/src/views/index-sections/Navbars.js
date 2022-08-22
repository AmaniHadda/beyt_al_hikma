import React from "react";

// reactstrap components
import {
  NavbarBrand,
  Navbar,
  Container,

} from "reactstrap";

// core components

function Navbars() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  return (
    <>
      <div className="section section-navbars">

        <div id="navbar">
          <div
            className="navigation-example"
            style={{
              backgroundImage: "url(" + require("assets/img/contactt.jpg") + ")"
            }}
          >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Navbar className="bg-primary" expand="lg">
              <Container>
                <div className="navbar-translate">
                  <NavbarBrand
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Adresse:25, rue de la République Carthage Hannibal 2016, Tunis
                  </NavbarBrand>
                  <button
                    onClick={() => {
                      document.documentElement.classList.toggle("nav-open");
                      setCollapseOpen(!collapseOpen);
                    }}
                    aria-expanded={collapseOpen}
                    className="navbar-toggler"
                    type="button"
                  >
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </button>
                </div>

              </Container>
            </Navbar>
            <Navbar className="bg-info" expand="lg">
              <Container>
                <div className="navbar-translate">
                  <NavbarBrand
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Téléphone: (216+) 71 277 275 - 71 731 824
                  </NavbarBrand>
                  <button
                    onClick={() => {
                      document.documentElement.classList.toggle("nav-open");
                      setCollapseOpen(!collapseOpen);
                    }}
                    aria-expanded={collapseOpen}
                    className="navbar-toggler"
                    type="button"
                  >
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </button>
                </div>

              </Container>
            </Navbar>
            <Navbar className="bg-success" expand="lg">
              <Container>
                <div className="navbar-translate">
                  <NavbarBrand
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Fax: (216+)71731204
                  </NavbarBrand>
                  <button
                    onClick={() => {
                      document.documentElement.classList.toggle("nav-open");
                      setCollapseOpen(!collapseOpen);
                    }}
                    aria-expanded={collapseOpen}
                    className="navbar-toggler"
                    type="button"
                  >
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </button>
                </div>

              </Container>
            </Navbar>
            <Navbar className="bg-warning" expand="lg">
              <Container>
                <div className="navbar-translate">
                  <NavbarBrand
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    La direction des services communs:baitelhekma@email.ati.tn
                  </NavbarBrand>
                  <button
                    onClick={() => {
                      document.documentElement.classList.toggle("nav-open");
                      setCollapseOpen(!collapseOpen);
                    }}
                    aria-expanded={collapseOpen}
                    className="navbar-toggler"
                    type="button"
                  >
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </button>
                </div>

              </Container>
            </Navbar>
            <Navbar className="bg-danger" expand="lg">
              <Container>
                <div className="navbar-translate">
                  <NavbarBrand
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    La direction de la Coordination scientifique:
                    Direction.generale@beitalhikma.tn
                  </NavbarBrand>
                  <button
                    onClick={() => {
                      document.documentElement.classList.toggle("nav-open");
                      setCollapseOpen(!collapseOpen);
                    }}
                    aria-expanded={collapseOpen}
                    className="navbar-toggler"
                    type="button"
                  >
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </button>
                </div>

              </Container>
            </Navbar>
            <Navbar className="bg-primary" expand="lg">
              <Container>
                <div className="navbar-translate">
                  <NavbarBrand
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    La direction de la communication: com@beitalhikma.tn
                  </NavbarBrand>
                  <button
                    onClick={() => {
                      document.documentElement.classList.toggle("nav-open");
                      setCollapseOpen(!collapseOpen);
                    }}
                    aria-expanded={collapseOpen}
                    className="navbar-toggler"
                    type="button"
                  >
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </button>
                </div>

              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbars;
