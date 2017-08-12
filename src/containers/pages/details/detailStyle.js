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
    imageView: {
        marginTop: 20,
        alignSelf: 'center',
        width: width/1.5,
        height: width/1.5
    },
    textItem: {
        fontSize: 16,
        color: '#000'
    }
});

module.exports = styles;