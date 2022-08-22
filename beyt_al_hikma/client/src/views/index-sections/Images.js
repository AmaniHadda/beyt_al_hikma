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

function Images() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-images">
      <div id="aboutus">
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
                    <h2> On the Palace Housing the Tunisian Academy Beït al-Hikma</h2>

<h3>Historical Background at a Glance</h3>
                      <p>
                      The present-day palace housing the Tunisian Academy Beït al-Hikma was built in the middle of the 19th century during the Husseinite era and was called Zarrouk Palace. The palace was erected on an ancient archaeological site at the foot of the Carthage hill next to Antonius Thermae overlooking the sea. Besides, the Arabic word Dermech had its origin from the Latin inscription thermis designating the site itself, and later the whole neighbourhood where the palace would be erected.

During an archaeological expedition in 1873-1874, De Sainte Marie claimed that he saw two palaces between the sea and the Byrsa hill : One belonged to Mustapha Ben Smaïl and the other to Ahmed Zarrouk. Both palaces had probably been erected on section number XVIII marking the maritime boundary of the Augustinian city. Within twenty meters from that place, a Phoenician community had settled in the Magon area during the 5th century BC.

During the same archaeological expedition De Sainte Marie discovered a huge statue representing the Empress Sabina, dating back to the 1st century AD, as well as votive inscriptions to Jupiter Serapis.

General Ahmed Zarrouk, son-in-law of Ali Bey and minister of war, built the present day palace in an Italianized architectural style, and made of it his private residence. Historian Ahmed Ibn Abi Dhiaf noted in his correspondence with Kheireddine : «M’Hamed Bey gave a plot of land with several warehouses makhzan on it and a well to General (Emir Liwa) Sidi Ahmed Zarrouk near the farm of Sidi lamine Bey, brother of Ahmed Pacha the first and urged him to build a castle borj».





  </p>
                    </TabPane>
                    
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
           
          </Row>
        
        </Container>
      </div>
      </div>
    </>
  );
}

export default Images;
