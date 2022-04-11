import React, { useState } from 'react'
import {Text,View} from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
  const [keresett, setkeresett] = useState("")
  return (
    <View>
    <SearchBar
      szo={keresett}
      valtozas={setkeresett}
    />
    <Text>{keresett}</Text>
    </View>
  )
}

export default SearchScreen