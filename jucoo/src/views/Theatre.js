import React from "react"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import theatreActionCreators from "../store/actionCreators/theatre"
import Swiper from "swiper/dist/js/swiper.js";
class Theatre extends React.Component{
    render(){
        const theatreList = this.props.theatreList;
        return(
            <div>
                <div className={"header-theatre-1"}></div>
                <div className={"header-theatre"}>
                    <p className={"header-p"}>剧院</p>
                </div>
                <div className={"theatre"}>
                    {
                        theatreList.map((v,i)=>(
                            <div key={i} className={"theatre-list"}>
                                <div className={"theatre-list-son"}>
                                    <div className={"theatre-list-son-1"}>
                                        <div className={"theatre-list-son-1a"}>
                                            <img className={"theatre-list-son-1a-img"} src={v.pic} alt=""/>
                                        </div>
                                        <div className={"theatre-list-son-1b"}>
                                            <p className={"theatre-list-son-1b-p1"}>{v.name}</p>
                                            <p>{v.count}场在售演出</p>
                                        </div>
                                        <div className={"theatre-list-son-1c"}>
                                            <span className={"iconfont icon-sangedian"}></span>
                                        </div>
                                    </div>
                                    <div className="swiper-container">
                                        <div className="swiper-wrapper">
                                            {
                                                v.showList.map((p,i)=>(
                                                    <div className="swiper-slide swiper-slide-div1" key={i}>
                                                        <div className={"swiper-slide-div1-div1"}>
                                                            <p>{p.show_time}</p>
                                                            <span className={"swiper-slide-div1-span"}></span>
                                                        </div>
                                                        <div className="swiper-slide-div1-div2">
                                                            <div className="swiper-slide-div1-div2a">
                                                                <img className="swiper-slide-div1-div2a-img" src={p.pic} alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
    componentDidMount(){
        if(this.props.theatreList.length>0){
            const mySwiper = new Swiper('.swiper-container', {
                observer:true,
                observeParents:true,
                slidesPerView : 3,
                paginationClickable: true,
            });
        }
        this.props.getTheatreList();
    }
}
function mapStateToProps(state){
    return{
        theatreList:state.theatre.theatreList
    }
}
export default connect(mapStateToProps,dispatch=>bindActionCreators(theatreActionCreators,dispatch))(Theatre);