import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import swiperActions from "../../store/actionCreators/swiper"
import {withRouter} from "react-router-dom"
class Repeat extends React.Component{
    render(){
        const repeatList = this.props.repeatList;
        return(
            <div className={"repeat"}>
                <div className={"repeat-son"}>
                    <div className={"repeat-son-1"}>
                        <p className={"hot-son-1-p1"}>巡回演出</p>
                        <p className={"hot-son-1-p2"}> > </p>
                    </div>
                    <div className={"repeat-son-2"}>
                        <div className="swiper-container repeat-son-2" id={"swiper4"}>
                            <div className="swiper-wrapper">
                                {
                                   repeatList.map((v,i)=>(
                                           <div className="swiper-slide swiper-slide-div1" key={i}>
                                               <div className="swiper-slide-div1-div2">
                                                   <div className="swiper-slide-div1-div2a">
                                                       <img className="swiper-slide-div1-div2a-img" src={v.pic} alt=""/>
                                                       <p className={"hot-son-2-p"}>{v.show_name}</p>
                                                   </div>
                                               </div>
                                           </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getRepeatList();
    }
}
function mapStateToProps(state){
    return{
        repeatList:state.swiperList.repeatList
    }
}
export default withRouter(connect(mapStateToProps,dispatch=>bindActionCreators(swiperActions,dispatch))(Repeat))