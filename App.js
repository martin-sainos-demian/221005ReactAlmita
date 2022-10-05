import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntxt}>+</Text>
        </TouchableOpacity>
        <View style={styles.separate}></View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntxt}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0a0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer:{
    height: 50,
    width: '100%',
    paddingHorizontal:10,
    flexDirection:'row'
  },
  btn:{
    width:100,
    height:100,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#a000e0'
  },
  btntxt:{
    fontSize:20,
  },
  separate:{
    width:10
  }
});
