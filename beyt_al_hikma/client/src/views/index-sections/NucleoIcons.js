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

function NucleoIcons() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    
    <>
     <div id="members">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="25" xl="25">
              <Card>
            
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                    <h2>Academy Members</h2>
                    <img
              alt="..."
              className="n-logo"
              src={require("assets/img/presidents.PNG")}
            ></img>
                    </TabPane>
                    
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
           
          </Row>
        
        </Container>
      </div>
    </>
  );
}

export default NucleoIcons;
