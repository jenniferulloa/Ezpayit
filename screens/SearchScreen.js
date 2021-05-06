import React from 'react'
import { 
  View, 
  Text, 
  Button, 
  TouchableOpacity, 
  Dimensions,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MainScreen from './MainScreen'
import { set } from 'react-native-reanimated';
import { registration } from '../config/firebaseMethods';
import {InstantSearch} from 'react-instantsearch-native'
import SearchBox from './SearchBox';
import InfiniteHits from './InfiniteHits';
import RefinementList from './RefinementList';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch('FC1PX55KCJ',"7079ebf36016bcc6e03a64646d2d9b48");

const SearchScreen = ({navigation}) => {
  return (
    <View>
      <InstantSearch
      // appId='FC1PX55KCJ'
      // apiKey="7079ebf36016bcc6e03a64646d2d9b48"
      indexName="ecommerce"
      searchClient = {searchClient}
      >
      <SearchBox/>
      {/* <RefinementList attribute="brand"/> */}
      {/* <Hit hitComponent={Hit}/> */}
      <InfiniteHits navigation={navigation}/>
      </InstantSearch>
    </View>
    
  )
}

export default SearchScreen

const styles = StyleSheet.create({})
