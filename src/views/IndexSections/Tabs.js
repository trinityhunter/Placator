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
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
} from "reactstrap";

class TabsSection extends React.Component {
  state = {
    iconTabs: 1,
    plainTabs: 1,
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  };
  render() {
    return (
      <>
        <h3 className="h4 text-success font-weight-bold mb-4">FEATURES</h3>
        <Row className="justify-content-center">
          <Col lg="6">
            {/* Tabs with icons */}
            {/* <div className="mb-3">
              <small className="text-uppercase font-weight-bold">
                With icons
              </small>
            </div> */}
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 1}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 1,
                    })}
                    onClick={(e) => this.toggleNavs(e, "iconTabs", 1)}
                    href="#pablo"
                    role="tab"
                  >
                    Satellite Imagery
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 2}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 2,
                    })}
                    onClick={(e) => this.toggleNavs(e, "iconTabs", 2)}
                    href="#pablo"
                    role="tab"
                  >
                    NDVI History
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 3}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 3,
                    })}
                    onClick={(e) => this.toggleNavs(e, "iconTabs", 3)}
                    href="#pablo"
                    role="tab"
                  >
                    Weather Data
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"iconTabs" + this.state.iconTabs}>
                  <TabPane tabId="iconTabs1">
                    <p className="description">
                      <p>
                        For all vegetation and True & False colour, our APP
                        provides:
                      </p>
                      <ul>
                        <li>Images in PNG format</li>
                        <li>Tiles in PNG format</li>
                        <li>
                          Zonal statistics for a polygon (min, max, median,
                          standart deviation, etc.)
                        </li>
                        <li>Images in GeoTIFF format</li>
                      </ul>
                    </p>
                  </TabPane>
                  <TabPane tabId="iconTabs2">
                    <p className="description">
                      Daily updating of NDVI for monitoring and analysing the
                      changes in the health and state of vegetation in your
                      field throughout the seasons. Detailed historical data for
                      analysis and comparison vegetation of one season to
                      another.{" "}
                    </p>
                    <p className="description">
                      NDVI (Normalized Difference Vegetation Index) is the most
                      common indicators for assessing vegetation progress over
                      time. It is calculated based on a combination of imageries
                      from Landsat 8 and Sentinel-2.
                    </p>
                  </TabPane>
                  <TabPane tabId="iconTabs3">
                    <p className="description">
                      Weather data for any geographic coordinates Current
                      weather, 5 days detailed forecast and historical weather
                      for any geographic coordinates.{" "}
                    </p>
                    <p className="description">
                      5-day forecast includes weather data every 3 hours. Data
                      sets include max and min air temperature, humidity, wind
                      speed, cloudness and other significant weather parameters.
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col className="mt-5 mt-lg-0" lg="6">
            {/* Menu */}
            {/* <div className="mb-3">
              <small className="text-uppercase font-weight-bold">
                With text
              </small>
            </div> */}
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 1}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 1,
                    })}
                    onClick={(e) => this.toggleNavs(e, "plainTabs", 1)}
                    href="#pablo"
                    role="tab"
                  >
                    Accumulated Parameters
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 2}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 2,
                    })}
                    onClick={(e) => this.toggleNavs(e, "plainTabs", 2)}
                    href="#pablo"
                    role="tab"
                  >
                    Soil Data
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 3}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 3,
                    })}
                    onClick={(e) => this.toggleNavs(e, "plainTabs", 3)}
                    href="#pablo"
                    role="tab"
                  >
                    UV Index
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"plainTabs" + this.state.plainTabs}>
                  <TabPane tabId="plainTabs1">
                    <p className="description">
                      Accumulated temperature and precipitation Accumulated
                      parameters are essential for predicting crop development
                      rates and maturity.{" "}
                    </p>
                    <p className="description">
                      The temperature quantity index is calculated as the sum of
                      daily temperature. The humidity quantity index is
                      expressed as the sum of daily precipitation.
                    </p>
                  </TabPane>
                  <TabPane tabId="plainTabs2">
                    <p className="description">
                      Soil data Soil temperature and moisture are essential
                      indices that allow your customer to adjust irrigation work
                      and prevent crop roots damage.
                    </p>
                  </TabPane>
                  <TabPane tabId="plainTabs3">
                    <p className="description">
                      Ultraviolet index Strength of sunburn-producing
                      ultraviolet (UV) radiation at a particular place and time.
                      Current UV index (Clear Sky), forecast and historical
                      data.
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default TabsSection;
