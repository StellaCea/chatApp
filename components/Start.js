import { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, ImageBackground, TouchableOpacity } from 'react-native';


const Start = ({ navigation }) => {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');

    const backGrColor = {
        green: { backgroundColor: '#56E453' },
        blue: { backgroundColor: '#5396E4' },
        purple: { backgroundColor: '#9161F6' },
        orange: { backgroundColor: '#F58E54' }
    };

    const { green, blue, purple, orange } = backGrColor;

    return (
        <ImageBackground
            source={require('../assets/chat.png')}
            resizeMode= 'cover'
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.title}>Chat App</Text>
                        <TextInput 
                        style={styles.textInput}
                        value={name}
                        onChangeText={setName}
                        placeholder='Your name'
                    />
                    <View style={styles.colorSelect}>
                        <Text style={styles.colorSelectText}>Choose Background Color</Text>
                        <View style={styles.colorCircleWrapper}>
                            <TouchableOpacity 
                                style={[styles.colorCircle, { backgroundColor: 'green'} ]}
                                onPress={() => setColor('#56E453')}
                            ></TouchableOpacity>
                            <TouchableOpacity 
                                style={[styles.colorCircle, blue]}
                                onPress={() => setColor('#5396E4')}
                            ></TouchableOpacity>
                            <TouchableOpacity 
                                style={[styles.colorCircle, purple]}
                                onPress={() => setColor('#9161F6')}
                            ></TouchableOpacity>
                            <TouchableOpacity 
                                style={[styles.colorCircle, orange]}
                                onPress={() => setColor('#F58E54')}
                            ></TouchableOpacity>
                        </View>
                    </View>
                    
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Chat', { name: name, color: color })}
                    >
                        <Text style={styles.buttonText}>Start Chatting</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: '88%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    textInput: {
        width: '88%',
        padding: 15,
        borderWidth: 1,
        marginTop: 15,
        marginBottom: 15
    },
    backgroundImage: {
        flex: 1,
    },
    title: {
        fontWeight: '600',
        fontSize: 45,
    },
    colorSelect: {
        height: 75
    },
    colorSelectText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '300',
        color: '#757083'
    },
    
    colorCircleWrapper: {
        flexDirection: 'row'
    },
    colorCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        margin: 10
    },
    colorCircleSelected: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'brown'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'brown',
        padding: 10,
        width: '88%',
        height: 56,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 600
    }
});

export default Start;