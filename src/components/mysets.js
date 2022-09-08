
import {
    View,   
    StyleSheet,
    FlatList,
    Text,
    Pressable
    
} from 'react-native';
import { upperFirstChar } from '../utils/utils';
import { useSelector } from 'react-redux';




const MySets = ({navigation}) => {
    
    const mySets = useSelector(state => state.shopReducer.savedsSet)
    

    return (
        <View style={styles.container}>  

            { !mySets[0] && 
            <>
                
                <Text style={styles.text}>No sets found ... </Text>  
                <Pressable style={styles.pressable} onPress={()=> navigation.navigate('Buttons')} >
                        <Text style={styles.btnText}>To Set </Text>

                </Pressable>
            </>
            }

            { mySets[0] && 
            <>
                
                <FlatList
                data={mySets}
                renderItem={ ({item, index})=> {
                        return (
                        <View style={styles.set} key={index} >

                            <Text style={styles.setTitle}>Set {index + 1}.</Text>
                            <Text style={styles.name}>{upperFirstChar(item.shirt.type)}</Text>
                            <Text style={styles.listText}>
                                {item.shirt.brand+' '+item.shirt.type}
                            </Text>
                            <Text style={styles.listText}>Size: {item.shirt.size}</Text>
                            <Text style={[styles.listText,styles.lest]}>Color: {item.shirt.color}</Text>

                            <Text style={styles.name}>{upperFirstChar(item.pants.type)}</Text>
                            <Text style={styles.listText}>
                                {item.pants.brand+' '+item.pants.type}
                            </Text>
                            <Text style={styles.listText}>Size: {item.pants.size}</Text>
                            <Text style={[styles.listText,styles.lest]}>Color: {item.pants.color}</Text>

                            <Text style={styles.name}>{upperFirstChar(item.shoes.type)}</Text>
                            <Text style={styles.listText}>
                                {item.shoes.brand+' '+item.shoes.type}
                            </Text>
                            <Text style={styles.listText}>Size: {item.shoes.size}</Text>
                            <Text style={[styles.listText,styles.lest]}>Color: {item.shoes.color}</Text>
                            
                          
                        </View>  
                        )
                    }
                }
            />
            </>
            }

            {/* <Pressable style={styles.smallPressable} >
                <Text style={styles.smallbtnText} onPress={()=> navigation.navigate('Home')}>Back Home</Text>
            </Pressable> */}
        </View>
    )
    
};

const styles = StyleSheet.create({
    container:{
        
        marginTop: 30,
        marginBottom: 20,
        alignItems: 'center',
    },
    text:{
        fontSize: 22,
        marginBottom: 10,
        fontStyle:"italic",
        // color: 'black'
    },
    pressable:{ 
        width: 250,
        marginVertical: 20 ,
        borderRadius: 8,
        padding: 6,
        alignItems: 'center',
        backgroundColor: '#DFAFA4'
    },
    btnText:{
        fontSize: 30,
        color:'black'
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
    },
    set:{
        width: 350,
        marginVertical: 20 ,
        borderRadius: 8,
        padding: 6,
        backgroundColor:"#d9d9d9"
        
    },
    setTitle:{
        fontSize:28,
        color: 'black',
        marginBottom:10
    },
    listText:{
        // textAlign:"justify"
        fontSize:20
    },
    lest:{
        marginBottom:10
    },
    name:{
        fontSize:24,
        color: 'black'
    }

})


export default MySets;