import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_31_592}>
        <View style={styles.View_31_593}>
          <View style={styles.View_31_1688}>
            <View style={styles.View_31_1689}>
              <View style={styles.View_31_1690} />
              <View style={styles.View_31_1691}>
                <View style={styles.View_31_1692} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
                  }}
                  style={styles.ImageBackground_31_1693}
                />
                <View style={styles.View_31_1694} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
                }}
                style={styles.ImageBackground_31_1695}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
                }}
                style={styles.ImageBackground_31_1699}
              />
              <View style={styles.View_31_1706}>
                <View style={styles.View_31_1707}>
                  <Text style={styles.Text_31_1707}>9:41</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f79e/574b/77f36fa10871da225c13f12b40ea4f62"
        }}
        style={styles.ImageBackground_31_595}
      />
      <View style={styles.View_31_1570}>
        <View style={styles.View_31_1571} />
        <View style={styles.View_31_1572}>
          <Text style={styles.Text_31_1572}>Your e-mail</Text>
        </View>
        <View style={styles.View_31_1573}>
          <Text style={styles.Text_31_1573}>E-mail</Text>
        </View>
        <View style={styles.View_31_1597}>
          <View style={styles.View_31_1599}>
            <View style={styles.View_31_1600}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e79/8e04/63b23254c8c0b17a11f6c5bcafbcbb45"
                }}
                style={styles.ImageBackground_31_1601}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0734/8a0b/f411d18fe7e56df4f737b4c9442b5dae"
                }}
                style={styles.ImageBackground_31_1604}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b85f/ec9e/38b5180b2dd3b918d8bab291959f21b0"
                }}
                style={styles.ImageBackground_31_1605}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_31_1491}>
        <View style={styles.View_31_1492} />
        <View style={styles.View_31_1493}>
          <Text style={styles.Text_31_1493}>Your password</Text>
        </View>
        <View style={styles.View_31_1494}>
          <Text style={styles.Text_31_1494}>Password</Text>
        </View>
        <View style={styles.View_31_1518}>
          <View style={styles.View_31_1520}>
            <View style={styles.View_31_1521}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e79/8e04/63b23254c8c0b17a11f6c5bcafbcbb45"
                }}
                style={styles.ImageBackground_31_1522}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0734/8a0b/f411d18fe7e56df4f737b4c9442b5dae"
                }}
                style={styles.ImageBackground_31_1525}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b85f/ec9e/38b5180b2dd3b918d8bab291959f21b0"
                }}
                style={styles.ImageBackground_31_1526}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_31_598}>
        <View style={styles.View_31_599}>
          <View style={styles.View_31_600}>
            <Text style={styles.Text_31_600}>Forgot password?</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_31_601}>
        <View style={styles.View_31_602}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98a0/f135/b54ec5481ff94b8e5566fcb38fb92f1a"
            }}
            style={styles.ImageBackground_31_603}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98a0/f135/b54ec5481ff94b8e5566fcb38fb92f1a"
            }}
            style={styles.ImageBackground_31_604}
          />
          <View style={styles.View_31_605}>
            <Text style={styles.Text_31_605}>Not a Xola customer?</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_31_606}>
        <View style={styles.View_31_607}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98a0/f135/b54ec5481ff94b8e5566fcb38fb92f1a"
            }}
            style={styles.ImageBackground_31_608}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98a0/f135/b54ec5481ff94b8e5566fcb38fb92f1a"
            }}
            style={styles.ImageBackground_31_609}
          />
          <View style={styles.View_31_610}>
            <Text style={styles.Text_31_610}>Privacy Policy</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_31_1473}>
        <View style={styles.View_31_1474}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70c8/b4a9/f39180adb58551e09ae83ce70bfc533b"
            }}
            style={styles.ImageBackground_31_1475}
          />
          <View style={styles.View_31_1476}>
            <Text style={styles.Text_31_1476}>Sign in</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_31_592: {
    width: 375,
    minWidth: 375,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_31_593: {
    width: 375,
    minWidth: 375,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1688: {
    flexGrow: 1,
    width: 375,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_1689: {
    width: 375,
    height: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1690: {
    width: 375,
    height: 44,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_31_1691: {
    width: 24.32803726196289,
    minWidth: 24.32803726196289,
    height: 11.333333015441895,
    minHeight: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336,
    top: 17.3333740234375
  },
  View_31_1692: {
    width: 22,
    minWidth: 22,
    height: 11.333333015441895,
    minHeight: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_31_1693: {
    width: 1.328037977218628,
    minWidth: 1.328037977218628,
    height: 4,
    minHeight: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 3.6666259765625
  },
  View_31_1694: {
    width: 18,
    minWidth: 18,
    height: 7.333333492279053,
    minHeight: 7.333333492279053,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 2,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_31_1695: {
    width: 15.27237606048584,
    height: 10.965571403503418,
    top: 17.3306884765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315.69384765625
  },
  ImageBackground_31_1699: {
    width: 17,
    height: 10.666666984558105,
    top: 17.6666259765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.666748046875
  },
  View_31_1706: {
    width: 54,
    minWidth: 54,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 13,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_1707: {
    width: 54,
    minWidth: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 3
  },
  Text_31_1707: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  ImageBackground_31_595: {
    width: 173,
    minWidth: 173,
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 101,
    top: 93
  },
  View_31_1570: {
    width: 316,
    minWidth: 316,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.5,
    top: 233,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_1571: {
    width: 316,
    minWidth: 316,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(224, 227, 231, 1)",
    borderWidth: 1
  },
  View_31_1572: {
    width: 86,
    minWidth: 86,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 44
  },
  Text_31_1572: {
    color: "rgba(80, 82, 84, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1573: {
    width: 53,
    minWidth: 53,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_31_1573: {
    color: "rgba(34, 35, 36, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1597: {
    width: 18,
    height: 18,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 298,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_1599: {
    width: 16.174495697021484,
    minWidth: 16.174495697021484,
    height: 16.174495697021484,
    minHeight: 16.174495697021484,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.9248046875,
    top: 0.900634765625
  },
  View_31_1600: {
    width: 16.174495697021484,
    height: 16.174495697021484,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_31_1601: {
    width: 16.174495697021484,
    height: 16.174495697021484,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_31_1604: {
    width: 2,
    height: 2,
    top: 4.099365234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.0751953125
  },
  ImageBackground_31_1605: {
    width: 1.2120766639709473,
    height: 5.200000286102295,
    top: 6.99932861328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.47509765625
  },
  View_31_1491: {
    width: 316,
    minWidth: 316,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.5,
    top: 338,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_1492: {
    width: 316,
    minWidth: 316,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(224, 227, 231, 1)",
    borderWidth: 1
  },
  View_31_1493: {
    width: 111,
    minWidth: 111,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 44
  },
  Text_31_1493: {
    color: "rgba(80, 82, 84, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1494: {
    width: 81,
    minWidth: 81,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_31_1494: {
    color: "rgba(34, 35, 36, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1518: {
    width: 18,
    height: 18,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 298,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_1520: {
    width: 16.174495697021484,
    minWidth: 16.174495697021484,
    height: 16.174495697021484,
    minHeight: 16.174495697021484,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.9248046875,
    top: 0.900634765625
  },
  View_31_1521: {
    width: 16.174495697021484,
    height: 16.174495697021484,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_31_1522: {
    width: 16.174495697021484,
    height: 16.174495697021484,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_31_1525: {
    width: 2,
    height: 2,
    top: 4.099365234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.0751953125
  },
  ImageBackground_31_1526: {
    width: 1.2120766639709473,
    height: 5.200000286102295,
    top: 6.99932861328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.47509765625
  },
  View_31_598: {
    width: 133,
    minWidth: 133,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 121,
    top: 510
  },
  View_31_599: {
    width: 133,
    minWidth: 133,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_600: {
    width: 131,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.5,
    top: 0
  },
  Text_31_600: {
    color: "rgba(19, 82, 198, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_601: {
    width: 375,
    minWidth: 375,
    height: 54,
    minHeight: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 706
  },
  View_31_602: {
    width: 375,
    minWidth: 375,
    height: 54,
    minHeight: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_31_603: {
    width: 375,
    height: 2,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_31_604: {
    width: 375,
    height: 1,
    top: 52.100006103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_31_605: {
    width: 155,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 110.5,
    top: 17
  },
  Text_31_605: {
    color: "rgba(80, 82, 84, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_606: {
    width: 375,
    minWidth: 375,
    height: 54,
    minHeight: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 758
  },
  View_31_607: {
    width: 375,
    minWidth: 375,
    height: 54,
    minHeight: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_31_608: {
    width: 375,
    height: 2,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_31_609: {
    width: 375,
    height: 1,
    top: 52.100006103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_31_610: {
    width: 102,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 136.5,
    top: 17
  },
  Text_31_610: {
    color: "rgba(80, 82, 84, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1473: {
    width: 268,
    minWidth: 268,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 54,
    top: 444,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_1474: {
    width: 268,
    height: 50,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_31_1475: {
    width: 268,
    height: 50,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_31_1476: {
    width: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 105.64990234375,
    top: 14
  },
  Text_31_1476: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
