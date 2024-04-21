import { StatusBar } from 'expo-status-bar';
import { 
  Button,
  StyleSheet,
  Text, 
  TextInput, 
  View } from 'react-native';
import LoginPage from './LoginScreenComponents/LoginPage';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginPage/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
