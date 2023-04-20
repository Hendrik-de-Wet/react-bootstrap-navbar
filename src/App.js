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
        <Container className="content">
          <Row className="justify-content-md-center">
            <Col xs lg="12">
              <h1>
                React Bootstrap Framer Motion Navigation Bar
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse tempus rutrum orci, auctor interdum elit. Duis nisl
                dolor, elementum ac sem vel, consectetur porta metus. Vivamus
                sagittis odio at vehicula gravida. Vestibulum suscipit efficitur
                pretium. Vestibulum viverra nisl vel pretium vulputate. Integer
                cursus lorem nibh, non feugiat urna rhoncus quis. Proin eu odio
                convallis, condimentum nulla iaculis, egestas eros.
              </p>
              <p>
                Duis porttitor dui sed elit rutrum tempor. Sed eleifend
                pellentesque leo, ut tempus tortor ornare vel. Ut a mauris ut
                turpis iaculis consequat et ut magna. Maecenas maximus varius
                sapien, rutrum dignissim lacus fermentum eget. Proin libero mi,
                suscipit vel sapien vitae, finibus tincidunt dolor. Fusce
                convallis sodales mi ut blandit. Maecenas aliquam dolor et
                tortor aliquam, eu cursus enim malesuada. Donec dictum sit amet
                dui faucibus varius. Sed convallis gravida lacus, eu tincidunt
                nibh porttitor a. Morbi eget quam et ante molestie bibendum.
                Mauris faucibus nisi eget tincidunt pulvinar.
              </p>
              <p>
                Nulla aliquet dignissim quam vel feugiat. Vivamus nec dapibus
                lectus, eget facilisis lacus. Nam at libero ut magna semper
                rutrum. Pellentesque tortor erat, bibendum at rhoncus in,
                efficitur at leo. Phasellus vitae bibendum magna. Nulla
                vestibulum velit interdum eros vehicula, nec semper eros
                scelerisque. Curabitur et ex nibh. Sed diam nulla, auctor
                vestibulum nibh ut, condimentum commodo nunc. Sed imperdiet
                pretium nibh, id volutpat tellus tincidunt eu. Nam at aliquet
                libero. Vestibulum at erat tellus. In hac habitasse platea
                dictumst. Pellentesque vestibulum pellentesque dui, ac
                sollicitudin diam sollicitudin nec. Curabitur elementum lobortis
                enim semper malesuada. Integer enim diam, accumsan et tellus
                eget, imperdiet gravida felis.
              </p>
              <p>
                Aenean elit nisi, laoreet dignissim ex eget, sollicitudin
                viverra dolor. Curabitur tempus metus quis ligula eleifend
                lacinia. Fusce a purus accumsan, vehicula augue ac, cursus
                augue. Nunc vehicula risus id consectetur porta. Phasellus vel
                rhoncus justo. Pellentesque ultricies vitae ligula vitae porta.
                Mauris in ex finibus lectus ullamcorper pharetra et ac arcu.
                Vivamus pellentesque sem velit, at malesuada risus pharetra
                vitae. Integer molestie augue et efficitur placerat. Vivamus
                porta metus neque, pellentesque facilisis lorem dictum nec.
                Donec in venenatis felis. Aenean ligula elit, vestibulum lacinia
                lacus eget, dictum malesuada massa. Sed accumsan, dui non mattis
                lobortis, magna sem mollis diam, vel porttitor nisi odio vitae
                justo. In euismod efficitur sem, a auctor nibh ultrices id.
                Curabitur maximus velit a lectus tempor, in mattis nibh
                vehicula. Nulla quis velit arcu.
              </p>
              <p>
                Donec in purus a est congue scelerisque in sed velit. Etiam arcu
                est, accumsan accumsan tortor ac, mattis eleifend mi. Sed at
                viverra nunc. Aliquam quis ante ac ex ullamcorper euismod. Proin
                ac bibendum enim. Fusce posuere aliquet mi non imperdiet. Aenean
                euismod imperdiet ante. Cras sit amet finibus orci.
              </p>
              <p>
                Aenean elit nisi, laoreet dignissim ex eget, sollicitudin
                viverra dolor. Curabitur tempus metus quis ligula eleifend
                lacinia. Fusce a purus accumsan, vehicula augue ac, cursus
                augue. Nunc vehicula risus id consectetur porta. Phasellus vel
                rhoncus justo. Pellentesque ultricies vitae ligula vitae porta.
                Mauris in ex finibus lectus ullamcorper pharetra et ac arcu.
                Vivamus pellentesque sem velit, at malesuada risus pharetra
                vitae. Integer molestie augue et efficitur placerat. Vivamus
                porta metus neque, pellentesque facilisis lorem dictum nec.
                Donec in venenatis felis. Aenean ligula elit, vestibulum lacinia
                lacus eget, dictum malesuada massa. Sed accumsan, dui non mattis
                lobortis, magna sem mollis diam, vel porttitor nisi odio vitae
                justo. In euismod efficitur sem, a auctor nibh ultrices id.
                Curabitur maximus velit a lectus tempor, in mattis nibh
                vehicula. Nulla quis velit arcu.
              </p>
              <p>
                Donec in purus a est congue scelerisque in sed velit. Etiam arcu
                est, accumsan accumsan tortor ac, mattis eleifend mi. Sed at
                viverra nunc. Aliquam quis ante ac ex ullamcorper euismod. Proin
                ac bibendum enim. Fusce posuere aliquet mi non imperdiet. Aenean
                euismod imperdiet ante. Cras sit amet finibus orci.
              </p>
              <p>
                Aenean elit nisi, laoreet dignissim ex eget, sollicitudin
                viverra dolor. Curabitur tempus metus quis ligula eleifend
                lacinia. Fusce a purus accumsan, vehicula augue ac, cursus
                augue. Nunc vehicula risus id consectetur porta. Phasellus vel
                rhoncus justo. Pellentesque ultricies vitae ligula vitae porta.
                Mauris in ex finibus lectus ullamcorper pharetra et ac arcu.
                Vivamus pellentesque sem velit, at malesuada risus pharetra
                vitae. Integer molestie augue et efficitur placerat. Vivamus
                porta metus neque, pellentesque facilisis lorem dictum nec.
                Donec in venenatis felis. Aenean ligula elit, vestibulum lacinia
                lacus eget, dictum malesuada massa. Sed accumsan, dui non mattis
                lobortis, magna sem mollis diam, vel porttitor nisi odio vitae
                justo. In euismod efficitur sem, a auctor nibh ultrices id.
                Curabitur maximus velit a lectus tempor, in mattis nibh
                vehicula. Nulla quis velit arcu.
              </p>
              <p>
                Donec in purus a est congue scelerisque in sed velit. Etiam arcu
                est, accumsan accumsan tortor ac, mattis eleifend mi. Sed at
                viverra nunc. Aliquam quis ante ac ex ullamcorper euismod. Proin
                ac bibendum enim. Fusce posuere aliquet mi non imperdiet. Aenean
                euismod imperdiet ante. Cras sit amet finibus orci.
              </p>
              <p>
                Aenean elit nisi, laoreet dignissim ex eget, sollicitudin
                viverra dolor. Curabitur tempus metus quis ligula eleifend
                lacinia. Fusce a purus accumsan, vehicula augue ac, cursus
                augue. Nunc vehicula risus id consectetur porta. Phasellus vel
                rhoncus justo. Pellentesque ultricies vitae ligula vitae porta.
                Mauris in ex finibus lectus ullamcorper pharetra et ac arcu.
                Vivamus pellentesque sem velit, at malesuada risus pharetra
                vitae. Integer molestie augue et efficitur placerat. Vivamus
                porta metus neque, pellentesque facilisis lorem dictum nec.
                Donec in venenatis felis. Aenean ligula elit, vestibulum lacinia
                lacus eget, dictum malesuada massa. Sed accumsan, dui non mattis
                lobortis, magna sem mollis diam, vel porttitor nisi odio vitae
                justo. In euismod efficitur sem, a auctor nibh ultrices id.
                Curabitur maximus velit a lectus tempor, in mattis nibh
                vehicula. Nulla quis velit arcu.
              </p>
              <p>
                Donec in purus a est congue scelerisque in sed velit. Etiam arcu
                est, accumsan accumsan tortor ac, mattis eleifend mi. Sed at
                viverra nunc. Aliquam quis ante ac ex ullamcorper euismod. Proin
                ac bibendum enim. Fusce posuere aliquet mi non imperdiet. Aenean
                euismod imperdiet ante. Cras sit amet finibus orci.
              </p>
              <p>
                Donec in purus a est congue scelerisque in sed velit. Etiam arcu
                est, accumsan accumsan tortor ac, mattis eleifend mi. Sed at
                viverra nunc. Aliquam quis ante ac ex ullamcorper euismod. Proin
                ac bibendum enim. Fusce posuere aliquet mi non imperdiet. Aenean
                euismod imperdiet ante. Cras sit amet finibus orci.
              </p>
              <p>
                Aenean elit nisi, laoreet dignissim ex eget, sollicitudin
                viverra dolor. Curabitur tempus metus quis ligula eleifend
                lacinia. Fusce a purus accumsan, vehicula augue ac, cursus
                augue. Nunc vehicula risus id consectetur porta. Phasellus vel
                rhoncus justo. Pellentesque ultricies vitae ligula vitae porta.
                Mauris in ex finibus lectus ullamcorper pharetra et ac arcu.
                Vivamus pellentesque sem velit, at malesuada risus pharetra
                vitae. Integer molestie augue et efficitur placerat. Vivamus
                porta metus neque, pellentesque facilisis lorem dictum nec.
                Donec in venenatis felis. Aenean ligula elit, vestibulum lacinia
                lacus eget, dictum malesuada massa. Sed accumsan, dui non mattis
                lobortis, magna sem mollis diam, vel porttitor nisi odio vitae
                justo. In euismod efficitur sem, a auctor nibh ultrices id.
                Curabitur maximus velit a lectus tempor, in mattis nibh
                vehicula. Nulla quis velit arcu.
              </p>
              <p>
                Donec in purus a est congue scelerisque in sed velit. Etiam arcu
                est, accumsan accumsan tortor ac, mattis eleifend mi. Sed at
                viverra nunc. Aliquam quis ante ac ex ullamcorper euismod. Proin
                ac bibendum enim. Fusce posuere aliquet mi non imperdiet. Aenean
                euismod imperdiet ante. Cras sit amet finibus orci.
              </p>
              <p>
                Aenean elit nisi, laoreet dignissim ex eget, sollicitudin
                viverra dolor. Curabitur tempus metus quis ligula eleifend
                lacinia. Fusce a purus accumsan, vehicula augue ac, cursus
                augue. Nunc vehicula risus id consectetur porta. Phasellus vel
                rhoncus justo. Pellentesque ultricies vitae ligula vitae porta.
                Mauris in ex finibus lectus ullamcorper pharetra et ac arcu.
                Vivamus pellentesque sem velit, at malesuada risus pharetra
                vitae. Integer molestie augue et efficitur placerat. Vivamus
                porta metus neque, pellentesque facilisis lorem dictum nec.
                Donec in venenatis felis. Aenean ligula elit, vestibulum lacinia
                lacus eget, dictum malesuada massa. Sed accumsan, dui non mattis
                lobortis, magna sem mollis diam, vel porttitor nisi odio vitae
                justo. In euismod efficitur sem, a auctor nibh ultrices id.
                Curabitur maximus velit a lectus tempor, in mattis nibh
                vehicula. Nulla quis velit arcu.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
