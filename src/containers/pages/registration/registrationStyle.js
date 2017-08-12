import {
  StyleSheet,
  Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    birthView: {
        paddingBottom: 10,
        color: '#a8a8a8',
        fontSize: 15
    },
    button: {
        marginTop: 15,
        backgroundColor: '#841584',
        borderRadius: 5,
        alignSelf: 'center',
        alignItems: 'center',
        padding: 15,
        width: width/3
    },
    imageView: {
        height: 30,
        width: 30
    }
});

module.exports = styles;