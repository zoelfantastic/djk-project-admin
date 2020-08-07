import React, { PureComponent } from "react";
import { withAppContext } from 'context';
import PropTypes from "prop-types";

export class HomePage extends PureComponent {
  static propTypes = {};

  render() {
    return (
      <div className="row">
        <p>home page</p>
      </div>
    );
  }
}

export default withAppContext(HomePage);
