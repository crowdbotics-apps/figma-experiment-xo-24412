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
      <View style={styles.View_31_613}>
        <View style={styles.View_31_614}>
          <View style={styles.View_31_1453}>
            <View style={styles.View_31_1454}>
              <View style={styles.View_31_1455} />
              <View style={styles.View_31_1456}>
                <View style={styles.View_31_1457} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
                  }}
                  style={styles.ImageBackground_31_1458}
                />
                <View style={styles.View_31_1459} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
                }}
                style={styles.ImageBackground_31_1460}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
                }}
                style={styles.ImageBackground_31_1464}
              />
              <View style={styles.View_31_1471}>
                <View style={styles.View_31_1472}>
                  <Text style={styles.Text_31_1472}>9:41</Text>
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
        style={styles.ImageBackground_31_616}
      />
      <View style={styles.View_31_617}>
        <View style={styles.View_31_618}>
          <View style={styles.View_31_619} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/afc1/66e5/244c47a032622c083241aa3343a2c35e"
            }}
            style={styles.ImageBackground_31_620}
          />
          <View style={styles.View_31_621}>
            <Text style={styles.Text_31_621}>a@d.co</Text>
          </View>
        </View>
        <View style={styles.View_31_622}>
          <Text style={styles.Text_31_622}>
            Sorry we don’t recognize that e-mail
          </Text>
        </View>
        <View style={styles.View_31_623}>
          <Text style={styles.Text_31_623}>E-mail</Text>
        </View>
        <View style={styles.View_31_1415}>
          <View style={styles.View_31_1417}>
            <View style={styles.View_31_1418}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e79/8e04/63b23254c8c0b17a11f6c5bcafbcbb45"
                }}
                style={styles.ImageBackground_31_1419}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0734/8a0b/f411d18fe7e56df4f737b4c9442b5dae"
                }}
                style={styles.ImageBackground_31_1422}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b85f/ec9e/38b5180b2dd3b918d8bab291959f21b0"
                }}
                style={styles.ImageBackground_31_1423}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_31_1295}>
        <View style={styles.View_31_1296}>
          <View style={styles.View_31_1297} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/afc1/66e5/244c47a032622c083241aa3343a2c35e"
            }}
            style={styles.ImageBackground_31_1298}
          />
          <View style={styles.View_31_1299}>
            <Text style={styles.Text_31_1299}>--------</Text>
          </View>
        </View>
        <View style={styles.View_31_1300}>
          <Text style={styles.Text_31_1300}>
            Incorrect password, please try again
          </Text>
        </View>
        <View style={styles.View_31_1301}>
          <Text style={styles.Text_31_1301}>Password</Text>
        </View>
        <View style={styles.View_31_1325}>
          <View style={styles.View_31_1327}>
            <View style={styles.View_31_1328}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e79/8e04/63b23254c8c0b17a11f6c5bcafbcbb45"
                }}
                style={styles.ImageBackground_31_1329}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0734/8a0b/f411d18fe7e56df4f737b4c9442b5dae"
                }}
                style={styles.ImageBackground_31_1332}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b85f/ec9e/38b5180b2dd3b918d8bab291959f21b0"
                }}
                style={styles.ImageBackground_31_1333}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_31_1277}>
        <View style={styles.View_31_1278}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70c8/b4a9/f39180adb58551e09ae83ce70bfc533b"
            }}
            style={styles.ImageBackground_31_1279}
          />
          <View style={styles.View_31_1280}>
            <Text style={styles.Text_31_1280}>Sign in</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_31_627}>
        <Text style={styles.Text_31_627}>Forgot password?</Text>
      </View>
      <View style={styles.View_31_628}>
        <View style={styles.View_31_629}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98a0/f135/b54ec5481ff94b8e5566fcb38fb92f1a"
            }}
            style={styles.ImageBackground_31_630}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98a0/f135/b54ec5481ff94b8e5566fcb38fb92f1a"
            }}
            style={styles.ImageBackground_31_631}
          />
          <View style={styles.View_31_632}>
            <Text style={styles.Text_31_632}>Not a Xola customer?</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_31_633}>
        <View style={styles.View_31_634}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98a0/f135/b54ec5481ff94b8e5566fcb38fb92f1a"
            }}
            style={styles.ImageBackground_31_635}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98a0/f135/b54ec5481ff94b8e5566fcb38fb92f1a"
            }}
            style={styles.ImageBackground_31_636}
          />
          <View style={styles.View_31_637}>
            <Text style={styles.Text_31_637}>Privacy Policy</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_31_613: {
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
  View_31_614: {
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
  View_31_1453: {
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
  View_31_1454: {
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
  View_31_1455: {
    width: 375,
    height: 44,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_31_1456: {
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
  View_31_1457: {
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
  ImageBackground_31_1458: {
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
  View_31_1459: {
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
  ImageBackground_31_1460: {
    width: 15.27237606048584,
    height: 10.965571403503418,
    top: 17.3306884765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315.6937255859375
  },
  ImageBackground_31_1464: {
    width: 17,
    height: 10.666666984558105,
    top: 17.6666259765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.6666259765625
  },
  View_31_1471: {
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
  View_31_1472: {
    width: 54,
    minWidth: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 3
  },
  Text_31_1472: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  ImageBackground_31_616: {
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
  View_31_617: {
    width: 316,
    minWidth: 316,
    height: 110,
    minHeight: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.5,
    top: 233
  },
  View_31_618: {
    width: 316,
    height: 50,
    top: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_31_619: {
    width: 316,
    height: 50,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 90, 90, 1)",
    borderWidth: 1
  },
  ImageBackground_31_620: {
    width: 1,
    height: 31,
    top: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76
  },
  View_31_621: {
    width: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 14
  },
  Text_31_621: {
    color: "rgba(34, 35, 36, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_622: {
    width: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 105,
    top: 88
  },
  Text_31_622: {
    color: "rgba(255, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_623: {
    width: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_31_623: {
    color: "rgba(255, 90, 90, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1415: {
    width: 18,
    height: 18,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 298,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_1417: {
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
  View_31_1418: {
    width: 16.174495697021484,
    height: 16.174495697021484,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_31_1419: {
    width: 16.174495697021484,
    height: 16.174495697021484,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_31_1422: {
    width: 2,
    height: 2,
    top: 4.099365234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.0751953125
  },
  ImageBackground_31_1423: {
    width: 1.2120766639709473,
    height: 5.200000286102295,
    top: 6.99932861328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.4752197265625
  },
  View_31_1295: {
    width: 316,
    minWidth: 316,
    height: 110,
    minHeight: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.5,
    top: 361
  },
  View_31_1296: {
    width: 316,
    height: 50,
    top: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_31_1297: {
    width: 316,
    height: 50,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 90, 90, 1)",
    borderWidth: 1
  },
  ImageBackground_31_1298: {
    width: 1,
    height: 31,
    top: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76
  },
  View_31_1299: {
    width: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 14
  },
  Text_31_1299: {
    color: "rgba(34, 35, 36, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1300: {
    width: 209,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 105,
    top: 88
  },
  Text_31_1300: {
    color: "rgba(255, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1301: {
    width: 81,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_31_1301: {
    color: "rgba(255, 90, 90, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1325: {
    width: 18,
    height: 18,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 298,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_1327: {
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
  View_31_1328: {
    width: 16.174495697021484,
    height: 16.174495697021484,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_31_1329: {
    width: 16.174495697021484,
    height: 16.174495697021484,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_31_1332: {
    width: 2,
    height: 2,
    top: 4.099365234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.0751953125
  },
  ImageBackground_31_1333: {
    width: 1.2120766639709473,
    height: 5.200000286102295,
    top: 6.99932861328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.4752197265625
  },
  View_31_1277: {
    width: 268,
    minWidth: 268,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 54,
    top: 489,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_1278: {
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
  ImageBackground_31_1279: {
    width: 268,
    height: 50,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_31_1280: {
    width: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 105.6500244140625,
    top: 14
  },
  Text_31_1280: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_627: {
    width: 131,
    minWidth: 131,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 122.5,
    top: 555
  },
  Text_31_627: {
    color: "rgba(19, 82, 198, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_628: {
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
  View_31_629: {
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
  ImageBackground_31_630: {
    width: 375,
    height: 2,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_31_631: {
    width: 375,
    height: 1,
    top: 52.100006103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_31_632: {
    width: 155,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 110.5,
    top: 17
  },
  Text_31_632: {
    color: "rgba(80, 82, 84, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_633: {
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
  View_31_634: {
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
  ImageBackground_31_635: {
    width: 375,
    height: 2,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_31_636: {
    width: 375,
    height: 1,
    top: 52.100006103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_31_637: {
    width: 102,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 136.5,
    top: 17
  },
  Text_31_637: {
    color: "rgba(80, 82, 84, 1)",
    fontSize: 13,
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
