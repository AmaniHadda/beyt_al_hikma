import React from "react";

// reactstrap components
import { Alert, Container } from "reactstrap";

// core components

function Notifications({message, show}) {
  const [alert2, setAlert2] = React.useState(true);
  return (
    <>
      <div className="section section-notifications" >       
        <Alert color="info" isOpen={alert2} style={{display: show ? "block": "none" }}>
          <Container>
            <div className="alert-icon">
              <i className="now-ui-icons ui-2_like"></i>
            </div>
            <strong>Well done!</strong> {message} <i className="ui-2_favourite-28"></i> 
            <button
              type="button"
              className="close"
              onClick={() => setAlert2(false)}
            >
              <span aria-hidden="true">
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </span>
            </button>
          </Container>
        </Alert>
        
      </div>
    </>
  );
}

export default Notifications;
