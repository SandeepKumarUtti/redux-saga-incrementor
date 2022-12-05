import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import {
  INCREMENT,
  DECREMENT,
  INCREMENT_IF_ODD,
  INCREMENT_ASYNC
} from "../actions/actionTypes";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function Counter({ counter, dispatch }) {
  const action = (type) => () => dispatch({ type });
  return (
    <View>
      <Button title="Up" onPress={action(INCREMENT)} />
      <Text style={styles.counter}>{counter}</Text>
      <Button title="Down" onPress={action(DECREMENT)} />
    </View>
  );
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}
Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};
const styles = StyleSheet.create({
  counter: {
    padding: 30,
    alignSelf: "center",
    fontSize: 26,
    fontWeight: "bold"
  }
});
export default connect(mapStateToProps)(Counter);
