                               /*ส่วนของการ เรียกใช้งานค่าต่างๆในการแสดงผล*/
import React from 'react';
import background from './bg.jpg';
import Forecast from './Forecast';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
                                       /////////จบ/////////

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                main: 'main', description: 'description', temp: 0
            }
        }
    }

                                  //////////ส่วนของAPI////////////
    componentDidMount() {
        const { fetchData } = this;
        fetchData()
      }
    
      componentDidUpdate = (prevProps) => {
        if (prevProps.zipCode !== this.props.zipCode) {
          this.fetchData()
        }
      }
    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=e93ed9ed465b149ef05b088e713a11da`)
        .then((response) => response.json())
        .then((json) => {
        this.setState(
        {
        forecast: {
        main: json.weather[0].main,
        description: json.weather[0].description,
        temp: json.main.temp
        }
        });
        })
        .catch((error) => {
        console.warn(error);
        });
        }
       
        componentDidMount = () => this.fetchData()
                                            /////////จบ/////////



        
                       //////ส่วนของการ Props หรือ properties จะมีจุดเด่นคือสามารถ //////
        ///// ส่งข้อมูลจาก Component นึงไปยังอีก Component นึงได้ และสามารถส่งฟังชั่นไปได้ด้วย///////
        
    render() {
        return (
            
            <View style={styles.container}>
                <ImageBackground source={background} style={styles.backdrop}>
                <Text style={styles.item}>Zip code is {this.props.zipCode}.</Text>
                    <Forecast {...this.state.forecast} />
                </ImageBackground>
            </View>
        );
    }
}
                                     /////////จบ/////////

                                     

                   //////////ส่วนของการกำหนด Styles ลักษณะของแอพ เช่น ความสูง ความกว้าง////////////

const styles = StyleSheet.create({
    container: { paddingTop: 25 ,},
    
    backdrop: { width: '100%', height: '100%' , flexDirection:'column' , alignItems:'center'  },
    
    item:{fontSize: 20,height:50}
    
});
                                     /////////จบ/////////




    