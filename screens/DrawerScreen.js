//Stack Navigator to connect all the screen

import React, {useState} from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabScreen from './BottomTabScreen';
import { DrawerContent } from './DrawerContent';
import TransferScreen from './TransferScreen';
import RecipientsScreen from './RecipientsScreen';
import UserProfileScreen from './UserProfileScreen';


//import credit_debitScreen from './credit_debitScreen';


const Drawer = createDrawerNavigator();

const DrawerScreen = ({navigation}) => (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={BottomTabScreen} />
          {/* <Drawer.Screen name="SupportScreen" component={SupportScreen} /> */}
          <Drawer.Screen name="TransferScreen" component={TransferScreen}/>
          <Drawer.Screen name="RecipientsScreen" component={RecipientsScreen}/>
          <Drawer.Screen name="BottomTabScreen" component={BottomTabScreen}/>
          <Drawer.Screen name="UserProfileScreen" component={UserProfileScreen}/>

        </Drawer.Navigator>
        

        )


export default DrawerScreen;















