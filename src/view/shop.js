import React, { Component } from 'react';

export class Shop extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    handleClick = () => {
        this.props.history.go(-1)
    }

    btnClick = () => {
        this.props.history.push('/home')
    }

    render() {
        return (
            <div className='box'>
                <div className="top">
                    <div className='left' onClick={()=>{this.handleClick()}}>&lt;</div>
                    <div>购物车</div>
                    <div>...</div>
                </div>
                <div className="center">
                    <div className="centers">
                        <p>
                            <img src={require('../image/1.jpg')} alt=""/>
                        </p>
                        <p>购物车空空如也</p>
                        <p>
                            <button className='btn' onClick={()=>{this.btnClick()}}>继续逛逛</button>
                        </p>
                    </div>
                </div>
                <div className="down">
                    <p className='tit'>-你可能想买-</p>
                    <p>
                        <img src={require('../image/2.jpg')} alt=""/>
                    </p>
                </div>
            </div>
        );
    }
}

export default Shop;
