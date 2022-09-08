import React from 'react';
import {
    View,   
    StyleSheet,
    Pressable,
    Text
} from 'react-native';


const Main = ({navigation}) => {

    return (
        <View style={styles.container}>
            
            <>
                <View style={styles.headerBox}>
                    <Text style={styles.h1}>Welcome to app name</Text>
                    <Text style={styles.headerText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem 
                    </Text>
                </View>
            
                <View>
                    <Pressable style={styles.pressable} onPress={()=> navigation.navigate('Buttons')} >
                        <Text style={styles.btnText}>All Clothing</Text>

                    </Pressable>
                    <Pressable style={styles.pressable} onPress={()=> navigation.navigate('My Sets')} >
                        <Text style={styles.btnText}>My Sets</Text>
                    </Pressable>
                </View>
            </>         
            

        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginTop: 80,
        alignItems: 'center',
        
    },
    headerBox:{
        marginBottom: 25,
        alignItems: 'center',
    },
    h1:{
        color:'black',
        fontSize: 33,
        fontWeight: '300',
        fontFamily: 'sans-serif',
        fontStyle: 'italic',
        
    },
    headerText:{
        // color:'black',
        fontSize: 16,
        textAlign: 'center',
        width: 300
        
    },
    pressable:{ 
        width: 250,
        marginVertical: 20 ,
        borderRadius: 8,
        padding: 6,
        alignItems: 'center',
        backgroundColor: '#f4511e'
    },
    btnText:{
        fontSize: 30,
        color:'#fff'
    }
})

export default Main;