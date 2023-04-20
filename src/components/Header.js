import React from "react";

// React Bootstrap library used for navigation menu.
import { Container, Navbar, NavDropdown, Nav, Button } from "react-bootstrap";

// Framer motion library used for animation.
import { motion, useScroll } from "framer-motion";

const navStyles = {
  position: "fixed",
  height: "85px",
  width: "100%",
  backgroundColor: "unset",
};

const Header = () => {
  // This hook gets the scroll y-axis.
  const { scrollY } = useScroll();

  // This hook manages state.
  const [scrollAction, setScrollAction] = React.useState(false);

  // This onUpdate function will be called in the `scrollY.onChange` callback.
  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setScrollAction(false);
    } else if (scrollY?.current > 50 && scrollY?.current > scrollY?.prev) {
      setScrollAction(true);
    }
  }

  // Update the onChange callback to call for `update()`.
  React.useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    // This is the "after scroll" key and it's correlating styles.
    afterScroll: {
      zIndex: 10,
      opacity: 1,
      y: -25,
      backgroundColor: "#FFF",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      paddingLeft: "10px",
      paddingTop: "10px",
    },
    // This is the "before scroll" key and it's correlating styles.
    beforeScroll: {
      zIndex: 10,
      opacity: 1,
      y: -10,
      height: "100px",
      paddingLeft: "10px",
      paddingTop: "25px",
    },
  };

  return (
    <motion.nav // The variants object needs to be passed into the motion component.
      variants={variants}
      // Match our boolean state with these variant keys.
      animate={scrollAction ? "afterScroll" : "beforeScroll"}
      // Add a custom easing curve and duration for the animation.
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.4 }}
      // Basic nav styles.
      style={navStyles}
    >
      {/* React Boostrap navigation component.   */}
      <Navbar collapseOnSelect expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="/" className="navbar-brand">
            <p className="logo">| LOGO |</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Menu Item" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/">Item 1</NavDropdown.Item>
                <NavDropdown.Item href="/">Item 2</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/">Menu Item</Nav.Link>
              <NavDropdown title="Menu Item" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/">Item 1</NavDropdown.Item>
                <NavDropdown.Item href="/">Item 2</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="mr-auto">
              <Nav.Link href="/">Sign In</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/">
                <Button variant="btn btn-outline-secondary">Register</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.nav>
  );
};

export default Header;
