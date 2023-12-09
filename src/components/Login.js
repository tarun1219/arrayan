
import React, { useRef, useState } from "react";
import {
  Form,
  Button,
  Card,
  Alert,
  Container,
  Row,
  Col,
  Input,
  CardHeader,
  CardImg,
  CardBody,
  CardTitle,
  CardFooter,
} from "reactstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, googleSignIn } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log(emailRef.current.value, passwordRef.current.value);
    e.preventDefault();
    setError("");
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="page-header">
          <div className="content">
            <Container>
              <Row>
                <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                  <Card className="card-register">
                    <CardHeader>
                      <CardImg
                        alt="..."
                        src={require("../assets/img/square1.png")}
                      />
                      <CardTitle tag="h3">Login</CardTitle>
                    </CardHeader>
                    <CardBody>
                      {error && (
                        <Alert
                          variant="danger"
                          style={{ backgroundColor: "red" }}
                        >
                          {error}
                        </Alert>
                      )}
                      <Form className="form" onSubmit={handleSubmit}>
                        <Input
                          innerRef={emailRef}
                          placeholder="Email"
                          type="text"
                        />
                        
                        <Input
                          style={{ marginTop: "1rem" }}
                          innerRef={passwordRef}
                          placeholder="Password"
                          type="password"
                        />
                      </Form>
                    </CardBody>
                    <CardFooter>
                      <Button
                        disabled={loading}
                        className="btn-round"
                        color="info"
                        size="lg"
                        onClick={handleSubmit}
                      >
                        Login
                      </Button>
                    </CardFooter>
                    <CardFooter>
                    <div style={{ margin: '0 auto', textAlign: 'center' }}>
                      <GoogleButton
                        className="g-btn"
                        type="dark"
                        onClick={handleGoogleSignIn}
                      />
                    </div>
                    </CardFooter>
                  </Card>
                  {/* <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Label>Email</Label>
                <Input type="email" ref={emailRef} required />
           
                <Label>Password</Label>
                <Input type="password" ref={passwordRef} required />
           
              <Button disabled={loading} className="w-100" type="submit">
                Log In
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </Card.Body>
        </Card> */}
                  <div className="text-center">
                    <Link to="/forgot-password">Forgot Password?</Link>
                  </div>
                  <div className="w-100 text-center mt-2">
                    Need an account? <Link to="/register">Sign Up</Link>
                  </div>
                  <div className="w-100 text-center mt-2">
                    Farmer? <Link to="/adminlogin">Login</Link>
                  </div>
                </Col>
                <Col>
                  <img
                    width={"70%"}
                    style={{ float: "right" }}
                    alt="..."
                    className="img-fluid"
                    src={require("../assets/img/coffee.png")}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}