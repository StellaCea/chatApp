import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import { addDoc, doc, onSnapshot, orderBy, query, collection } from 'firebase/firestore';

const Chat = ({ db, route, navigation }) => {
    const { name, color, userID } = route.params;
    const [messages, setMessages] = useState([]);
    let unsubChat;
    const onSend = (newMessages) => {
        addDoc(collection(db, 'messages'), newMessages[0]);
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
        const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'));
        const unsubChat = onSnapshot(q, (documentsSnapshot) => {
            let newMessagesList = [];
            documentsSnapshot.forEach(doc => {
                newMessagesList.push({ 
                    id: doc.id, 
                    ...doc.data(),
                    createdAt: new Date(doc.data().createdAt.toMillis()),
                });
            });
            setMessages(newMessagesList);
        });

        //Clean up code
        return () => {
            if (unsubChat) unsubChat();
        }
    }, []);

    return (
        <View style={[{ backgroundColor: color }, styles.container]}>
            <GiftedChat 
                style={styles.textBox}
                messages={messages}
                renderBubble={renderBubble}
                onSend={messages => onSend(messages)}
                user={{
                    _id: userID, name
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