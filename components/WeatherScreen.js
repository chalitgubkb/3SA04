                               /*ส่วนของการ เรียกใช้งานค่าต่างๆในการแสดงผล*/

import React from 'react';
import Weather from './Weather';
import Styles from './style';
import { Text, Button } from 'react-native';
                                       /////////จบ/////////

                               /*ส่วนของการ ส่งค่ากลับไปแสดงผล*/
export default class WeatherScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: (
        <Text>
        </Text>
      ),
      headerTitle: (
        <Text style={Styles.headerTitleNav}>
          Weather
        </Text>
      ),
      headerRight: (
        <Text
          style={Styles.headerRightNav}
          onPress={() => navigation.navigate('ZipCode')}>
          Change Zip
        </Text>
      )
    }
  }

  render() {
    const zipCode = this.props.navigation.getParam('zipCode');

    return (
      <Weather zipCode={zipCode}/>
    );
  }
}
                                       /////////จบ/////////


