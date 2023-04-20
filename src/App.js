import "./App.css";

// Import bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";

// Import navbar component
import Header from "./components/Header";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      {/* Image used to demonstrate react bootstrap navigation bar with framer motion.  */}
      <div className="content-placeholder">
        <Container>
        <Row className="justify-content-md-center">
            <Col xs lg="8">
              <h1 style={{ paddingTop: "200px" }}>
                React Bootstrap Framer Motion Navigation Bar Demonstration
              </h1>
              <p>Create a new react application, open a terminal window and enter the line below.</p>
              <code>npx create-react-app react-bootstrap-navbar</code>
              <p>Next change to working folder create in the first step.</p>
              <code>cd react-bootstrap-navbar</code>

              
              <p>Install the bootstrap library below in the same terminal window.</p>
              <code>npm install react-bootstrap bootstrap</code>
              <p><small><i>
                Read more: <a href="https://react-bootstrap.github.io/getting-started/introduction">https://react-bootstrap.github.io/getting-started/introduction</a>
                </i></small></p>
              <p>Don't forget to include the bootstrap styles in your react application.</p>
              <p>The following line can be included in your src/index.js or App.js file.</p>
              <code>import 'bootstrap/dist/css/bootstrap.min.css';</code>

              <p>Install the Framer Motion library below.</p>
              <code>npm install framer-motion</code>
              <p><small><i>Read more:  <a href="https://www.framer.com/motion/introduction/">https://www.framer.com/motion/introduction/</a> </i></small></p>

              <p>Next build a component and add the relevant styling.</p>

              <p>To start the application, open a new terminal and enter the line below.</p>
              <code>npm start</code>
              <p>Good to go!</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
