import React, { Component } from 'react';
import {
	View,
	Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import styles from './registrationStyle'
import { TextField } from 'react-native-material-textfield';

export default class Registration extends Component {

	static navigationOptions = {
    header: <Text>Registration</Text>,
    gesturesEnabled: false
  }

	constructor(props) {
		super(props);
		this.state = {
			phone: ''
		}
	}

  render() {
		let { phone } = this.state;
    return (
			<View style={styles.container}>
				<TextField
        label='First Name'
        value={phone}
        onChangeText={ (phone) => this.setState({ phone }) }
      />
			<TextField
        label='Last Name'
        value={phone}
        onChangeText={ (phone) => this.setState({ phone }) }
      />
			<TextField
        label='Date of Birth'
        value={phone}
        onChangeText={ (phone) => this.setState({ phone }) }
      />
			<TextField
        label='Gender'
        value={phone}
        onChangeText={ (phone) => this.setState({ phone }) }
      />
			<TextField
        label='Address Line 1'
        value={phone}
        onChangeText={ (phone) => this.setState({ phone }) }
      />
			<TextField
        label='Address Line 2'
        value={phone}
        onChangeText={ (phone) => this.setState({ phone }) }
      />
			</View>
    );
  }
}

