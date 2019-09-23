import React from "react";
import "../assets/css/FamilyCard.css"
import "../assets/fonts/iconfont.css"
import Tools from "../common/Tools";
import axios from "axios"

class FamilyCard extends React.Component {
    constructor() {
        super();
        this.state = {
            showList: [],
        }
    }

    render() {
        return (
            <div id="app">
                <div className={"top"}>
                    <section className="title">
                        <span className="iconfont">&#xe603;</span>
                        <span>欢乐家庭卡PLUS</span>
                        <span className="iconfont">&#xe600;</span>
                    </section>
                    <div className={"card"}>
                        <div className={"van"}>
                            <div className={"card_cover"}>
                                <div className={"card_mary"}>欢乐家庭卡PLUS</div>
                                <span className={"card_secondary"}>次卡</span>
                                <div className={"card_price"}>￥999</div>
                                <div className={"card_date"}>有效期：12个月</div>
                            </div>
                        </div>
                    </div>
                    <div className={"buy_card"}>
                        <button className={"card_button"}>立即购卡</button>
                    </div>
                    <div className={"tips"}>
                        <span>30张兑换券 低至</span>
                        <span className={"tip_money"}>33元</span>
                        <span className={"tip_rule"}>使用规则</span>
                    </div>
                    <div className={"entry_block"}>
                        <div className={"entry_block_title"}>演出兑换
                            <span className={"entry-block__title__desc"}></span>
                            <i className={"iconfont"}>&#xe603;</i>
                        </div>
                    </div>
                    <div className={"schedule"}>
                        {this.state.showList.map((v, i) => {
                                return (
                                    v.map((v, i) => {
                                        return (
                                            <div key={v.schedular_id} className={"cell"}>
                                                <div className={"item"}>
                                                    <div className={"item_cover"}>
                                                        <img src={v.pic}/>
                                                    </div>
                                                    <div className={"item_info"}>
                                                        <div
                                                            className={"item_info_date-week"}>{Tools.time(v.month_day)} / {Tools.time(v.month_day)}</div>
                                                        <div className={"item__info__name"}>
                                                            <div className={"item__info__name_double"}>{v.schedular_name}</div>
                                                        </div>
                                                        <div
                                                            className={"item__info__place"}>{v.city_name} | {v.venue_name}</div>
                                                        <div className={"cell__ratio"}>
                                                            <span className={"cell__ratio__value"}>{v.leastDiscount}</span>
                                                            <span className={"cell__ratio__value-desc"}>起</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                )
                            }
                        )}
                        <div className={"schedule__more-wrapper"}>
                            <a href="https://m.juooo.com/Cardproduct/getYearShowList/228">
                                <button className={"schedule__more-wrapper__button"}>查看更多演出</button>
                            </a>
                        </div>
                    </div>
                    <div className={"bottom"}>
                        <button className={"ju_button"}>立即购卡</button>
                    </div>
                </div>

            </div>
        )
    }

    async getData() {
        const info = await axios.get("juooo/Card/index/getCardExchangeList?group_id=228&version=6.0.5&referer=2")
        console.log(info.data.data);

        this.setState({
            showList: [...this.state.showList, [...info.data.data.data]]
        });
        console.log(this.state.showList)
    }

    componentDidMount() {
        this.getData();
    }
}
export default FamilyCard;

