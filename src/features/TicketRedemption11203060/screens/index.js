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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4038/d0da/d26b8ac03724d17764ee3c9e2bbb28d5"
        }}
        style={styles.ImageBackground_175_1}
      />
      <View style={styles.View_175_2}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5712/91f5/06fa7667abcd47798cf98b4d74747059"
          }}
          style={styles.ImageBackground_175_3}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/781a/b44a/5ffdb235abb8556871ebaaa7ff2e821c"
          }}
          style={styles.ImageBackground_175_9}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_175_1: {
    width: 50,
    height: 50,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_175_2: {
    width: 26.999879837036133,
    minWidth: 26.999879837036133,
    height: 21.599761962890625,
    minHeight: 21.599761962890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 14.2001953125
  },
  ImageBackground_175_3: {
    width: 26.999879837036133,
    height: 21.599761962890625,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_175_9: {
    width: 7.609035015106201,
    height: 4.285671710968018,
    top: 10.9715576171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.5908203125
  },
  View_2: { height: 50 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
