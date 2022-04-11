import { StyleSheet } from "react-native";

export default styles=StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          },
          bar:{
              backgroundColor:'white',
              height:50,
              margin:15,
              borderRadius:10,
              flexDirection:'row'
          },
          ikon:{
              alignSelf:'center',
              marginHorizontal:15
          },
          input:{
              borderColor:'black',
              borderWidth:1,
              flex:1,
              paddingHorizontal:10,
              fontSize:18
          }
    }
)