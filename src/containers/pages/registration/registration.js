import React, { Component } from 'react';
import {
	View,
  Text,
  Button,
  Image,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  AsyncStorage,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import DatePicker from 'react-native-datepicker'
import styles from './registrationStyle'
import { TextField } from 'react-native-material-textfield';
import Moment from 'moment';
import { Dropdown } from 'react-native-material-dropdown';
import SplashScreen from 'react-native-splash-screen';

const {height, width} = Dimensions.get('window');

export default class Registration extends Component {

  constructor(props) {
		super(props);
		this.state = {
      navigate: this.props.navigation.navigate,
      firstName: '',
      lastName: '',
      gender: '',
      add1: '',
      add2: '',
      city: '',
      state: '',
      country: '',
      value: 0,
      date: '',
      uri: ''
    }
    this._onSubmit= this._onSubmit.bind(this);
    this.selectPhotoTapped= this.selectPhotoTapped.bind(this);
	}
	static navigationOptions = {
    title: 'Registration',
    headerTintColor: '#fff',
    headerStyle: {
        backgroundColor: '#841584'
    },
    gesturesEnabled: false
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
        this.setState({ uri: source.uri})
      }
    });
  }


  _onSubmit() {
    let object = this.state;
    let { errors = {}, firstName, lastName, date, gender, add1, add2, city, state, country, uri } = this.state;
    if(firstName!=''&& lastName!='' && date!='' && gender!='' && add1!='' && add2!=''&& city!=''&& state!=''&& country!=''&& uri!='')
    {
      this.state.navigate('details',{
      ...object
      })
    } else {
      Alert.alert('','Please fill all the details.',
          [{text: 'OK'}],
          {cancelable: false})
    }
  }

  componentDidMount() {
    SplashScreen.hide();
		AsyncStorage.getItem("myValue").then((value) => {
								this.setState({"myValue": JSON.parse(value)});
						}).done();
	}

  render() {
    let { errors = {}, firstName, lastName, date, gender, add1, add2, city, state, country, uri } = this.state;
    let data = [{
      value: 'Male',
    }, {
      value: 'Female',
    }];
    return (
			<ScrollView>
          <View style={styles.container}>
            <TextField
            label='First Name'
            value={firstName}
            error={errors.firstName}
            onChangeText={ (firstName) => this.setState({ firstName }) }
            />
          <TextField
            label='Last Name'
            error={errors.lastName}
            value={lastName}
            onChangeText={ (lastName) => this.setState({ lastName }) }
          />
          <View style={{paddingTop: 20}}>
            <Text style={styles.birthView}>Date of Birth</Text>
            <DatePicker
              style={{width: width/1.3}}
              date={this.state.date}
              mode="date"
              placeholder="Date Of Birth"
              format="YYYY-MM-DD"
              maxDate="2016-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onDateChange={(date) => {this.setState({date: date});}}
            />
          </View>
          <View style={{width:width/2}}>
            <Dropdown
              onChangeText={(gender) => this.setState({gender})}
              shadeOpacity={.12}
              label='Gender'
              data={data}
            />
          </View>
          <TextField
            label='Address Line 1'
            value={add1}
            error={errors.add1}
            onChangeText={ (add1) => this.setState({ add1 }) }
          />
          <TextField
            label='Address Line 2'
            value={add2}
            error={errors.add2}
            onChangeText={ (add2) => this.setState({ add2 }) }
          />
          <TextField
            label='City'
            value={city}
            error={errors.city}
            onChangeText={ (city) => this.setState({ city }) }
          />

          <TextField
            label='State'
            value={state}
            error={errors.state}
            onChangeText={ (state) => this.setState({ state }) }
          />
          <TextField
            label='Country'
            value={country}
            error={errors.country}
            onChangeText={ (country) => this.setState({ country }) }
          />
          <View style={{flexDirection: 'row',marginTop:20}}>
            <Text style={{marginRight: 10, color: '#a8a8a8',fontSize: 15}}> Image Uplaod</Text>
            <TouchableOpacity onPress={this.selectPhotoTapped}>
              <Image style={styles.imageView} source={require('../../utils/images/image-upload.png')}/>
            </TouchableOpacity>
            {uri!=''?
            <Image style={{height: 20, width: 20,marginRight: 0}} source={require('../../utils/images/images.png')}/>:null}
          </View>
          <TouchableOpacity style={styles.button} onPress={this._onSubmit}>
            <Text style={{color: '#fff'}}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
			</ScrollView>
    );
  }
}

