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
      <View style={styles.View_31_639}>
        <View style={styles.View_31_640}>
          <View style={styles.View_31_1257}>
            <View style={styles.View_31_1258}>
              <View style={styles.View_31_1259} />
              <View style={styles.View_31_1260}>
                <View style={styles.View_31_1261} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
                  }}
                  style={styles.ImageBackground_31_1262}
                />
                <View style={styles.View_31_1263} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
                }}
                style={styles.ImageBackground_31_1264}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
                }}
                style={styles.ImageBackground_31_1268}
              />
              <View style={styles.View_31_1275}>
                <View style={styles.View_31_1276}>
                  <Text style={styles.Text_31_1276}>9:41</Text>
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
        style={styles.ImageBackground_31_642}
      />
      <View style={styles.View_31_1192}>
        <View style={styles.View_31_1193} />
        <View style={styles.View_31_1194}>
          <Text style={styles.Text_31_1194}>Your e-mail</Text>
        </View>
        <View style={styles.View_31_1195}>
          <Text style={styles.Text_31_1195}>E-mail</Text>
        </View>
        <View style={styles.View_31_1219}>
          <View style={styles.View_31_1221}>
            <View style={styles.View_31_1222}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e79/8e04/63b23254c8c0b17a11f6c5bcafbcbb45"
                }}
                style={styles.ImageBackground_31_1223}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0734/8a0b/f411d18fe7e56df4f737b4c9442b5dae"
                }}
                style={styles.ImageBackground_31_1226}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b85f/ec9e/38b5180b2dd3b918d8bab291959f21b0"
                }}
                style={styles.ImageBackground_31_1227}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_31_1113}>
        <View style={styles.View_31_1114} />
        <View style={styles.View_31_1115}>
          <Text style={styles.Text_31_1115}>Your password</Text>
        </View>
        <View style={styles.View_31_1116}>
          <Text style={styles.Text_31_1116}>Password</Text>
        </View>
        <View style={styles.View_31_1140}>
          <View style={styles.View_31_1142}>
            <View style={styles.View_31_1143}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e79/8e04/63b23254c8c0b17a11f6c5bcafbcbb45"
                }}
                style={styles.ImageBackground_31_1144}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0734/8a0b/f411d18fe7e56df4f737b4c9442b5dae"
                }}
                style={styles.ImageBackground_31_1147}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b85f/ec9e/38b5180b2dd3b918d8bab291959f21b0"
                }}
                style={styles.ImageBackground_31_1148}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_31_1095}>
        <View style={styles.View_31_1096}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70c8/b4a9/f39180adb58551e09ae83ce70bfc533b"
            }}
            style={styles.ImageBackground_31_1097}
          />
          <View style={styles.View_31_1098}>
            <Text style={styles.Text_31_1098}>Sign in</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_31_962}>
        <View style={styles.View_31_963} />
        <View style={styles.View_31_1085}>
          <View style={styles.View_31_1086} />
        </View>
        <View style={styles.View_31_965}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/500c/8635/23c645fff4dbb9746420e7019da0cfda"
            }}
            style={styles.ImageBackground_31_966}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e18/6776/367af020468e89fabf1040391329d48a"
            }}
            style={styles.ImageBackground_31_972}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebf2/ae37/5fa6fd4ff8d0a4c08a929adc1044ab21"
            }}
            style={styles.ImageBackground_31_973}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9317/7973/938be6ac87418034d6928efdb86530b6"
          }}
          style={styles.ImageBackground_31_974}
        />
        <View style={styles.View_31_981}>
          <View style={styles.View_31_982}>
            <View style={styles.View_31_1087}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4967/bdb5/5585bbd64533c814691be2c8f104ffea"
                }}
                style={styles.ImageBackground_31_1088}
              />
              <View style={styles.View_31_1089}>
                <Text style={styles.Text_31_1089}>return</Text>
              </View>
            </View>
            <View style={styles.View_31_984}>
              <View style={styles.View_31_985} />
              <View style={styles.View_31_986}>
                <Text style={styles.Text_31_986}>space</Text>
              </View>
            </View>
            <View style={styles.View_31_987}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8770/4a04/87baf0c0fd418e42bbdee12eea180581"
                }}
                style={styles.ImageBackground_31_988}
              />
              <View style={styles.View_31_989}>
                <Text style={styles.Text_31_989}>123</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_31_990}>
            <View style={styles.View_31_991}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d67/885a/30fe8ebeda160cb4ca5536311721f840"
                }}
                style={styles.ImageBackground_31_992}
              />
              <View style={styles.View_31_993}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca22/d931/08b8ac744b597b30498c87fb86d40be7"
                  }}
                  style={styles.ImageBackground_31_994}
                />
                <View style={styles.View_31_997} />
                <View style={styles.View_31_998} />
              </View>
            </View>
            <View style={styles.View_31_999}>
              <View style={styles.View_31_1000} />
              <View style={styles.View_31_1001}>
                <Text style={styles.Text_31_1001}>m</Text>
              </View>
            </View>
            <View style={styles.View_31_1002}>
              <View style={styles.View_31_1003} />
              <View style={styles.View_31_1004}>
                <Text style={styles.Text_31_1004}>n</Text>
              </View>
            </View>
            <View style={styles.View_31_1005}>
              <View style={styles.View_31_1006} />
              <View style={styles.View_31_1007}>
                <Text style={styles.Text_31_1007}>b</Text>
              </View>
            </View>
            <View style={styles.View_31_1008}>
              <View style={styles.View_31_1009} />
              <View style={styles.View_31_1010}>
                <Text style={styles.Text_31_1010}>v</Text>
              </View>
            </View>
            <View style={styles.View_31_1011}>
              <View style={styles.View_31_1012} />
              <View style={styles.View_31_1013}>
                <Text style={styles.Text_31_1013}>c</Text>
              </View>
            </View>
            <View style={styles.View_31_1014}>
              <View style={styles.View_31_1015} />
              <View style={styles.View_31_1016}>
                <Text style={styles.Text_31_1016}>x</Text>
              </View>
            </View>
            <View style={styles.View_31_1017}>
              <View style={styles.View_31_1018} />
              <View style={styles.View_31_1019}>
                <Text style={styles.Text_31_1019}>z</Text>
              </View>
            </View>
            <View style={styles.View_31_1020}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebe7/2b71/f1f1cef80d081d904f751d21a77e6bea"
                }}
                style={styles.ImageBackground_31_1021}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae0c/2413/2bfa0d8378e8c3401c2b3fb14ed7f74b"
                }}
                style={styles.ImageBackground_31_1022}
              />
            </View>
          </View>
          <View style={styles.View_31_1023}>
            <View style={styles.View_31_1024}>
              <View style={styles.View_31_1025} />
              <View style={styles.View_31_1026}>
                <Text style={styles.Text_31_1026}>l</Text>
              </View>
            </View>
            <View style={styles.View_31_1027}>
              <View style={styles.View_31_1028} />
              <View style={styles.View_31_1029}>
                <Text style={styles.Text_31_1029}>k</Text>
              </View>
            </View>
            <View style={styles.View_31_1030}>
              <View style={styles.View_31_1031} />
              <View style={styles.View_31_1032}>
                <Text style={styles.Text_31_1032}>j</Text>
              </View>
            </View>
            <View style={styles.View_31_1033}>
              <View style={styles.View_31_1034} />
              <View style={styles.View_31_1035}>
                <Text style={styles.Text_31_1035}>h</Text>
              </View>
            </View>
            <View style={styles.View_31_1036}>
              <View style={styles.View_31_1037} />
              <View style={styles.View_31_1038}>
                <Text style={styles.Text_31_1038}>g</Text>
              </View>
            </View>
            <View style={styles.View_31_1039}>
              <View style={styles.View_31_1040} />
              <View style={styles.View_31_1041}>
                <Text style={styles.Text_31_1041}>f</Text>
              </View>
            </View>
            <View style={styles.View_31_1042}>
              <View style={styles.View_31_1043} />
              <View style={styles.View_31_1044}>
                <Text style={styles.Text_31_1044}>d</Text>
              </View>
            </View>
            <View style={styles.View_31_1045}>
              <View style={styles.View_31_1046} />
              <View style={styles.View_31_1047}>
                <Text style={styles.Text_31_1047}>s</Text>
              </View>
            </View>
            <View style={styles.View_31_1048}>
              <View style={styles.View_31_1049} />
              <View style={styles.View_31_1050}>
                <Text style={styles.Text_31_1050}>a</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_31_1051}>
            <View style={styles.View_31_1052}>
              <View style={styles.View_31_1053} />
              <View style={styles.View_31_1054}>
                <Text style={styles.Text_31_1054}>p</Text>
              </View>
            </View>
            <View style={styles.View_31_1055}>
              <View style={styles.View_31_1056} />
              <View style={styles.View_31_1057}>
                <Text style={styles.Text_31_1057}>o</Text>
              </View>
            </View>
            <View style={styles.View_31_1058}>
              <View style={styles.View_31_1059} />
              <View style={styles.View_31_1060}>
                <Text style={styles.Text_31_1060}>i</Text>
              </View>
            </View>
            <View style={styles.View_31_1061}>
              <View style={styles.View_31_1062} />
              <View style={styles.View_31_1063}>
                <Text style={styles.Text_31_1063}>u</Text>
              </View>
            </View>
            <View style={styles.View_31_1064}>
              <View style={styles.View_31_1065} />
              <View style={styles.View_31_1066}>
                <Text style={styles.Text_31_1066}>y</Text>
              </View>
            </View>
            <View style={styles.View_31_1067}>
              <View style={styles.View_31_1068} />
              <View style={styles.View_31_1069}>
                <Text style={styles.Text_31_1069}>t</Text>
              </View>
            </View>
            <View style={styles.View_31_1070}>
              <View style={styles.View_31_1071} />
              <View style={styles.View_31_1072}>
                <Text style={styles.Text_31_1072}>r</Text>
              </View>
            </View>
            <View style={styles.View_31_1073}>
              <View style={styles.View_31_1074} />
              <View style={styles.View_31_1075}>
                <Text style={styles.Text_31_1075}>e</Text>
              </View>
            </View>
            <View style={styles.View_31_1076}>
              <View style={styles.View_31_1077} />
              <View style={styles.View_31_1078}>
                <Text style={styles.Text_31_1078}>w</Text>
              </View>
            </View>
            <View style={styles.View_31_1079}>
              <View style={styles.View_31_1080} />
              <View style={styles.View_31_1081}>
                <Text style={styles.Text_31_1081}>q</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_31_639: {
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
  View_31_640: {
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
  View_31_1257: {
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
  View_31_1258: {
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
  View_31_1259: {
    width: 375,
    height: 44,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_31_1260: {
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
  View_31_1261: {
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
  ImageBackground_31_1262: {
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
  View_31_1263: {
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
  ImageBackground_31_1264: {
    width: 15.27237606048584,
    height: 10.965571403503418,
    top: 17.3306884765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315.69384765625
  },
  ImageBackground_31_1268: {
    width: 17,
    height: 10.666666984558105,
    top: 17.6666259765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.666748046875
  },
  View_31_1275: {
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
  View_31_1276: {
    width: 54,
    minWidth: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 3
  },
  Text_31_1276: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  ImageBackground_31_642: {
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
  View_31_1192: {
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
  View_31_1193: {
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
  View_31_1194: {
    width: 86,
    minWidth: 86,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 44
  },
  Text_31_1194: {
    color: "rgba(80, 82, 84, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1195: {
    width: 53,
    minWidth: 53,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_31_1195: {
    color: "rgba(34, 35, 36, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1219: {
    width: 18,
    height: 18,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 298,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_1221: {
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
  View_31_1222: {
    width: 16.174495697021484,
    height: 16.174495697021484,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_31_1223: {
    width: 16.174495697021484,
    height: 16.174495697021484,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_31_1226: {
    width: 2,
    height: 2,
    top: 4.099365234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.0751953125
  },
  ImageBackground_31_1227: {
    width: 1.2120766639709473,
    height: 5.200000286102295,
    top: 6.99932861328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.47509765625
  },
  View_31_1113: {
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
  View_31_1114: {
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
  View_31_1115: {
    width: 111,
    minWidth: 111,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 44
  },
  Text_31_1115: {
    color: "rgba(80, 82, 84, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1116: {
    width: 81,
    minWidth: 81,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_31_1116: {
    color: "rgba(34, 35, 36, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1140: {
    width: 18,
    height: 18,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 298,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_1142: {
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
  View_31_1143: {
    width: 16.174495697021484,
    height: 16.174495697021484,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_31_1144: {
    width: 16.174495697021484,
    height: 16.174495697021484,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_31_1147: {
    width: 2,
    height: 2,
    top: 4.099365234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.0751953125
  },
  ImageBackground_31_1148: {
    width: 1.2120766639709473,
    height: 5.200000286102295,
    top: 6.99932861328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.47509765625
  },
  View_31_1095: {
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
  View_31_1096: {
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
  ImageBackground_31_1097: {
    width: 268,
    height: 50,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_31_1098: {
    width: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 105.64990234375,
    top: 14
  },
  Text_31_1098: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_962: {
    width: 375,
    minWidth: 375,
    height: 291,
    minHeight: 291,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 521,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_963: {
    width: 375,
    height: 291,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(210, 213, 219, 1)",
    opacity: 0.8999999761581421,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_31_1085: {
    width: 375,
    height: 34,
    top: 257,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_31_1086: {
    width: 134,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 121,
    top: 20,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_31_965: {
    width: 15.000005722045898,
    height: 24.997394561767578,
    top: 241.00262451171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 330
  },
  ImageBackground_31_966: {
    width: 15.000005722045898,
    height: 14.666666030883789,
    top: 10.330718994140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_31_972: {
    width: 9.007397651672363,
    height: 17.9940185546875,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3
  },
  ImageBackground_31_973: {
    width: 5.67343807220459,
    height: 14.666680335998535,
    top: 1.667388916015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.666259765625
  },
  ImageBackground_31_974: {
    width: 26.5,
    height: 26.5,
    top: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.5
  },
  View_31_981: {
    width: 370,
    minWidth: 370,
    height: 204,
    minHeight: 204,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 10
  },
  View_31_982: {
    width: 370,
    minWidth: 370,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 160
  },
  View_31_1087: {
    width: 89,
    height: 44,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 281,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_31_1088: {
    width: 87.5,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.5
  },
  View_31_1089: {
    width: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 10.5
  },
  Text_31_1089: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_31_984: {
    width: 184,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 92,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_985: {
    width: 184,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_986: {
    width: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 70,
    top: 11
  },
  Text_31_986: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_31_987: {
    width: 87,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_31_988: {
    width: 87,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_31_989: {
    width: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 12
  },
  Text_31_989: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_31_990: {
    width: 369,
    minWidth: 369,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 108
  },
  View_31_991: {
    width: 42,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_31_992: {
    width: 42,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_31_993: {
    width: 22.878681182861328,
    height: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.621337890625,
    top: 12.5
  },
  ImageBackground_31_994: {
    width: 22.878681182861328,
    height: 17,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_31_997: {
    width: 8.838834762573242,
    height: 8.838834762573242,
    top: 4.05828857421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.541259765625,
    backgroundColor: "rgba(3, 3, 3, 1)"
  },
  View_31_998: {
    width: 8.838834762573242,
    height: 8.838834762573242,
    top: 4.0582275390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.541259765625,
    backgroundColor: "rgba(3, 3, 3, 1)"
  },
  View_31_999: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 281,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1000: {
    width: 31.5,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.5,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_1001: {
    width: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.75,
    top: 7.25
  },
  Text_31_1001: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1002: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 244,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1003: {
    width: 31.5,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_1004: {
    width: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.25,
    top: 7.25
  },
  Text_31_1004: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1005: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 206,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1006: {
    width: 31.5,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.5,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_1007: {
    width: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 7.25
  },
  Text_31_1007: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1008: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 169,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1009: {
    width: 31.5,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_1010: {
    width: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.75,
    top: 7.25
  },
  Text_31_1010: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1011: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 131,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1012: {
    width: 31.5,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_1013: {
    width: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.75,
    top: 7.25
  },
  Text_31_1013: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1014: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 93,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1015: {
    width: 31.5,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.5,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_1016: {
    width: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.5,
    top: 7.25
  },
  Text_31_1016: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1017: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1018: {
    width: 31.5,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_1019: {
    width: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 7.25
  },
  Text_31_1019: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1020: {
    width: 42,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_31_1021: {
    width: 42,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_31_1022: {
    width: 19.069456100463867,
    height: 16.087444305419922,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.466064453125,
    top: 12.91253662109375
  },
  View_31_1023: {
    width: 333,
    minWidth: 333,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 54
  },
  View_31_1024: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 301,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1025: {
    width: 31.5,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_1026: {
    width: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 7.25
  },
  Text_31_1026: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1027: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 263,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1028: {
    width: 31.5,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.5,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_1029: {
    width: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.5,
    top: 7.25
  },
  Text_31_1029: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1030: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 226,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1031: {
    width: 31.5,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_1032: {
    width: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.75,
    top: 7.25
  },
  Text_31_1032: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1033: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1034: {
    width: 31.5,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.5,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_1035: {
    width: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.75,
    top: 7.25
  },
  Text_31_1035: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1036: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 151,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1037: {
    width: 31.5,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_1038: {
    width: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.5,
    top: 7.25
  },
  Text_31_1038: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1039: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 113,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1040: {
    width: 31.5,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_1041: {
    width: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 7.25
  },
  Text_31_1041: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1042: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1043: {
    width: 31.5,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.5,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_1044: {
    width: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.75,
    top: 7.25
  },
  Text_31_1044: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1045: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1046: {
    width: 31.5,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_1047: {
    width: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.25,
    top: 7.25
  },
  Text_31_1047: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1048: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1049: {
    width: 31.5,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.5,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_1050: {
    width: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.25,
    top: 7.25
  },
  Text_31_1050: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1051: {
    width: 369,
    minWidth: 369,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_31_1052: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 337,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1053: {
    width: 31.5,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.5,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_1054: {
    width: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.75,
    top: 7.25
  },
  Text_31_1054: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1055: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 300,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1056: {
    width: 31.5,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_1057: {
    width: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.25,
    top: 7.25
  },
  Text_31_1057: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1058: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 262,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1059: {
    width: 31.5,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.5,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_1060: {
    width: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.5,
    top: 7.25
  },
  Text_31_1060: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1061: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 225,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1062: {
    width: 31.5,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_1063: {
    width: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 7.25
  },
  Text_31_1063: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1064: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 187,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1065: {
    width: 31.5,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.5,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_1066: {
    width: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.5,
    top: 7.25
  },
  Text_31_1066: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1067: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 150,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1068: {
    width: 31.5,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_1069: {
    width: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 7.25
  },
  Text_31_1069: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1070: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 112,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1071: {
    width: 31.5,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.5,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_1072: {
    width: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.25,
    top: 7.25
  },
  Text_31_1072: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1073: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1074: {
    width: 31.5,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_1075: {
    width: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.75,
    top: 7.25
  },
  Text_31_1075: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1076: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1077: {
    width: 31.5,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.5,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_1078: {
    width: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.5,
    top: 7.25
  },
  Text_31_1078: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_1079: {
    width: 32,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_31_1080: {
    width: 31.5,
    height: 42,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_31_1081: {
    width: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.25,
    top: 7.25
  },
  Text_31_1081: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
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
