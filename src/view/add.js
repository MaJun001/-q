
import React, { Component } from "react";

export class Add extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      Zong: 0
    };
  }
  /**点击返回上一页 */
  handleClick = () => {
    this.props.history.go(-1);
  };
  /**点击购物数量减 */
  delClick = id => {
    let { list } = this.state;

    list.map((item, index) => {
      if (item.id === id) {
        if (item.num > 1) {
          item.num--;
        } else {
          list.splice(index, 1);
        }
      }
    });

    this.setState({
      list: [...list]
    });
    localStorage.setItem("list", JSON.stringify(list));
    this.ZongjiaFn();
  };
  /**点击购物数量添加 */
  addClick = id => {
    let { list } = this.state;

    list.map(item => {
      if (item.id == id) {
        item.num++;
      }
    });
    this.setState({
      list: [...list]
    });
    localStorage.setItem("list", JSON.stringify(list));
    this.ZongjiaFn();
  };

  ZongjiaFn = () => {
    let { list, Zong } = this.state;
    Zong = 0;
    list.map(item => {
      Zong += item.price * 1 * item.num;
    });
    this.setState({
      Zong
    });
  };
  backClick = () => {};

  componentDidMount() {
    // this.setState({
    //     list
    // })
    let list = JSON.parse(localStorage.getItem("list"))||[];
    this.setState(
      {
        list
      },
      () => {
        this.ZongjiaFn();
      }
    );
  }

  render() {
    let { list } = this.state;

    return (
      <div className="boxs">
        <div className="top">
          <div
            className="left"
            onClick={() => {
              this.handleClick();
            }}
          >
            &lt;
          </div>
          <div>购物车</div>
          <div>...</div>
        </div>
        <div className="content">
          <div className="title">精选特卖</div>

          {list.map((item, index) => {
            return (
              <div className="data" key={index}>
                <div className="imgs">
                   
                  <img src={item.img} alt="" />
                </div>
                <div className="pic">
                  <div className="one">
                    <p>{item.title}</p>
                    <p>￥{item.price}</p>
                  </div>
                  <div>唯品会好货精选</div>
                  <div className="two">
                    <p className="btns">
                      <button
                        onClick={() => {
                          this.delClick(item.id);
                        }}
                      >
                        -
                      </button>
                      <span>{item.num}</span>
                      <button
                        onClick={() => {
                          this.addClick(item.id);
                        }}
                      >
                        +
                      </button>
                    </p>
                    <p
                      onClick={() => {
                        alert("确定不要了吗？");
                      }}
                    >
                      X
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="footer">
          <p>唯品自营商品已享受新会员订单满38元免运费</p>
          <p className="cols">
            总金额：
            <b className="col">
              ￥<span>{this.state.Zong}</span>
            </b>{" "}
            &nbsp;&nbsp;(不含运费)
          </p>
          <p className="zong">
            <button
              onClick={() => {
                alert("确定购买吗？");
              }}
            >
              结算
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default Add;
