import React from 'react'
<<<<<<< HEAD

//import '../../assets/css/reset.css'

=======
>>>>>>> 90932bc9d0b7a52981c264d55dd0855bb44efbad
import '../../assets/css/MyCardBag/BuyCardMain.css'
import CardSwiper from "../../component/MyCardBag/CardSwiper";

import axios from 'axios'
class BuyCardMain extends React.Component{
    constructor() {
        super();
        // 初始化数据，this.state是数据状态，利用this.setState改变state的数据状态
        this.state = {
            dataList: [],
            dataListItem:[],
            dataListItemSon:[],
            dataListItemSonTwo:[],

        }
    }
    render() {
        return(
            <div className={"BuyCardMain-wrap"}>
                <div className={"wrap"}>
                   <p>这个轮播图待会要换</p>
                    <p>先在这呆一会</p>
                    <CardSwiper></CardSwiper>
                    <p>BuyCardMain</p>
                </div>
                <div className={"nav"}>
                    {/*导航*/}
                    <div className={"entry-block__title"}>
                    <h2>VIP+</h2>
                    <h6>开通VIP+，演出随心看</h6>
                    <span>小箭头</span>
                    </div>
                    <div className={"nav-bottom"}>
                        休闲购票
                        手指滑动轮播
                    </div>
                </div>
                {/*列表渲染*/}
                {/*利用map遍历我们拿到的数据（this.state.datalist）*/}
                {/*key的作用就说高效的更新虚拟dom，react中多用于回调函数*/}
                {
                    this.state.dataList.map((v,i)=>(
                        <div className={"list"} key={i}>
                            {/*卡片详情头部*/}
                                <div className={"entry-block__title"}>
                                    <h2>{v.card_type_name}</h2>
                                    <h6>{v.store_title}</h6>
                                </div>
                            {/*卡片详情*/}
                            <div className={"card-cell"}>
                            <img src={v.card_image} alt=""/>
                                 {/*卡片说明*/}
                                <div className={"list-right"}>
                                    <h3>{v.name}</h3>
                                    <p>有效期：{v.avail_mouth?0:"长期有效"}</p>
                                    <div>
                                        {/*可以加过滤器，第二个获取*/}
                                        <span>￥{v.card_price}</span><span>{v.give_vip !== 1?"兑换券":"赠VIP+"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                {/*第二页卡片详情*/}
                {
                    this.state.dataListItem.map((v,i)=>(
                        <div className={"list"} key={i}>
                            <div className={"entry-block__title"}>
                                <h2>城市·次卡</h2>
                                <h6></h6>
                            </div>
                            {
                                this.state.dataListItemSon.map((v,i)=>
                                    <div className={"card-cell"} key={i}>
                                        <img src={v.card_image} alt=""/>
                                        {/*卡片说明*/}
                                        <div className={"list-right"}>
                                            <h3>{v.name}</h3>
                                            <p>有效期：{v.avail_mouth === 0?v.effect_end_time:v.avail_mouth+"个月"}</p>
                                            <div>
                                                {/*可以加过滤器，第二个获取*/}
                                                <span>￥{v.card_price}</span><span>{v.give_vip !== 1?"兑换券"+v.use_limit+"张":"赠VIP+"}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    ))
                }
                {/*第三页卡片详情*/}
                {
                    this.state.dataListItem.map((v,i)=>(
                        <div className={"list"} key={i}>
                            <div className={"entry-block__title"}>
                                <h2>品类·次卡</h2>
                                <h6></h6>
                            </div>
                            {
                                this.state.dataListItemSonTwo.map((v,i)=>
                                    <div className={"card-cell"} key={i}>
                                        <img src={v.card_image} alt=""/>
                                        {/*卡片说明*/}
                                        <div className={"list-right"}>
                                            <h3>{v.name}</h3>
                                            <p>有效期：{v.avail_mouth === 0?v.effect_end_time:v.avail_mouth+"个月"}</p>
                                            <div>
                                                {/*可以加过滤器，第二个获取*/}
                                                <span>￥{v.card_price}</span><span>{v.give_vip !== 1?"兑换券"+v.use_limit+"张":"赠VIP+"}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    ))
                }
                <div className={"font"}>
                    {/*页脚*/}
                </div>

            </div>
        )
    }
    // axios可能异步执行，所以把他放在componentDidMount里执行，理由在下面react周期里有介绍
    async listmore(){
        const {data}=await axios.get('https://api.juooo.com/Card/index/getCardGroupList?version=6.0.5&referer=2')
        // this.setState()用来更新this.state的数据,{...data.data}是我们axios获取到的数据，用...运算符与this.state.dataList原有的数据合并，this.state.dataList中原来没有数据且只更新一次也可以不加
        console.log(data.data.cate_card[0])
        this.setState({
            dataList:[...this.state.dataList,{...data.data,...data.data.store_card[0]}],
            dataListItem:[...this.state.dataListItem,{...data.data.cate_card[0]}],
            dataListItemSon:[...this.state.dataListItemSon,{...data.data.cate_card[0]},{...data.data.cate_card[1]}],
            dataListItemSonTwo:[...this.state.dataListItemSonTwo,{...data.data.once_card[0]},{...data.data.once_card[1]},{...data.data.once_card[2]},{...data.data.once_card[3]},{...data.data.once_card[4]},{...data.data.once_card[5]}],
        })
        console.log(this.state.dataListItem[0])
        console.log(this.state.dataList[0])
    }
    // componentWillMount 在渲染前调用,在客户端也在服务端。
    // componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。
    // componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
    // shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
    // 可以在你确认不需要更新组件时使用。
    // componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
    // componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。
    // componentWillUnmount在组件从 DOM 中移除之前立刻被调用。
    componentDidMount() {
        this.listmore();
    }
}
export default BuyCardMain;

