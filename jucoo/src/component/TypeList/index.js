import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import typeList from "../../store/actionCreators/typeList"
import {withRouter} from "react-router-dom"
class TypeList extends React.Component{
    render(){
        const typeList = this.props.typeList;
        return(
            <div>
                    {
                        typeList.map((v,i)=>(
                            <div key={i} className={"typeList1"}>
                                <div className={"typeList1-div1"}>
                                    <p className={"typeList1-div1-p1"}>{v.title}</p>
                                    <p className={"typeList1-div1-p2"}> > </p>
                                </div>
                                <div className={"typeList1-div2"}  style={{background: 'rgb(163, 154, 113)'}}>
                                    <div className={"typeList1-div2-1"}>
                                        <img className={"typeList1-div2-1-img"} src={v.list[0].pic} alt=""/>
                                    </div>
                                    <div className={"typeList1-div2-2"}>
                                        <p className={"typeList1-div2-2-p1"}>{v.list[0].date} {v.list[0].week}</p>
                                        <p className={"typeList1-div2-2-p2"}>{v.list[0].schedular_name}</p>
                                        <p className={"typeList1-div2-2-p3"}>{v.list[0].city_name}|{v.list[0].venue_name}</p>
                                    </div>
                                </div>
                                <div className="swiper-container" id={"swiper"+v.cat_id}>
                                    <div className="swiper-wrapper typeList1-div3">
                                        {
                                            v.list.slice(1).map((v,i)=>(
                                                <div className="swiper-slide swiper-slide-div1" key={i}  onClick={()=>{
                                                    this.props.history.push("/ticket/"+v.url.slice(27))
                                                }}>
                                                    <div className="swiper-slide-div1-div2">
                                                        <div className="swiper-slide-div1-div2a">
                                                            <img className="swiper-slide-div1-div2a-img" src={v.pic} alt=""/>
                                                            <p className={"typeList1-div3-p1"}>{v.schedular_name}</p>
                                                            <p><span className={"typeList1-div3-span"}>{"￥"+v.high_price}</span>起</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
            </div>
        )
    }
    componentDidMount(){
        this.props.getTypeList();
    }
}
function mapStateToProps(state){
    return{
        typeList:state.typeList.typeList
    }
}
export default withRouter(connect(mapStateToProps,dispatch=>bindActionCreators(typeList,dispatch))(TypeList));
