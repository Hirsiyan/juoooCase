import React from "react"
import "../assets/css/selectCity.css"
import axios from 'axios'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import changeSelec from "../store/actionCreators/selectCity"
import {Link} from "react-router-dom"
// import { Map, Marker } from "react-amap"
class SelectCity extends React.Component {
    render() {
        let arr = [];
        for(let i in this.props.sortedList){
            arr.push(this.props.sortedList[i])
        };
        console.log(arr);
        return (
            <>
                <div className={"city"}>
                    <div className="head-nav">
                       <Link to={"/"}><span className={"head_icon"}></span></Link>
                        <h3 className={"title text-single"}>
                            城市选择
                        </h3>
                    </div>
                    <div className={"city-block"}>
                        <div className={"city-block__wrapper"}>
                            <div className={"city-block__con"}>
                                <span className={"city-block__con__tip"}>当前城市</span>
                                <ul className={"city-block__con__wrap"}>
                                    <li className={"city-block__con__item"}>{localStorage.China?JSON.parse(localStorage.China):JSON.parse(localStorage.name).name}</li>
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
                                    <li className={"city-block__con__item hots--item"} onClick={()=>{
                                        localStorage.China = JSON.stringify("全国")
                                    }}>全国</li>
                                    {
                                        this.props.cityList.map(v => (
                                            <li className={"city-block__con__item hots--item"} key={v.id} onClick={()=>{
                                                localStorage.name=JSON.stringify(v);
                                                localStorage.removeItem("China");
                                            }}>{v.name}</li>
                                        ))
                                    }

                                </ul>
                            </div>
                            <section className={"city-block__row"}>
                                {
                                    arr.map((v,i)=>{
                                        return(
                                            <div className={"city-block__row__con"} key={i}>
                                                <span className={"city-block__row__con__letter"}>{v.id}</span>
                                                {
                                                    v.list.map((m,i)=>(
                                                        <ul key={i} className={"city-block__row__con__wrap"}>
                                                            <li className={"city-block__row__con__column"} onClick={()=>{
                                                                localStorage.name=JSON.stringify(m);
                                                                localStorage.removeItem("China");
                                                            }}>
                                                                {m.name}
                                                            </li>
                                                        </ul>
                                                    ))
                                                }
                                            </div>
                                        )
                                    })
                                }

                            </section>
                        </div>

                    </div>
                </div>
            </>
        )
    }
    componentDidMount() {
        this.props.getCityList();
        this.props.getSortedList();

    }

}
function mapStateToProps(state) {
    console.log(state);
    return{
        cityList:state.changeCityList.cityList,
        sortedList:state.changeCityList.sortedList
    }
}
function mapDidTOProps(dispatch) {
     return bindActionCreators(changeSelec,dispatch )
}
export default connect(mapStateToProps,mapDidTOProps)(SelectCity)

