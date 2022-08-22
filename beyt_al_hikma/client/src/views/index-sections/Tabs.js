import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>           
            <Col className="ml-auto mr-auto" md="10" xl="5">
              <Card>
                <CardHeader>
                <img
              alt="..."
              className="n-logo"
              src={require("assets/img/post.jpg")}
            ></img>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                      <p>
                      Visite d’une délégation de l’Académie du Royaume du Maroc12-13 juillet 2022
                      </p>
                    </TabPane> </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="5">
              <Card>
                <CardHeader>
                <img
              alt="..."
              className="n-logo"
              src={require("assets/img/2.png")}
            ></img>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                      <p>
                      The Challenge of Social Change in Arab Countries
July 04-082022
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="5">
              <Card>
                <CardHeader>
                <img
              alt="..."
              className="n-logo"
              src={require("assets/img/1.jpg")}
            ></img>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                      <p>
                      Assemblée générale élective
18 juin 2022
                      </p>
                    </TabPane> </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="5">
              <Card>
                <CardHeader>
                <img
              alt="..."
              className="n-logo"
              src={require("assets/img/4.jpg")}
            ></img>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                      <p>
                      Conférence sur le thème:
La musique en Tunisie à l’époque médiévale
Par le Pr. Anis Meddeb
23 Juin 2022
                      </p>
                    </TabPane> </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Tabs;
