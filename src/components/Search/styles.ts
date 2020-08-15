import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  
  viewSearch: {
    marginTop: 50,
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center'
  },

  input: {
    width: '90%',
    padding: 13,
    paddingLeft: 20,
    fontSize: 17
  },

  icon: {
    position: 'absolute',
    right: 20,
    top: 15
  },

  title: {
    color: '#FFF',
    fontSize: 25,
    fontFamily: 'Poppins_600SemiBold',
    marginLeft: 10,
    marginVertical: 10
  },

  slideView: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles;