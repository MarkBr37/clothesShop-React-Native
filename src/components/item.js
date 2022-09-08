import {useState,useEffect} from 'react';
import {
    View,   
    StyleSheet,
    Pressable,
    Text,
    Modal,
    Image 
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import { images, sizes, color, types} from '../config.json';

import { useSelector,useDispatch } from 'react-redux';
import { addCurrntSet } from '../redux/shopReducers';

import styleItem from '../style/item';

import colorPicker from '../colorPicker';
import sizePicker from '../sizePicker';



const Item = ({data, nextItme}) => {
    const { currntSet } = useSelector(start=> start.shopReducer)
    const { item } = data;

    const [modalVisible, setModalVisible] = useState(false);
    const [btnColor, setBtnColor] = useState({backgroundColor: "#d5d7dd"});

    const [selectedSize, setSelectedSize] = useState(sizePicker(currntSet,item));
    const [selectedColor, setSelectedColor] = useState(colorPicker(currntSet));

    const dispatch = useDispatch();

    // for SelectDropdown
    const sizeSelects = sizes[item.type];
    const colorSelects = color;
    

    const restSelectedAndBtn = () =>{
      setSelectedColor('');
      setSelectedSize('');
      setBtnColor({backgroundColor: "#d5d7dd"});
    }


    const userSelecte = ({selectedColor,selectedSize,item}) => {

      item['color'] = selectedColor;
      item['size'] = selectedSize;
      return item;
    }


    const handleOnSave = () =>{
      
        dispatch(addCurrntSet(userSelecte({selectedColor,selectedSize,item}))) 
        restSelectedAndBtn();
        return nextItme(item.type,userSelecte({selectedColor,selectedSize,item}));
    }


    useEffect(()=>{
      if(selectedColor && selectedSize) setBtnColor({backgroundColor: "#198754"})
    },[selectedSize,selectedColor])
    
    return (
        <>
            <View style={styles.container}>  

                <Pressable style={styles.pressable} onPress={()=> {
                  setModalVisible(true)
                  }}>
                    <Text style={styles.btnText}>{item.brand}</Text>
                </Pressable>

            </View>

            <Modal
              animationType="fade"
              transparent={true}
              hardwareAccelerated={true}
              visible={modalVisible}
              onRequestClose={() => {
                restSelectedAndBtn()
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredModal}>
                <View style={styles.modalView}>

                    

                    <Image 
                    style={styles.modalImage}
                    source={{
                        uri: images[item.type]
                    }} />
                    

                    <View style={styles.dropBox} >


                      <SelectDropdown 
                        defaultButtonText={selectedSize ? selectedSize : 'Size'}
	                      data={sizeSelects}
                        defaultValue={selectedSize ? selectedSize : 'Size'}
                        buttonStyle={styles.dropButton}
	                      onSelect={(selected_size) => {
                          
                          setSelectedSize(selected_size);
                          
	                      }}
                      />
                      <SelectDropdown 
                        defaultButtonText={selectedColor ? selectedColor : 'Color'} 
                        data={colorSelects}
                        defaultValue={selectedColor ? selectedColor : 'Color'}
                        buttonStyle={styles.dropButton}
                        onSelect={(selected_color)=>{
                          
                          setSelectedColor(selected_color);
                          
                        }}
                      />

                       
                    </View>

                  <Pressable
                    style={[styles.button, styles.buttonSave, btnColor]}
                    onPress={() => {
                        if(selectedColor && selectedSize){
                          setModalVisible(!modalVisible);
                          handleOnSave();
                        }
                      }}
                  >
                    <Text style={styles.textStyle}>Save</Text>
                  </Pressable>

                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                      restSelectedAndBtn()
                      setModalVisible(!modalVisible)
                    }}
                  >
                    <Text style={[styles.textStyle, styles.btnCloseText]}>Close</Text>
                  </Pressable>

                </View>
              </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create(styleItem)

export default Item;