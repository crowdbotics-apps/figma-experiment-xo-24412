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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9116/c3b1/f36f653694323cde30788ad6e8da3ead"
        }}
        style={styles.ImageBackground_175_32}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/100a/83a6/9d6246fc8e8f99ae3482ff9196d47c7c"
        }}
        style={styles.ImageBackground_175_33}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2391/16bc/13c231ec0313915a97647f666fb6efcb"
        }}
        style={styles.ImageBackground_175_34}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/211c/e1f4/1859cf08ba14cfadc24d689c4f250322"
        }}
        style={styles.ImageBackground_175_35}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_175_32: {
    width: 18.700023651123047,
    height: 14.30002212524414,
    top: 4.2999267578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.300048828125
  },
  ImageBackground_175_33: {
    width: 17.60002326965332,
    height: 14.300023078918457,
    top: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1
  },
  ImageBackground_175_34: {
    width: 1.6599998474121094,
    height: 3.3199996948242188,
    top: 9.93994140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8
  },
  ImageBackground_175_35: {
    width: 5.319999694824219,
    height: 1.8299999237060547,
    top: 11.5999755859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.8798828125
  },
  View_2: { height: 19.600000381469727 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
