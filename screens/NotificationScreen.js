import React from 'react';
import { 
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View,
    StatusBar,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const NotificationScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor='#6970E3' barStyle="light-content"/>
        <View style={[styles.header1]}>
        <TouchableOpacity
        onPress={() => navigation.goBack()}
        >

<FontAwesome 
                    name="chevron-circle-left"
                    color="#fff"
                    size={30}
                />
          </TouchableOpacity>
          </View>
        <Text style={{textAlign: 'center'}}>Notification Screen</Text>
      </View>
    );
};

export default NotificationScreen;

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