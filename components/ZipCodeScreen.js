                               /*ส่วนของการ เรียกใช้งานค่าต่างๆในการแสดงผล*/

import React from 'react';
import Styles from './style';
import { FlatList, View, Text, TouchableHighlight, ImageBackground } from 'react-native';
                                       /////////จบ/////////


                        //////////ส่วนของการกำหนดค่า รหัสไปรษณีย์ที่ใช้ในการคำนวณอุณหภูมิ////////////

const availableZipItems = [
 { place: 'Hatyai', code: '90110' },
 { place: 'Trang', code: '92000' },
 { place: 'Chiangmai', code: '50000' },
 { place: 'Khonkaen', code: '40000' },
 { place: 'Chonburi', code: '20000' },

 ]

                                        /////////จบ/////////


                  /*ส่วนของการ นำค่าที่ได้มาแสดงผลโดยจะมีการกำหนดตัวแปรเพื่อเรียกใช้คือ{place}กับ{code}*/

 const ZipItem = ({place, code, navigate}) => (
   <TouchableHighlight onPress={() => navigate('Weather', {zipCode: code})}>

   <View style={Styles.ok}>
     <View style={Styles.zipcode}>
     
       <Text>🌟{place}✉</Text>
       
       <Text>{code}✉</Text>
     </View></View>
   </TouchableHighlight>
 )
                                         /////////จบ/////////

 

 const _keyExtractor = item => item.code
 
 export default class WeatherScreen extends React.Component {
   static navigationOptions = ({navigation}) => {
     return {
       headerTitle: (
       <Text>Choose a zip code</Text>),
     }
   }
   render() {
     const { navigate } = this.props.navigation;
 
     return (
         <FlatList
           data={availableZipItems}
           keyExtractor={_keyExtractor}
           renderItem={({item}) => <ZipItem {...item} navigate={navigate}/>}
         />
     );
   }
   
 }



