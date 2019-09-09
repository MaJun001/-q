
import React, { Component } from 'react';

import axios from 'axios'

export class Home extends Component {
    constructor(){
        super()
        this.state = {
            navList:[
                {'name':'综合'},
                {'name':'销量'},
                {'name':'品牌'},
                {'name':'筛选'}
            ],
            dataList:[]
        }
    }

    componentDidMount(){

        let list= JSON.parse(localStorage.getItem("allList"))||[]
      
        if(list.length===0){
            
            axios.get('/api/list').then((res)=>{
                this.setState({
                    dataList:res.data.list
                })
                localStorage.setItem("allList",JSON.stringify(res.data.list))
            })
        }else{
           
            this.setState({
                dataList:list
            })
        }
        
    }

    handleClick = (item) => {
        this.props.history.push('/xiangqing',{
            id:item
        })
    }

    render() {
        let list = this.state.dataList;
       
        return (
            <div className='wrap'>
                <div className="head">
                    {this.state.navList.map((item,index)=>{
                    return (
                        <div key={index}>{item.name}</div>
                    )
                })}
                </div>
                <div className="content">
                    {list&&list.map((item,index)=>{
                        return (
                            <div key={index} onClick={()=>{this.handleClick(item)}}>
                                <img src={item.img} alt=""/>
                                <p>
                                    <span>快抢价</span>
                                    ￥{item.price}
                                </p>
                                <p>{item.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Home;
