import {sizes, types} from './config.json'

function shirtToPants(size){
    if(size == 'S') return 34;
    if(size == 'M') return 38;
    if(size == 'L') return 42;
    if(size == 'XL') return 45;
    if(size == 'XXL') return 48;
}
function shirtToShoes(size){
    if(size == 'S') return 36;
    if(size == 'M') return 39;
    if(size == 'L') return 41;
    if(size == 'XL') return 43;
    if(size == 'XXL') return 46;
}

function pantsToShirt(size){
    if(size > 38) return 'S'
    if(size < 38 && size > 42) return 'M'
    if(size < 42 && size > 45) return 'L'
    if(size < 45 && size > 47) return 'XL'
    if(size < 47) return 'XXL'
}

function pantsToShoes(size){
    if(size > 38) return 36
    if(size < 38 && size > 42) return 39
    if(size < 42 && size > 45) return 41
    if(size < 45 && size > 47) return 43
    if(size < 47) return 46
}

function shoesToShirt(size){
    if(size > 39) return "S"
    if(size < 39 && size > 41) return "M"
    if(size < 41 && size > 43) return "L"
    if(size < 43 && size > 45) return "XL"
    if(size < 45 ) return "XXL"
}

function shoesToPants(size){
    if(size > 39) return 34
    if(size < 39 && size > 41) return 38
    if(size < 41 && size > 43) return 42
    if(size < 43 && size > 45) return 45
    if(size < 45 ) return 48
}


function checkSize(size,lestType,type){
    
    
    
    
    
    if( !size || size == "undefined" ) return'';
    if( !lestType || lestType == "undefined" ) return'';
    if( !type || type == "undefined" ) return'';
    
    
    
    if(lestType == 'shirt' && type == 'pants')return shirtToPants(size)
    
    
    if(lestType == 'shirt' && type == 'shoes')return shirtToShoes(size)
    
    
    if(lestType == 'pants' && type == 'shirt')return pantsToShirt(size)
    
    
    if(lestType == 'pants' && type == 'shoes')return pantsToShoes(size)
    
    
    if(lestType == 'shoes' && type == 'shirt')return shoesToShirt(size)
    
    
    if(lestType == 'shoes' && type == 'pants')return shoesToPants(size)
    
    
    return ''
    
    
}

export default (currntSet,item) => {
      

        for(let i = 0; i < types.length; i++){ 
  
          if(currntSet[types[i]] && currntSet[types[i]].type !=  item.type) {
  
            if(currntSet[types[i]].size !== 'undefined'){
              
                const size = currntSet[types[i]].size
                return checkSize(size,currntSet[types[i]].type, item.type)
            }
        }
        return ''
    }
}