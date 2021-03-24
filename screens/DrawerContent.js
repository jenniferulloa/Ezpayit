import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import LoginScreen from './LoginScreen';
import BottomTabScreen from './BottomTabScreen';
import TransferScreen from './TransferScreen';
import RecipientsScreen from './RecipientsScreen';
import UserProfileScreen from './UserProfileScreen';

export function DrawerContent(props) {

 
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={{flex: 1}}>
                    <View style={{paddingLeft: 20}}>
                        <View style={{flexDirection:'row',marginTop: 20,marginBottom:15}}>
                            <Avatar.Image 
                                source={require('../assets/userdemo.jpeg')}
                                size={60}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>John Doe</Title>
                            </View>
                        </View>
                        <View style={{flex: 1, height: 2, backgroundColor: '#777B7E'}} />
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color= '#777B7E'
                                size={30}
                                />
                            )}
                            label="Home"
                           onPress={() => {props.navigation.navigate('BottomTabScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color= '#777B7E'
                                size={30}                               />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('UserProfileScreen')}}
                        />
                        
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="cog-outline" 
                                color= '#777B7E'
                                size={30}
                                />
                            )}
                            label="Settings"
                          //  onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color= '#777B7E'
                                size={30}
                                />
                            )}
                            label="Support"
                       //     onPress={() => {props.navigation.navigate('.......')}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color= '#777B7E'
                        size={30}
                        />
                    )}
                    label="Sign Out"
                   // onPress={() => 
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      marginTop: 20,
      fontWeight: 'bold',
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
  });
