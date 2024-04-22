import { 
    StyleSheet,
    Text, 
    Button,
    View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignSelf: "stretch",
        paddingTop: 30,
        gap:120
    },
    headerText: {
        color: "#fff",
        flex: 1,
        alignSelf: "center",
    }
    });
    
const LoginHeader = () => {
    return (
        <View style={styles.container}>
            <Icon.Button
                name="arrowleft"
                color="#1C83EA"
                backgroundColor="transparent"
                style={styles.backButton}
            >
            </Icon.Button>
            <Text style={styles.headerText}> Login </Text>
      </View>
    );
}
export default LoginHeader;