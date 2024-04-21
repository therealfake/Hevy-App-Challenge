import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  View } from 'react-native';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'stretch',
      backgroundColor: '#1C1C1E'
    },
    text: {
      color: '#fff',
    },
  });

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <LoginHeader />
      <LoginForm />
      <StatusBar style="auto" />
    </View>
  );
}



export default LoginPage;
