import { StyleSheet } from "react-native";
import { Colors, Fonts, Metrics, ApplicationStyles } from "../../Theme";

export default StyleSheet.create({
  loginButton: {
    height: 45,
    borderRadius: 20,
    backgroundColor: "transparent",
    justifyContent: "center",
    borderWidth: 0,
    borderColor: "transparent",
    width: Metrics.screenWidth * 0.8,
    alignSelf:'center'
  },
  loginText: {
    ...Fonts.medium,
    color: Colors.snow,
    textAlign: "center",
    marginVertical: Metrics.baseMargin,
    backgroundColor: "transparent",
    color:'white'
  },
  staffLoginButton: {
    height: 45,
    borderRadius: 20,
    backgroundColor: "transparent",
    justifyContent: "center",
    borderWidth: 0,
    borderColor: "transparent",
    width: Metrics.screenWidth * 0.9
  },
  staffLoginText: {
    ...Fonts.medium,
    color: Colors.snow,
    textAlign: "center",
    fontWeight: "bold",
    // marginVertical: Metrics.baseMargin,
    backgroundColor: "transparent"
  }
});
