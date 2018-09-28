                               /*ส่วนของการ เรียกใช้งานค่าต่างๆในการแสดงผล*/
import React from 'react';
import Styles from './style';
import { StyleSheet, Text, View, } from 'react-native';
                                       /////////จบ/////////

export default class App extends React.Component {
    render() {
        const { main, description, temp } = this.props;

        
                              //////////ส่วนของการเรียกใช้งานตัวแปลที่ได้กำหนดเอาไว้////////////

        return (
          <View style={Styles.view}>
            <View style={Styles.containerMain}>
              <Text style={Styles.day}>📢 สภาพภูมิอากาศขณะนี้</Text>
        <Text style={Styles.main}>👉⛅{main}⛅👈</Text>
            </View>
    
            <View style={Styles.containerMain}>
              <Text style={Styles.temp}>🌡️{temp}
                <Text style={Styles.sufflx}>°C</Text>
              </Text>
            </View>
    
            <View style={Styles.containerDesc}>
              <Text style={Styles.desc}>{description}{"\n"}{"\n"}</Text>
            </View>
            <View style={Styles.developer}>
              <Text style={Styles.desc}>{"\n"}ผู้พัฒนา นาย ชลิต ศุภรทวี</Text>
            </View>
            
            <View style={Styles.developer}>
              <Text style={Styles.desc}>5735512168</Text>
            </View>
          </View>
        );
    }
}
                                           /////////จบ/////////
