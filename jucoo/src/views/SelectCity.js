import React from "react"
import "../assets/css/selectCity.css"
import axios from 'axios'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import changeSelec from "../store/actionCreators/selectCity"

class SelectCity extends React.Component {
    render() {
        return (
            <>
                <div className={"city"}>
                    <div className="head-nav">
                       <span className={"head_icon"}>
                       </span>
                        <h3 className={"title text-single"}>
                            城市选择
                        </h3>
                    </div>
                    <section className={"city-block"}>
                        <div className={"city-block__wrapper"}>
                            <div className={"city-block__con"}>
                                <span className={"city-block__con__tip"}>当前城市</span>
                                <ul className={"city-block__con__wrap"}>
                                    <li className={"city-block__con__item"}>全国</li>
                                </ul>
                            </div>
                            <div className={"city-block__con"}>
                                <span className={"city-block__con__tip"}>定位城市</span>
                                <ul className={"city-block__con__wrap"}>
                                    <li className={"city-block__con__item"}>全国</li>
                                </ul>
                            </div>
                            <div className={"city-block__con"}>
                                <span className={"city-block__con__tip"}>热门城市</span>

                                <ul className={"city-block__con__wrap"}>
                                    <li className={"city-block__con__item hots--item"}>全国</li>
                                    {
                                        this.props.cityList.map(v => (
                                            <li className={"city-block__con__item hots--item"} key={v.id}>{v.name}</li>
                                        ))
                                    }

                                </ul>
                            </div>
                        </div>

                    </section>
                </div>
            </>
        )
    }

    componentDidMount() {
        this.props.getCityList();
    }

}

function mapStateToProps(state) {
    console.log(state)
    return{
        cityList:state.changeCityList.cityList
    }
}
function mapDidTOProps(dispatch) {
     return bindActionCreators(changeSelec,dispatch )
}
export default connect(mapStateToProps,mapDidTOProps)(SelectCity)

