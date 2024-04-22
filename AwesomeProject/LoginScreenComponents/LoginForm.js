import { 
    Pressable,
    StyleSheet,
    Text, 
    TextInput, 
    View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 16,
        backgroundColor: "#000",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        padding: 10,
        paddingTop: 20
      },
    text: {
        color: '#fff',
    },
    inputbox: {
        height: 30,
        borderBottomColor: '#9B9B9B',
        borderBottomWidth: 1,
    },
    input: {
        flex:1,
        alignSelf: "stretch",
        gap: 15,
    },
    buttonBox: {
        flex: 3,
        alignItems: "center",
        gap: 10
    },
    loginButton: {
        backgroundColor: "#1C83EA",
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: '40%',
    }
    });
    
const LoginForm = () => {
    return (
        <View style={styles.container}>
            <View style={styles.input}>
                <View>
                    <Text style={styles.text}> Email or username</Text>
                    <TextInput 
                    style={[styles.inputbox, styles.text]}
                    placeholder='example@gmail.com'
                    placeholderTextColor='#9B9B9B'
                    />
                </View>
                <View>
                    <Text style={styles.text}> Password </Text>
                    <TextInput 
                    style={[styles.inputbox, styles.text]}
                    placeholder='minimum 6 characters'
                    placeholderTextColor='#9B9B9B'
                    />
                </View>
            </View>
            <View style={styles.buttonBox}>
                <Text style={{color:'#9B9B9B'}} > 
                    Forgot Password?
                </Text>
                <Pressable
                    style={styles.loginButton}
                    
                    color="#1C83EA">
                    <Text style={styles.text}>Login</Text>
                </Pressable>
            </View>
        </View>
    );
}
export default LoginForm;