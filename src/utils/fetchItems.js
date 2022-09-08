import { api } from '../config.json';

export const fetchItems = async () =>{
    try{
        const res = await fetch(api)
        const data = await res.json();
        
        if( data && data.length > 0){
            const types = ['shirt','pants','shoes'];
            const obj = {}
            for(let i = 0; i < types.length; i++ ){
                obj[types[i]] = data.filter((item)=> item.type == types[i])
            }

            return obj;
        }


    }catch(err){
        console.log("Error "+err);
        return []
    }
}