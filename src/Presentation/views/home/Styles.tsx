import { StyleSheet } from "react-native";
import { Colors } from "../../theme/AppTheme";

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.tertiary,
  },
  form: {
    width: '100%',
    height: '40%',
    backgroundColor: Colors.light,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30
  },
  logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '15%'
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    color: Colors.light,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold'
  },
  formText: {
    fontWeight: 'bold',
    fontSize: 16
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#AAAAAA',
    marginLeft: 15
  },
  formInput: {
    flexDirection: 'row',
    marginTop: 30
  },
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5
  },
  formRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30
  },
  formRegisterText: {
    fontStyle: 'italic',
    color: Colors.secondary,
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary,
    fontWeight: 'bold',
    marginLeft: 10
  }
});

export default HomeStyles