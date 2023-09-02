import { StyleSheet } from "react-native";

import colors from "@/utils/colors";
import fonts from "@/utils/fonts";

const styles = StyleSheet.create({
  SafeAreaView: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.gray000,
    display: "flex",
    paddingVertical: 40,
    flexDirection: "column",
    alignItems: "center",
    gap: 36,
  },
  top: {
    display: "flex",
    paddingHorizontal: 24,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  profileImage: {
    width: 42,
    height: 42,
    borderRadius: 42,
    borderColor: colors.gray100,
    borderWidth: 1,
    backgroundColor: colors.gray100,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  topLeft: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    flexDirection: "row",
  },
  iconText: {
    fontFamily: fonts(600),
    fontSize: 28,
    fontStyle: "normal",
  },
  topNames: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 4,
  },
  topName: {
    fontFamily: fonts(700),
    fontSize: 20,
    fontStyle: "normal",
    color: colors.gray900,
  },
  topNumber: {
    fontFamily: fonts(500),
    fontSize: 12,
    fontStyle: "normal",
    color: colors.gray500,
  },
  calling: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 36,
    alignSelf: "stretch",
    width: "100%",
  },
  callingTop: {
    width: "100%",
    display: "flex",
    paddingHorizontal: 24,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
    alignSelf: "stretch",
  },
  mission: {
    fontFamily: fonts(500),
    fontSize: 18,
    color: colors.gray900,
    fontStyle: "normal",
  },
  success: {
    fontFamily: fonts(700),
    fontSize: 24,
    fontStyle: "normal",
  },
  todayToo: {
    color: colors.blue,
    fontFamily: fonts(600),
    fontSize: 18,
    fontStyle: "normal",
  },
  callingBottom: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 24,
  },
  circle: {
    borderRadius: 28,
    overflow: "hidden",
  },
  circleInner: {
    width: 28,
    height: 28,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  callingDate: {
    color: colors.gray500,
    fontFamily: fonts(500),
    fontSize: 12,
    fontStyle: "normal",
  },
  dates: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
  },
  line: {
    width: "100%",
    height: 2,
    backgroundColor: colors.gray400,
    position: "absolute",
    top: 14,
  },
  now: {
    display: "flex",
    paddingHorizontal: 24,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 18,
    alignSelf: "stretch",
  },
  nowTitle: {
    fontFamily: fonts(700),
    fontSize: 20,
    fontStyle: "normal",
  },
  nowBottom: {
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-start",
    gap: 12,
    alignSelf: "stretch",
  },
  nowBottomTop: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 4,
  },
  nowBottomTopTitle: {
    color: colors.gray700,
    fontFamily: fonts(600),
    fontSize: 16,
    fontStyle: "normal",
  },
  nowBottomBottom: {
    display: "flex",
    paddingVertical: 12,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.gray300,
    backgroundColor: colors.gray100,
  },
  nowBottomTopDate: {
    color: colors.gray400,
    fontSize: 12,
    fontFamily: fonts(500),
    fontStyle: "normal",
  }
});

export default styles;