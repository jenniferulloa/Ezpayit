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
<<<<<<< HEAD
import { ScrollView } from 'react-native-gesture-handler';
=======
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';
//import Accordion from 'react-bootstrap/Accordion'

// import { useTheme } from 'react-native-paper';

//import { AuthContext } from '../components/context';

//import Users from '../model/users';
>>>>>>> cb05f5495dd572ed7ec00fd235c90c58a5120824

const RecipientsScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        Name: '',
        Info: '',
    });

<<<<<<< HEAD
    const alertSubmit = () => {
        Alert.alert(
        "Transfer complete",
        "Notification will be sent shortly",
        [
          { text: "OK", onPress: () => navigation.navigate('MainScreen') }]
    )

    }
=======
>>>>>>> cb05f5495dd572ed7ec00fd235c90c58a5120824

    
    return (
    <ScrollView style={styles.container}>
<<<<<<< HEAD
          <StatusBar backgroundColor='#6970E3' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={[styles.text_header,{marginTop: 25 }]}>Select a Recipient:</Text>
=======
        <Text>{"\n\n\n\n\n"}</Text>
          <StatusBar backgroundColor='#6970E3' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Select a Recipient:</Text>
>>>>>>> cb05f5495dd572ed7ec00fd235c90c58a5120824
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <View >
<<<<<<< HEAD
            <Text style={styles.item}>Rick H. Haas</Text>
            <Text style={styles.item}> RickHHaas@rhyta.com </Text>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.Login}
                    onPress={alertSubmit}
=======
            <Text style={styles.name}>Dana McDonald</Text>
            <Text style={styles.item}>(214)123 - 2323 </Text>
            <Text style={styles.item}>Dana123@gmail.com</Text>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.Login}
                    onPress={() => navigation.navigate('LoginScreen')}
>>>>>>> cb05f5495dd572ed7ec00fd235c90c58a5120824
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
<<<<<<< HEAD
            <Text style={styles.item}>Barbara J. Wenz</Text> 
            <Text style={styles.item}>BarbaraJWenz@jourrapide.com</Text>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.Login}
                    onPress={alertSubmit}
=======
            <Text style={styles.name}>John Smith</Text> 
            <Text style={styles.item}>johnS51@gmail.com</Text>
            <Text style={styles.item}>(214)678-9876</Text>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.Login}
                    onPress={() => navigation.navigate('LoginScreen')}
>>>>>>> cb05f5495dd572ed7ec00fd235c90c58a5120824
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
<<<<<<< HEAD
            <Text style={styles.item}>Steven F. Burgess</Text>
            <Text style={styles.item}>StevenFBurgess@rhyta.com</Text>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.Login}
                    onPress={alertSubmit}
=======
            <Text style={styles.name}>Don Hathway</Text>
            <Text style={styles.item}>(469)222-5657</Text>
            <Text style={styles.item}>donh232@gmail.com</Text>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.Login}
                    onPress={() => navigation.navigate('LoginScreen')}
>>>>>>> cb05f5495dd572ed7ec00fd235c90c58a5120824
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
<<<<<<< HEAD
                    onPress={alertSubmit}
=======
                    onPress={() => navigation.navigate('LoginScreen')}
>>>>>>> cb05f5495dd572ed7ec00fd235c90c58a5120824
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
<<<<<<< HEAD
       item: {
         padding: 10,
         fontSize: 18,
         height: 44,
       },
=======
       name: {
         padding: 10,
         fontSize: 22,
         fontWeight: 'bold',
         height: 44,
       },
       item: {
        fontSize: 18,
        paddingLeft: 10
      },
>>>>>>> cb05f5495dd572ed7ec00fd235c90c58a5120824
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
<<<<<<< HEAD
        paddingBottom: 20
=======
        paddingBottom: 50
>>>>>>> cb05f5495dd572ed7ec00fd235c90c58a5120824
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
<<<<<<< HEAD
        fontSize: 14,
        fontWeight: 'bold'
    }
  });
=======
        fontSize: 18,
        fontWeight: 'bold'
    }
  });

>>>>>>> cb05f5495dd572ed7ec00fd235c90c58a5120824
