import {changeInput,addtodoList,removetolist} from '../action';
import {getOssConfig} from '../services'

const defaultState = {
    inputValue:'some wring',
    list:[
        '11111',
        '22222'
        ]
};



export default (state = defaultState,action)=>{
    if(action.type === changeInput){
       return {
           ...state,
           inputValue:action.value
       }
    }
    if(action.type === addtodoList){
        const list = state.list;
              list.push(state.inputValue)
        return {
            ...state,
            list,
            inputValue:''
        }
     }

     if(action.type === removetolist){
        const list = state.list;
        list.splice(action.index,1)
        // let data = await getOssConfig()
        // console.log(data)
        return {
            ...state,
            list
        }
     }
    return state
}