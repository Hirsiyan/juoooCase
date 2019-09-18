import React from "react";
import "../assets/css/FamilyCard.css"
import "../assets/fonts/iconfont.css"

class FamilyCard extends React.Component {
    render() {
        return (
            <div id="app">
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
            </div>
        )
    }
}

export default FamilyCard;

