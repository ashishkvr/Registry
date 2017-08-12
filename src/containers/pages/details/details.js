import React, { Component } from 'react';
import {
	View,
  Text,
	Button,
	Image,
	StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import styles from './detailStyle'
import { TextField } from 'react-native-material-textfield';
import Moment from 'moment';
import { Dropdown } from 'react-native-material-dropdown';

const {height, width} = Dimensions.get('window');

export default class Details extends Component {

	static navigationOptions = {
    title: 'Details',
    headerTintColor: '#fff',
    headerStyle: {
        backgroundColor: '#841584'
    },
    gesturesEnabled: false
  }

	constructor(props) {
		super(props);
		this.state = {
      object: this.props.navigation.state.params,
		}
	}

  render() {
    let { firstName, lastName, date, gender, add1, add2, city, state, country, uri } = this.state.object;
		console.log(this.state.object)
    return (
			<ScrollView style={styles.container}>
				<View>
					<Text style={styles.textItem}>Name : {firstName} {lastName}</Text>
					<Text style={styles.textItem}>DOB : {date}</Text>
					<Text style={styles.textItem}>Gender : {gender}</Text>
					<Text style={styles.textItem}>Address : {add1} {add2}</Text>
					<Text style={styles.textItem}>City : {city}</Text>
					<Text style={styles.textItem}>state : {state}</Text>
					<Text style={styles.textItem}>country : {country}</Text>
					{uri!='null'?<Image source={{uri: uri}} style={styles.imageView}/>:null}
				</View>
			</ScrollView>
		);
  }
}

