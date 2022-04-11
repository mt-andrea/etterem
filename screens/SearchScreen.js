import React, { useState } from 'react'
import {Text,View} from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
  const [keresett, setkeresett] = useState("")
  const [ettermek, setettermek] = useState([])

  const searchAPI=async()=>{
    const URL='http://thingproxy.freeboard.io/'+
    'https://api.yelp.com/v3/businesses/search?limit=20&term=restaurant&location='+
    keresett
    const auth={
      headers:{
        Authorization:'Bearer XUIeohpnIeWC4muL4Sjqk2r_6zJoQ3C5iXqcInqAkrr4EjDewbpne460FBtAEcwFAK11NIK68uUwKTt4C5kUP4E9KMzcMIw5v3yMv6rUt2EXryn_t7o5nX3fGnNIYnYx'
      }
    }
    const response=await fetch(URL,auth)
    if (response.ok) {
      let json=await response.json()
      setettermek(json.businesses)
    } else {
      setettermek([])
    }
  }

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