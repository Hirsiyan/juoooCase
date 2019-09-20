import React from "react";
import "../assets/css/Discount.css"
import Swiper from 'swiper';
import "../assets/fonts/iconfont.css"
import axios from "axios";

class Discount extends React.Component{
    constructor(){
        super();
        this.state= {
            CategoryList:[],
            DiscountList:[]
        }
    }
    render() {
        return(
            <div id={"app"}>
                <div className={"discount"}>
                    <div className={"discount_head"}>
                        <section className={"title"}>
                            <span className="iconfont">&#xe603;</span>
                            <span>专享折扣</span>
                            <span className="iconfont">&#xe600;</span>
                        </section>
                    </div>
                        <div className={"tab-box"}>
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    <div className={"whole"}>全部</div>
                                    {this.state.CategoryList.map((v,i)=>(
                                        <div key={v.id} className="swiper-slide" data-history="slide1">{v.name}</div>
                                    ))}
                                </div>
                            </div>
                            <div className={"slide-tab-right"}>筛选</div>
                        </div>
                    <div className={"discount-scroll"}>
                        <div className={"discount__item"}>
                            <div className={"exclusive-card"}>
                                {this.state.DiscountList.map((v,i)=>(
                                    <div key={i} className={"item_exclusive-card__base"}>
                                        <img className={"pic"} src={v.pic}/>
                                        <div className={"item__info"}>
                                            <div className={"item__info__date-week"}>
                                                {v.date}
                                            </div>
                                            <div className={"item_info_name"}>
                                                {v.schedular_name}
                                            </div>
                                            <div className={"item_info_place"}>
                                                {v.city_name} | {v.venue_name}
                                            </div>
                                            <div className={"exclusive-card__extra-wrapper"}>
                                                ￥ {v.min_price}
                                            </div>

                                        </div>
                                        <div className={"discount__item__bottom"}>
                                            {v.end_time} {v.min_discount}
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
    async getData (){
        const info = await axios.get("/juooo/Show/Index/getShowCategoryList?version=6.0.5&referer=2");
        console.log(info.data.data);

        this.setState({
            CategoryList:info.data.data
        });
        console.log(this.state.CategoryList);
    }
    async getDiscount(){
        const info = await axios.get("/juooo/vip/index/getDiscountList?page=1&city_id=0&cate_id=0&discount_id=0&version=6.0.5&referer=2");
        console.log(info.data.data);

        this.setState({
            DiscountList:info.data.data.list
        });
        console.log(this.state.DiscountList)
    }



    componentDidMount() {
        this.getData();
        this.getDiscount();
        var swiper = new Swiper('.swiper-container', {
            history: true,
        });
    }
}
export default Discount;