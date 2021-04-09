import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    StyleSheet ,
    Keyboard,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    StatusBar,
    FlatList,
    Accordion,
    Item,
    Card,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';

const RecipientsScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        Name: '',
        Info: '',
    });

    const alertSubmit = () => {
        Alert.alert(
        "Transfer complete",
        "Notification will be sent shortly",
        [
          { text: "OK", onPress: () => navigation.navigate('MainScreen') }]
    )

    }

    
    return (
    <ScrollView style={styles.container}>
          <StatusBar backgroundColor='#6970E3' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={[styles.text_header,{marginTop: 25 }]}>Select a Recipient:</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <View >
            <Text style={styles.item}>Rick H. Haas</Text>
            <Text style={styles.item}> RickHHaas@rhyta.com </Text>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.Login}
                    onPress={alertSubmit}
                    //This is what needs to be worked on
                    //onPress={() => {RecipientsScreen}}
                >
                <LinearGradient
                    colors={['#696FE2', '#7158B7']}
                    style={styles.Login}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Select</Text>
                </LinearGradient>
                </TouchableOpacity>

            </View>
            <Text style={styles.item}>{"\n"}{"\n"} </Text>
            <Text style={styles.item}>Barbara J. Wenz</Text> 
            <Text style={styles.item}>BarbaraJWenz@jourrapide.com</Text>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.Login}
                    onPress={alertSubmit}
                    //This is what needs to be worked on
                    //onPress={() => {RecipientsScreen}}
                >
                <LinearGradient
                    colors={['#696FE2', '#7158B7']}
                    style={styles.Login}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Select</Text>
                </LinearGradient>
                </TouchableOpacity>

            </View>
            <Text style={styles.item}>{"\n"}{"\n"} </Text>
            <Text style={styles.item}>Steven F. Burgess</Text>
            <Text style={styles.item}>StevenFBurgess@rhyta.com</Text>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.Login}
                    onPress={alertSubmit}
                    //This is what needs to be worked on
                    //onPress={() => {RecipientsScreen}}
                >
                <LinearGradient
                    colors={['#696FE2', '#7158B7']}
                    style={styles.Login}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Select</Text>
                </LinearGradient>
                </TouchableOpacity>

            </View>

           
             <View style={styles.button}>
                <TouchableOpacity
                    style={styles.Login}
                    onPress={alertSubmit}
                    //This is what needs to be worked on
                    //onPress={() => {RecipientsScreen}}
                >
                <LinearGradient
                    colors={['#696FE2', '#7158B7']}
                    style={styles.Login}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Add a New Recipient</Text>
                </LinearGradient>
                </TouchableOpacity>

            </View>
            </View>
        </Animatable.View>
        </ScrollView>
    );
};

export default RecipientsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: '#6970E3'
       },
       sectionHeader: {
         paddingTop: 2,
         paddingLeft: 10,
         paddingRight: 10,
         paddingBottom: 2,
         fontSize: 14,
         fontWeight: 'bold',
         backgroundColor: 'white',
       },
       item: {
         padding: 10,
         fontSize: 18,
         height: 44,
       },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 32
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: 0,
        paddingLeft: 10,
        fontSize: 16,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    Login: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 14,
        fontWeight: 'bold'
    }
  });