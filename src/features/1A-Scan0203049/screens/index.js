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
      <View style={styles.View_31_274}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/114e/bb8e/4f54f88bb0fc2b36cacb1c73b443e8be"
          }}
          style={styles.ImageBackground_31_208}
        />
      </View>
      <View style={styles.View_31_214}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/603f/d637/e8e901e5b8f0d3674b050a20b3339730"
          }}
          style={styles.ImageBackground_I31_214_1_9493}
        />
        <View style={styles.View_I31_214_1_9498}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
            }}
            style={styles.ImageBackground_I31_214_1_9499}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I31_214_1_9503}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I31_214_1_9507}
          />
        </View>
        <View style={styles.View_I31_214_1_9514}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
            }}
            style={styles.ImageBackground_I31_214_1_9515}
          />
        </View>
      </View>
      <View style={styles.View_31_215}>
        <View style={styles.View_31_216}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d1b/20ff/da8991deb6c0d8cb335d42ff589320e0"
            }}
            style={styles.ImageBackground_31_217}
          />
          <View style={styles.View_31_218}>
            <Text style={styles.Text_31_218}>Scan Code</Text>
          </View>
          <View style={styles.View_31_219}>
            <View style={styles.View_I31_219_0_607} />
          </View>
          <View style={styles.View_31_220}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5db/6f3f/33f1c2eb6a42a9b84dd15fb685d4f4e7"
              }}
              style={styles.ImageBackground_31_221}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_31_244}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68c1/9f6e/b28555849da573bd2b85e16a8770e0fa"
          }}
          style={styles.ImageBackground_I31_244_3_961}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e59/c559/ae44ec0160185acadefd5d137d147f35"
          }}
          style={styles.ImageBackground_I31_244_31_284}
        />
      </View>
      <View style={styles.View_31_344}>
        <View style={styles.View_I31_344_1_2786} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_31_274: {
    width: 862,
    minWidth: 862,
    height: 607,
    minHeight: 607,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -278,
    top: 0
  },
  ImageBackground_31_208: {
    width: 862,
    minWidth: 862,
    height: 607,
    minHeight: 607,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  View_31_214: {
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
  ImageBackground_I31_214_1_9493: {
    flexGrow: 1,
    width: 375,
    height: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: -2
  },
  View_I31_214_1_9498: {
    flexGrow: 1,
    width: 66.661376953125,
    height: 20.666584014892578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 297.666015625,
    top: 8
  },
  ImageBackground_I31_214_1_9499: {
    width: 24.32803726196289,
    minWidth: 24.32803726196289,
    height: 11.333333015441895,
    minHeight: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42.3333740234375,
    top: 9.333251953125
  },
  ImageBackground_I31_214_1_9503: {
    width: 15.27237606048584,
    minWidth: 15.27237606048584,
    height: 10.965571403503418,
    minHeight: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.027099609375,
    top: 9.33056640625
  },
  ImageBackground_I31_214_1_9507: {
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
  View_I31_214_1_9514: {
    flexGrow: 1,
    width: 54,
    height: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 12
  },
  ImageBackground_I31_214_1_9515: {
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
  View_31_215: {
    width: 375,
    height: 269,
    top: 573,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_31_216: {
    width: 375,
    height: 269,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_31_217: {
    width: 375,
    height: 269,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_31_218: {
    width: 109,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 133,
    top: 53
  },
  Text_31_218: {
    color: "rgba(34, 35, 36, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_219: {
    width: 70,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 153,
    top: 14,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I31_219_0_607: {
    flexGrow: 1,
    width: 70,
    height: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.10000000149011612
  },
  View_31_220: {
    width: 91,
    minWidth: 91,
    height: 91,
    minHeight: 91,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 142,
    top: 100,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_31_221: {
    width: 91,
    height: 91,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_31_244: {
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
  ImageBackground_I31_244_3_961: {
    flexGrow: 1,
    width: 40,
    height: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I31_244_31_284: {
    flexGrow: 1,
    width: 18,
    height: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 15
  },
  View_31_344: {
    width: 134,
    minWidth: 134,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120.5,
    top: 799,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I31_344_1_2786: {
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
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
