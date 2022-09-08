import {useState} from 'react';
import {
    View,   
    StyleSheet,
    FlatList,
    Text,
    Alert 
} from 'react-native';
import Item from './item';
import { upperFirstChar } from '../utils/utils';
import { store } from '../redux/store';
import { saveSet, removeCurrntSet } from '../redux/shopReducers';

import {types} from '../config.json'



const Items = ({navigation,route}) => {

    const [typeName, setTypeName] = useState(route.params[1])
    const [title,setTitle] = useState(upperFirstChar(typeName))
    

    const items = route.params[0];
   


    const nextItme = () => {
        const { currntSet } = store.getState().shopReducer

        const typesList = types;
        for(let i = 0; i < typesList.length; i++){
            if(!currntSet[typesList[i]]){
                setTypeName(typesList[i])
                setTitle(upperFirstChar(typesList[i]))
                return;
                }
            }
            
            return setComplete(currntSet)
           
     }


    const setComplete = (currntSet) =>{
        Alert.alert(
            "Set Complete!",
            "Do you wish to see your sits?",
            [
              {
                text: "Save, and create new set",
                onPress: () => {
                    store.dispatch(saveSet(currntSet))
                    store.dispatch(removeCurrntSet())
                }
              },
              { text: "Yes", onPress: () => {
                store.dispatch(saveSet(currntSet))
                store.dispatch(removeCurrntSet())
                navigation.navigate('My Sets')
            } }
            ]
          );
    }

    
    return (
        <View style={styles.container}>  

            <Text style={styles.title}>{title}</Text>

            <FlatList
                data={items[typeName]}
                renderItem={ (data)=> <Item data={data} nextItme={nextItme} />}
                keyExtractor={(data) => data.id}
            />

        </View>
    )
    
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 30,
        marginBottom: 20,
        alignItems: 'center',
    },
    title:{
        fontSize: 40,
        marginBottom: 10,
        color: 'black',
        fontWeight: 'bold'
    },
})


export default Items;