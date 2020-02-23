import React ,{Component} from 'react'
import { Input,Button,List } from 'antd';
import store from '../../store';
import { changeInput ,addtodoList,removetolist} from '../../action'
import {getOssConfig} from '../../services'

class Todolist extends Component {

    constructor(props){
        super(props);

        console.log(store.getState())

        this.state = store.getState()

        store.subscribe(() =>
          this.setState(store.getState())
        );
    }
    componentWillMount(){
        getOssConfig().then((res)=>{
            console.log(res)
        })
    }
    changInputValue(e){
        console.log(e);
        const action = {
            type:changeInput,
            value:e.target.value
        }

        store.dispatch(action)
    }
    addList(){
        const action = {
            type:addtodoList,
        }

        store.dispatch(action)
    }

    remove(index){
        const action = {
            type:removetolist,
            index
        }

        store.dispatch(action)
    }
    render(){
        return (
            <div style={{margin:10}}>
                <div>
                   <Input 
                       placeholder={this.state.inputValue}
                       style={{width:250}}
                       onChange={this.changInputValue.bind(this)}
                       value={this.state.inputValue}
                       
                   />
                    <Button type="primary" onClick={this.addList.bind(this)}  > 增加   </Button>
                </div>
                <div>
                    <List
                     dataSource={this.state.list}
                    
        renderItem={(item,index) =><List.Item  onClick={this.remove.bind(this,index)}>{item}</List.Item>}
                    />
                </div>
            </div>
        )
    }
}


export default Todolist