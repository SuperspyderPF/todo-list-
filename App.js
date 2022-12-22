import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.taskWrapper}>
      <View style={styles.sectionTitle}>Today's Tasks</View>
      <View style={styles.items}>
        <Task text='task 1 '></Task>
        <Task text='task 2 '></Task>
        
      </View>

               

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
  },
  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
  },
  items:{},
});
