import { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Chat = ({ route, navigation }) => {
    const { name, color } = route.params;

    useEffect(() => {
        navigation.setOptions({ title: name });
    }, []);

    return (
        <View style={[{ backgroundColor: color }, styles.container]}>
            <Text style={styles.text}>Happy Chatting!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 600
    }
});

export default Chat;