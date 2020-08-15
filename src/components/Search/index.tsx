import React from 'react';

import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles'

function Search() {

  return(
    <>
      <View style={ styles.viewSearch }>
        <TextInput 
          style={ styles.input }
          placeholder='Procurando algo?'
        />
        <TouchableOpacity style={styles.icon}>
          <MaterialIcons name='search' color='#000' size={ 25 }/>
        </TouchableOpacity>
      </View>

      <Text style={ styles.title }>
        Acabou de chegar
      </Text>

      <View style={ styles.slideView }>

      </View>
    </>
  )
}

export default Search;