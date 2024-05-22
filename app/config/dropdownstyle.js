import { StyleSheet } from "react-native";

const styles = StyleSheet.create({ 
  dropdown: {
    height: 62,
    backgroundColor: 'white',
    borderRadius: 25,
    borderColor: '#00000',
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 1.41,
    elevation: 0,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  placeholderStyle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#D1D1D1',
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 42,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default styles;