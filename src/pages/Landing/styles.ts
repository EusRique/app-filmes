import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  content: {
    flex: 1,
    height: screenHeight
  },
  
  backgroundBanner: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000'
  },

  imageBanner: {
    flex: 1,
    opacity: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#000'
  }
});

export default styles;