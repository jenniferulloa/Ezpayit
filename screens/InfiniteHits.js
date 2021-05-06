import React from 'react';
import { StyleSheet, Text, View, FlatList,Image, TouchableOpacity } from 'react-native';
import Highlight from './Highlight'
import PropTypes from 'prop-types';
import { connectInfiniteHits } from 'react-instantsearch-native';
// import { navigation } from 'react-native-navigation';

const InfiniteHits = ({hits, hasMore, refine, navigation}) => (

  
  <FlatList
    style={{backgroundColor:'white'}}
    data={hits}
    keyExtractor={item => item.objectID}
    ItemSeparatorComponent={() => <View style={styles.separator} />}
    onEndReached={() => hasMore && refine()}
    renderItem={({ item }) => (
    
        <TouchableOpacity
              
        onPress={() =>  navigation.navigate('ProductScreen', {items:item})}
        >
        
        <View style={styles.item}>
          <View style={styles.images}>
          <Image style={styles.imgs} source={{uri:item.product_image}}/>
          </View>
  
          <View style={styles.description}>
          {/* <Highlight attribute="product_title" hit={item} /> */}
          <Text style={{fontSize:20}}>{item.product_title}</Text>
          <Text style={{fontSize:25}}>{item.product_price}</Text>
          </View>
          </View>
        </TouchableOpacity> 
      
    )}
  />
  
);

InfiniteHits.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasMore: PropTypes.bool.isRequired,
  refine: PropTypes.func.isRequired,
};

export default connectInfiniteHits(InfiniteHits);


const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  item: {
    padding: 10,
    margin:5,
    // flexDirection: 'column',
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:'space-between',
    borderWidth:1,
    borderColor:'gray',
    borderRadius:5,
  },
  titleText: {
    fontWeight: 'bold',
  },
  imgs: {
    width:120,
    height:120
  },
  description:{
    flex:.5,
    textAlign:'right'
  },
  images:{
    flex:.5
  }
});