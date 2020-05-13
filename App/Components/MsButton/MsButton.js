import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { Alert } from "react-native";
import styles from "./MsButtonStyle";
import { Button } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";

export default class MsButton extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render() {
    return (
      <Button
        {...this.props}
        buttonStyle={[this.props.style, styles.loginButton]}
        titleStyle={styles.loginText}
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: ["#031660", "#031660"],
          start: { x: 0, y: 0 },
          end: { x: 0, y: 1 }
        }}
      />
    );
  }
}
