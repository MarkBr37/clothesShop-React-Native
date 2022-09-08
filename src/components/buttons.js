import React,{useState} from 'react';
import {
    View,   
    StyleSheet,
    Pressable,
    Text
} from 'react-native';
import { useSelector} from 'react-redux';



const Buttons = ({navigation}) => {
    const [items] = useState(useSelector(state => state.shopReducer.items));
    

    const goTo = ( tagName ) => {
        if( items && items[tagName]){

            navigation.navigate('Items',
                [items, tagName]
            )
        }
    }


    return (
        <View style={styles.container}>
            

                <View style={{alignItems: 'center'}}>
                    <Text style={styles.title}>All Clothing</Text>
                    <Pressable style={styles.pressable} onPress={()=> goTo('shirt')} >
                        <Text style={styles.btnText}>Shirts ({items && items['shirt'].length})</Text>
                    </Pressable>

                    <Pressable style={styles.pressable} onPress={()=> goTo('pants')} >
                        <Text style={styles.btnText}>Pants ({items && items['pants'].length})</Text>
                    </Pressable>

                    <Pressable style={styles.pressable} onPress={()=> goTo('shoes')} >
                        <Text style={styles.btnText}>Shoes ({items && items['shoes'].length})</Text>
                    </Pressable>

                    <Pressable style={styles.smallPressable} >
                        <Text style={styles.smallbtnText} onPress={()=> navigation.navigate('Home')}>Back</Text>
                    </Pressable>
                </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginTop: 60,
        alignItems: 'center',
    },
    title:{
        fontSize: 30,
        marginBottom: 10,
        color: 'black'
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
    },
    smallPressable:{
        width: 150,
        marginVertical: 20 ,
        borderRadius: 8,
        padding: 6,
        backgroundColor: '#d5d7dd'
    },
    smallbtnText:{
        fontSize: 20,
        textAlign:'center'
    }

})

export default Buttons;