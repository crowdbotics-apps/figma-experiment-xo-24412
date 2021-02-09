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
      <View style={styles.View_33_328}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
          }}
          style={styles.ImageBackground_I33_328_1_9493}
        />
        <View style={styles.View_I33_328_1_9498}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
            }}
            style={styles.ImageBackground_I33_328_1_9499}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I33_328_1_9503}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I33_328_1_9507}
          />
        </View>
        <View style={styles.View_I33_328_1_9514}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
            }}
            style={styles.ImageBackground_I33_328_1_9515}
          />
        </View>
      </View>
      <View style={styles.View_33_569}>
        <View style={styles.View_33_483}>
          <View style={styles.View_33_484}>
            <Text style={styles.Text_33_484}>Play Pass Package</Text>
          </View>
        </View>
        <View style={styles.View_33_485}>
          <View style={styles.View_33_486}>
            <View style={styles.View_33_487}>
              <View style={styles.View_33_503}>
                <View style={styles.View_I33_503_10_1108}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9120/d113/2cd549760ebb9b008e95a9a555762c85"
                    }}
                    style={styles.ImageBackground_I33_503_10_1109}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_33_504}>
              <Text style={styles.Text_33_504}>Party Size 5</Text>
            </View>
          </View>
          <View style={styles.View_33_505}>
            <View style={styles.View_33_506}>
              <View style={styles.View_33_507}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f31e/9fbd/b03bd208aef267224a4a1fbbe1573108"
                  }}
                  style={styles.ImageBackground_33_525}
                />
              </View>
            </View>
            <View style={styles.View_33_526}>
              <Text style={styles.Text_33_526}>Checked-in 2</Text>
            </View>
          </View>
          <View style={styles.View_33_527}>
            <View style={styles.View_33_528}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ce3/2f01/802bd822cab79ea3e231de9b2cc2deac"
                }}
                style={styles.ImageBackground_33_544}
              />
            </View>
            <View style={styles.View_33_547}>
              <Text style={styles.Text_33_547}>Remaining 3</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_33_561}>
          <View style={styles.View_33_566}>
            <Text style={styles.Text_33_566}>Scan Now</Text>
          </View>
        </View>
        <View style={styles.View_33_567}>
          <View style={styles.View_I33_567_1_2786} />
        </View>
      </View>
      <View style={styles.View_33_453}>
        <View style={styles.View_33_331}>
          <Text style={styles.Text_33_331}>Checked-in</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/015b/72f9/c2d987e7717f47dce6a6d5b8e71ec10b"
          }}
          style={styles.ImageBackground_33_442}
        />
      </View>
      <View style={styles.View_33_454}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68c1/9f6e/b28555849da573bd2b85e16a8770e0fa"
          }}
          style={styles.ImageBackground_I33_454_3_961}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e59/c559/ae44ec0160185acadefd5d137d147f35"
          }}
          style={styles.ImageBackground_I33_454_31_284}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_33_328: {
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
  ImageBackground_I33_328_1_9493: {
    flexGrow: 1,
    width: 375,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: -2
  },
  View_I33_328_1_9498: {
    flexGrow: 1,
    width: 66.661376953125,
    height: 20.666584014892578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 297.666015625,
    top: 8
  },
  ImageBackground_I33_328_1_9499: {
    width: 24.32803726196289,
    minWidth: 24.32803726196289,
    height: 11.333333015441895,
    minHeight: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42.333343505859375,
    top: 9.333251953125
  },
  ImageBackground_I33_328_1_9503: {
    width: 15.27237606048584,
    minWidth: 15.27237606048584,
    height: 10.965571403503418,
    minHeight: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.027069091796875,
    top: 9.33056640625
  },
  ImageBackground_I33_328_1_9507: {
    width: 17,
    minWidth: 17,
    height: 10.666666984558105,
    minHeight: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 9.66650390625
  },
  View_I33_328_1_9514: {
    flexGrow: 1,
    width: 54,
    height: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.000022888183594,
    top: 12
  },
  ImageBackground_I33_328_1_9515: {
    width: 54,
    minWidth: 54,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_33_569: {
    width: 325,
    minWidth: 325,
    height: 232,
    minHeight: 232,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 556,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_483: {
    flexGrow: 1,
    width: 186,
    height: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 0
  },
  View_33_484: {
    width: 186,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_33_484: {
    color: "rgba(34, 35, 36, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_485: {
    flexGrow: 1,
    width: 140,
    height: 90.68421173095703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 93.52631378173828,
    top: 45.9736328125,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_486: {
    width: 140,
    minWidth: 140,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_487: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_503: {
    width: 24.999998092651367,
    height: 12.499999046325684,
    top: 7.142822265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_503_10_1108: {
    flexGrow: 1,
    width: 23.437498092651367,
    height: 10.936457633972168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.78125,
    top: 0.7823486328125
  },
  ImageBackground_I33_503_10_1109: {
    width: 23.437498092651367,
    height: 10.936457633972168,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_33_504: {
    width: 107,
    minWidth: 107,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 3.5
  },
  Text_33_504: {
    color: "rgba(80, 82, 84, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_505: {
    width: 139.05262756347656,
    minWidth: 139.05262756347656,
    height: 12.631579399108887,
    minHeight: 12.631579399108887,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 41,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_506: {
    width: 21.052631378173828,
    minWidth: 21.052631378173828,
    height: 21.052631378173828,
    minHeight: 21.052631378173828,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: -4.21051025390625,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_33_507: {
    width: 21.052631378173828,
    minWidth: 21.052631378173828,
    height: 21.052631378173828,
    minHeight: 21.052631378173828,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_33_525: {
    width: 21.052631378173828,
    height: 21.052631378173828,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_33_526: {
    width: 110,
    minWidth: 110,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.052631378173828,
    top: -2.6842041015625
  },
  Text_33_526: {
    color: "rgba(80, 82, 84, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_527: {
    width: 138.05262756347656,
    minWidth: 138.05262756347656,
    height: 21.052631378173828,
    minHeight: 21.052631378173828,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 69.631591796875,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_528: {
    width: 21.052631378173828,
    minWidth: 21.052631378173828,
    height: 21.052631378173828,
    minHeight: 21.052631378173828,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_33_544: {
    width: 9.02255630493164,
    minWidth: 9.02255630493164,
    height: 15.03759479522705,
    minHeight: 15.03759479522705,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.015037536621094,
    top: 3.5615234375
  },
  View_33_547: {
    width: 109,
    minWidth: 109,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.052631378173828,
    top: 1.52630615234375
  },
  Text_33_547: {
    color: "rgba(80, 82, 84, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_561: {
    flexGrow: 1,
    width: 334,
    height: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2,
    top: 170,
    backgroundColor: "rgba(19, 82, 198, 1)"
  },
  View_33_566: {
    width: 74,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 14.5
  },
  Text_33_566: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_567: {
    flexGrow: 1,
    width: 134,
    height: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 96,
    top: 244,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_567_1_2786: {
    flexGrow: 1,
    width: 134,
    height: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_33_453: {
    width: 181,
    minWidth: 181,
    height: 175,
    minHeight: 175,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94,
    top: 188,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_331: {
    flexGrow: 1,
    width: 181,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 141
  },
  Text_33_331: {
    color: "rgba(39, 206, 112, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_33_442: {
    flexGrow: 1,
    width: 120,
    height: 120,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 0
  },
  View_33_454: {
    width: 40,
    minWidth: 40,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 54,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I33_454_3_961: {
    flexGrow: 1,
    width: 40,
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I33_454_31_284: {
    flexGrow: 1,
    width: 18,
    height: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 15
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
