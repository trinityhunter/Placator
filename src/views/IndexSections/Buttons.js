/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class BasicElements extends React.Component {
  render() {
    return (
      <>
        <section
          className="section section-components pb-0"
          id="section-components"
        >
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                {/* Basic elements */}
                <h1 className="mb-5">PROBLEM STATEMENT</h1>
                {/* Buttons */}
                {/* <h3 className="h4 text-success font-weight-bold mb-4">
                  
                </h3> */}
                {/* Button styles */}
                <div>
                  <h5>
                    The annual death rate of newly planted trees in the Odisha
                    city is high. Odisha forest department’s tree plantation
                    activities did not lead to an improvement of degraded forest
                    area or forest cover to its full potential due to the lack
                    of a database of degraded forest and non-forest land,
                    according to the department’s performance audit by the
                    Comptroller and Auditor General of India (CAG).{" "}
                  </h5>
                  <h5>
                    The lack of coordination and care led to degradation of
                    planted saplings. The year wise growth and survival
                    percentages could not be confirmed, which is the sole factor
                    for assessing the success of the plantations. This indicated
                    deficiency in monitoring and evaluation of plantations, the
                    audit report said.{" "}
                  </h5>
                  <h5>
                    Many initiatives were taken by government to promote farm
                    forestry to reduce soil erosion and other environmental
                    effects on the plants. But due to lack of care and attention
                    to each plated samplings led to its degradation. During the
                    first season, many trees perish. The first year of living at
                    the new location is crucial. The root structure of the tree
                    is disrupted regardless of whether it is planted bare-root,
                    in a container.
                  </h5>{" "}
                  <h5>
                    The district, which was once known for its vast variety of
                    flora and fauna, now presents a very disappointing picture
                    of receding green cover and loss of faunal beauty, many of
                    which have disappeared permanently. The trees to be planted
                    in the district would empower the tribals to regain a steady
                    source of income and reduce the dependency on their
                    landlords.
                  </h5>
                  {/* <Button color="primary" type="button">
                    Button
                  </Button>
                  <Button
                    className="btn-icon btn-3 ml-1"
                    color="primary"
                    type="button"
                  >
                    <span className="btn-inner--icon mr-1">
                      <i className="ni ni-bag-17" />
                    </span>
                    <span className="btn-inner--text">With icon</span>
                  </Button>
                  <Button
                    className="btn-icon btn-2 ml-1"
                    color="primary"
                    type="button"
                  >
                    <span className="btn-inner--icon">
                      <i className="ni ni-bag-17" />
                    </span>
                  </Button> */}
                  {/* Button wizes */}
                  {/* <div className="mb-3 mt-5">
                    <small className="text-uppercase font-weight-bold">
                      Pick your size
                    </small>
                  </div> */}
                  {/* <Button color="primary" size="sm" type="button">
                    Small
                  </Button>
                  <Button className="btn-1 ml-1" color="primary" type="button">
                    Regular
                  </Button> */}
                  {/* <Button
                    color="primary"
                    size="lg"
                    type="button"
                    className="ml-1"
                  >
                    Large Button
                  </Button> */}
                </div>
                {/* Button colors */}
                <div className="mb-3 mt-5">
                  {/* <small className="text-uppercase font-weight-bold">
                    Pick your color
                  </small> */}
                </div>
                {/* <Button className="btn-1" color="primary" type="button">
                  Primary
                </Button>
                <Button className="btn-1 ml-1" color="info" type="button">
                  Info
                </Button>
                <Button className="btn-1 ml-1" color="success" type="button">
                  Success
                </Button>
                <Button className="btn-1 ml-1" color="warning" type="button">
                  Warning
                </Button>
                <Button className="btn-1 ml-1" color="danger" type="button">
                  Danger
                </Button> */}
                {/* <Button
                  className="btn-1 btn-neutral ml-1"
                  color="default"
                  type="button"
                >
                  Neutral
                </Button>
                <div className="mb-3 mt-5">
                  <small className="text-uppercase font-weight-bold">
                    Outline
                  </small>
                </div>
                <Button className="btn-1" color="primary" outline type="button">
                  Outline-primary
                </Button>
                <Button
                  className="btn-1 ml-1"
                  color="info"
                  outline
                  type="button"
                >
                  Outline-info
                </Button> */}
                {/* <Button
                  className="btn-1 ml-1"
                  color="success"
                  outline
                  type="button"
                >
                  Outline-success
                </Button>
                <Button
                  className="btn-1 ml-1"
                  color="warning"
                  outline
                  type="button"
                >
                  Outline-warning
                </Button>
                <Button
                  className="btn-1 ml-1"
                  color="danger"
                  outline
                  type="button"
                >
                  Outline-danger
                </Button> */}
                {/* Button links */}
                <div className="mb-3 mt-5">
                  {/* <small className="text-uppercase font-weight-bold">
                    Links
                  </small> */}
                </div>
                {/* <Button
                  className="text-default"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Default
                </Button>
                <Button
                  className="text-primary ml-1"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Primary
                </Button>
                <Button
                  className="text-info ml-1"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Info
                </Button> */}
                {/* <Button
                  className="text-success ml-1"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Success
                </Button>
                <Button
                  className="text-warning ml-1"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Warning
                </Button>
                <Button
                  className="text-danger ml-1"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Danger
                </Button> */}
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default BasicElements;
