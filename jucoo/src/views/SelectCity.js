import React from "react"
import "../assets/css/selectCity.css"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import changeSelec from "../store/actionCreators/selectCity"
import {Link} from "react-router-dom"
class SelectCity extends React.Component {
    state={
        city:"全国"
    }
    render() {
        let arr = [];
        for(let i in this.props.sortedList){
            arr.push(this.props.sortedList[i])
        };
        console.log(arr);
        return (
            <>
                <div className="head-nav">
                    <Link to={"/"}><span className={"head_icon"}></span></Link>
                    <h3 className={"title text-single"}>
                        城市选择
                    </h3>
                </div>
                <div className={"city"}>
                    <section className={""}>

                        <div className={"city-block"}>
                            <div className={"city-block__wrapper"}>
                                <div className={"city-block__con"}>
                                    <span className={"city-block__con__tip"}>当前城市</span>
                                    <ul className={"city-block__con__wrap"}>
                                        <li className={"city-block__con__item"}>
                                            {localStorage.China?JSON.parse(localStorage.China):JSON.parse(localStorage.name).name}
                                            </li>
                                    </ul>
                                </div>
                                <div className={"city-block__con"}>
                                    <span className={"city-block__con__tip"}>定位城市</span>
                                    <ul className={"city-block__con__wrap"}>
                                        <li className={"city-block__con__item"}>{this.state.city}</li>
                                    </ul>
                                </div>
                                <div className={"city-block__con"}>
                                    <span className={"city-block__con__tip"}>热门城市</span>

                                    <ul className={"city-block__con__wrap"}>
                                        <li className={"city-block__con__item hots--item"} onClick={()=>{
                                            localStorage.China = JSON.stringify("全国");
                                            localStorage.removeItem("name");
                                            this.props.history.push("/");
                                        }}>全国</li>
                                        {
                                            this.props.cityList.map(v => (
                                                <li className={"city-block__con__item hots--item"} key={v.id} onClick={()=>{
                                                    localStorage.name=JSON.stringify(v);
                                                    localStorage.removeItem("China");
                                                    this.props.history.push("/");
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
                                                    <span className={"city-block__row__con__letter"} ref={el=>this[v.id]=el}>{v.id}</span>
                                                    {
                                                        v.list.map((m,i)=>(
                                                            <ul key={i} className={"city-block__row__con__wrap"}>
                                                                <li className={"city-block__row__con__column"} onClick={()=>{
                                                                    localStorage.name=JSON.stringify(m);
                                                                    localStorage.removeItem("China");
                                                                    this.props.history.push("/");

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
                    </section>
                    <section className="city-nav">
                        <span className={"city-nav__lab"}>当前</span>
                        <span className={"city-nav__lab"}>定位</span>
                        <span className={"city-nav__lab"}>热门</span>
                        {
                            arr.map((v,i)=>(
                                <span className={"city-nav__lab"} onClick={()=>this[v.id].scrollIntoView(true)} key={i}>{v.id}</span>
                            ))
                        }

                    </section>
                </div>

            </>
        )
    }
    componentDidMount() {
        this.props.getCityList();
        this.props.getSortedList();
        //定位
        fetch("http://restapi.amap.com/v3/ip?key=\tccada76d919e5f09a40f58e5177d6f2c").then((res) => {
            if (res.ok) {

                res.text().then((data) => {
                    const detail = JSON.parse(data)
                    console.log(detail)
                    this.setState({
                        city:detail.city.substring(0, detail.city.length - 1)
                    })
                })
            }
        }).catch((res) => {
            console.log(res.status);
        });

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

