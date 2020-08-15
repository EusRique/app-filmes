import { StyleSheet, Dimensions } from 'react-native';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');


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
  },  

  carouselSlideView: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center'
  },

  carousel: {
    flex: 1,
    overflow: 'visible'
  },

  carouselImage: {
    alignSelf: 'center',
    width: 200,
    height: 300,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },

  carouselText: {
    padding: 15,
    color: '#FFF',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontFamily: 'Poppins_600SemiBold'
  },

  carouselIcon: {
    position: 'absolute',
    top: 15,
    right: 15
  },

  moreInfo: {
    backgroundColor: '#FFF',
    width: screenWidth,
    height: screenHeight,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  moreInfoItems: {
    marginTop: 10
  },

  movieTitle: {
    paddingLeft: 15,
    fontSize: 22,
    fontFamily: 'Poppins_600SemiBold',
    color: '#131313',
    marginBottom: 5
  },

  movieDescription: {
    paddingLeft: 15,
    fontSize: 14,
    fontFamily: 'Poppins_400SemiBold',
    color: '#131313'
  },

  carouselIconItems: {
    marginRight: 15,
    marginTop: 10
  }
});

export default styles;