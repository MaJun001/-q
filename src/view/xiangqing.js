
import React, { Component } from "react";

export class Xiangqing extends Component {
  constructor() {
    super();
    this.state = {
      navList: [{ name: "商品" }, { name: "推荐" }, { name: "详情" }]
    };
  }

  handleClick = () => {
    this.props.history.push("/home");
  };

  shopClick = () => {
    let store = JSON.parse(localStorage.getItem("list")) || []
      if(store.length>0){
        this.props.history.push("/add");
      }else{
        this.props.history.push("/shop");
      }
  
  };

  addClick = item => {
    let store = JSON.parse(localStorage.getItem("list")) || [];

    let ind = store.findIndex(iten => {
      return iten.id === item.id;
    });
    if (ind < 0) {
      store.push(item);
    }else{
        store[ind].num++
    }

    localStorage.setItem("list", JSON.stringify(store));
    this.props.history.push("/add");
  };

  btnClick = () => {
    alert(222);
  };

  render() {
    let { location } = this.props;
    let list = location.state.id;
    return (
      <div className="wrapper">
        <div className="fanhui">
          <span onClick={() => {this.handleClick()}}>&lt;</span>
          <input type="text" placeholder="唯品会特卖搜索" />
        </div>
        <div className="header">
          {this.state.navList.map((item, index) => {
            return <div key={index}>{item.name}</div>;
          })}
        </div>
        <div className="xiang">
          <img src={list.img} alt="" />
          <p>
            <span>快抢价</span>￥{list.price}
          </p>
          <p>{list.title}</p>
        </div>
        <div className="shop">
          <div className="kf">
            <p>客服</p>
            <p>品牌</p>
          </div>
          <div className="shops" onClick={() => { this.shopClick()}}>
            购物车
          </div>
          <div className="btn">
            <button className="left" onClick={() => { this.addClick(list)}}>
              加入购物车
            </button>
            <button className="right" onClick={() => { this.btnClick()}}>
              立即购买
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Xiangqing;
