import React from 'react';
import { 
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View,
    StatusBar,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';

const HistoryScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor='#6970E3' barStyle="light-content"/>
        <View style={[styles.header1]}>
        <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        >
          {/* 3 bar menu drop down */}
          <Entypo name='menu' color='#fff' size={30}/>
          </TouchableOpacity>
          </View>
        <Text style={{textAlign: 'center'}}>History Screen</Text>
      </View>
    );
};

export default HistoryScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#6970E3'
    },
    header1: {
        flex: 0.15,
        //justifyContent: 'flex-end',
        flexDirection:'row',
        paddingHorizontal: 30,
        paddingBottom: 2,
        marginTop:50,
        //justifyContent: 'center',
    },
});