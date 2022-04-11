import React from 'react'
import {Text,View} from 'react-native'
import style from '../const/style'
import { FontAwesome5 } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = (props) => {
  return (
    <View style={style.bar}>
    <FontAwesome5 name="search-location" size={36} color="black" style={style.ikon}/>
    <TextInput
        style={style.input}
        placeholder='Kereses'
        value={props.szo}
        onChangeText={t=>props.valtozas(t)}
    />
    </View>
  )
}

export default SearchBar