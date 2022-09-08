import {types} from './config.json'

function pickColor(color){

    if( !color || color == "undefined" ) return'';


    if(color == 'Black') return 'White';
    if(color == 'White') return 'Black';
    if(color == 'Green') return 'Pink';
    if(color == 'Red') return 'Black';
    if(color == 'Pink') return 'Green';
    return '';

}

// chack if user picked color in currntSet
export default (currntSet) =>{
    for (let i = 0; i < types.length; i++) {
      
        if(currntSet[types[i]] && currntSet[types[i]].color) {

            const color = currntSet[types[i]].color;
            return pickColor(color)
        }
    }
    
}