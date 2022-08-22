import React from "react";
import { useEffect, useState } from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Container,
  Col, Row
} from "reactstrap";
import InputGroup from "components/pages/InputGroup";
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DarkFooter from "components/Footers/DarkFooter";
import axios from "axios";
import PaginationSection from "views/index-sections/Pagination";
import Notifications from "views/index-sections/Notifications";

function LoginPage() {
  const [postData, setPostData] = useState({
    name: '', email: '', story: ''
});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [data, setUsers] = useState([])
  const [setFirstFocus] = React.useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
 
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    
  };

  const clear = ()=> {
    setPostData({ name: '', email: '', story: ''});
  }
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:3700/api/stories', form)
    .then(res=>{
      setMessage(res.data.message)
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 4000);
      clear();
    }).catch(err=>setErrors(err.response.data))   
  }

  useEffect(() => {
    axios.get('http://localhost:3700/api/stories').then((res) => {
      setUsers(res.data);
      console.log(201);
    }).catch(err => { console.log(err) });
  }
  );
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header clear-filter" filter-color="blue">
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + require("assets/img/house.jpg") + ")"
            }}
          ></div>

          <div className="content">

            <Container>
              <Col className="ml-auto mr-auto" md="4">
                <Card className="card-login card-plain">
                  <Form onSubmit={onSubmitHandler} className="form" >
                    <CardHeader className="text-center">
                      <h2>Tell us your story</h2>
                    </CardHeader>
                    <CardBody>
                          <InputGroup
                  type="text"
                  name="name"
                  onChange={(e) => setPostData({ ...postData, name: e.target.value })}
                  onChangeHandler={onChangeHandler}                 
                  placeholder="Name ..."
                  onFocus={() => setFirstFocus(true)}
                  onBlur={() => setFirstFocus(false)}
                />
                <p>{errors.name}</p>
                <InputGroup
                  type="text"
                  name="email"
                  onChange={(e) => setPostData({ ...postData, email: e.target.value })}
                  onChangeHandler={onChangeHandler}                 
                  placeholder="Email ..."
                  onFocus={() => setFirstFocus(true)}
                  onBlur={() => setFirstFocus(false)}
                />
                <p >{errors.email}</p>
                 <InputGroup
                  type="textarea"
                  name="story"
                  onChangeHandler={onChangeHandler}
                  onChange={(e) => setPostData({ ...postData, story: e.target.value })}
                  placeholder="Tell us your story ..."
                  onFocus={() => setFirstFocus(true)}
                  onBlur={() => setFirstFocus(false)}
                />   
                <p >{errors.story}</p>                                             
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        block
                        className="btn-round"
                        color="info"
                        type="submit"
                        size="lg"
                      >
                        Join us
                      </Button>
                     
                      <Notifications message={message} show={show}/>
                    </CardFooter>
                  </Form>
                </Card>
              </Col>
            </Container></div> </div>    <div></div>
        <div className="main">
        <div className="section section-tabs">
        <Container>
          <Row> 
          {data.map(({ name, email, story }) => (
            <PaginationSection name={name}
              email={email}
              story={story} />
          ))}
          <br></br>
          <br></br>
        </Row></Container></div></div>
        <DarkFooter></DarkFooter>

      </div>

    </>
  );
}

export default LoginPage;
