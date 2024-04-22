import { useState, useEffect } from 'react';
import { 
    Pressable,
    StyleSheet,
    Text, 
    TextInput, 
    TouchableOpacity, 
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
    },
    error: {
        color: 'red'
    },
    });
    
const LoginForm = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [validInput, setValidInput] = useState(false);
    const [loginButtonText, setLoginButtonText] = useState('Login');
    const [loginPressed, setLoginPressed] = useState(false)
    
    useEffect(() => {
        validateForm();
    }, [user, password]);

    const validateForm = () => {
        let errors = {};
        let nonEmpty = false;
        if (user.length != 0 && user.length < 3) {
            errors.user = "username or email must be 3 or more characters";
        } 
        
        if (password.length != 0 && password.length < 6) {
            errors.password = "password must be 6 or more characters"
        }
        
        if (user.length != 0 && password.length != 0) {
            nonEmpty = true;
        }

        setErrors(errors);
        setValidInput(Object.keys(errors).length == 0 && nonEmpty);
    }

    const handleSubmit = () => {
        setLoginPressed(true)
        setLoginButtonText('Loading...');
        setTimeout(()=>{
            setLoginButtonText('Login');
            setLoginPressed(false);
        }, 3000);
    }

    return (
        <View style={styles.container}>
            <View style={styles.input}>
                <View>
                    <Text style={styles.text}> Email or username</Text>
                    <TextInput 
                    style={[styles.inputbox, styles.text]}
                    placeholder='example@gmail.com'
                    placeholderTextColor='#9B9B9B'
                    value={user}
                    onChangeText={setUser}
                    />
                </View>
                <View>
                    <Text style={styles.text}> Password </Text>
                    <TextInput 
                    style={[styles.inputbox, styles.text]}
                    placeholder='minimum 6 characters'
                    placeholderTextColor='#9B9B9B'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    />
                </View>
            </View>
            <View style={styles.buttonBox}>
                <Text style={{color:'#9B9B9B'}} > 
                    Forgot Password?
                </Text>
                <TouchableOpacity
                    style={[styles.loginButton, { opacity: validInput ? 1 : 0.5}]}
                    disabled={!validInput || loginPressed}
                    onPress={handleSubmit}
                >
                    <Text style={styles.text}>{loginButtonText}</Text>
                </TouchableOpacity>

                {Object.values(errors).map((error, index) => (
                    <Text key={index} style={styles.error}>
                        {error}
                    </Text>
                ))}
            </View>
        </View>
    );
}
export default LoginForm;