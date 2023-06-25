import { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import { KeyboardAvoidingView, Platform } from 'react-native';

const Chat = ({ route, navigation }) => {
    const { name, color } = route.params;
    const [messages, setMessages] = useState([]);
    const onSend = (newMessages) => {
        //apend the new messages to the newMessages array
        setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))
    }
    const renderBubble = (props) => {
        return <Bubble 
            {...props}
            wrapperStyle={{
                right: {
                    backgroundColor:'#000'
                },
                left: {
                    backgroundColor:'#fff'
                }
            }}
        />
    }

    useEffect(() => {
        navigation.setOptions({ title: name });
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'http://placeimg.com/640/480/any',
                },
            },
            {
                _id: 2,
                text: 'You\'ve entered the chat',
                createdAt: new Date(),
                system: true,
            },
        ]);
    }, []);

    return (
        <View style={[{ backgroundColor: color }, styles.container]}>
            <GiftedChat 
                style={styles.textBox}
                messages={messages}
                renderBubble={renderBubble}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1
                }}
            />
            { Platform.OS === 'android' ? <KeyboardAvoidingView behavior='height' /> : null }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 600
    },
    textBox: {
        flex: 1
    }
});

export default Chat;