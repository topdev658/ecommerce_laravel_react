import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import Privacy from "../components/others/Privacy";

class PrivacyPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <NavMenuDesktop />
        <Privacy />
        <FooterDesktop />
      </Fragment>
    );
  }
}

export default PrivacyPage;
