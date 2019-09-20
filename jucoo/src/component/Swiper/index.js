import React from "react"
import "../../assets/css/Swiper.css"
import Swiper from "swiper/dist/js/swiper.js";
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import swiperListActions from "../../store/actionCreators/swiper"
import {Link} from "react-router-dom"
class SwpCom extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        console.log(this.props);
        const swiperList = this.props.swiperList;
        return(
            <div>
                <div className={"swiper-list"}>
                    <div className={"swiper-list-postion"}>
                        <div className={"swiper-list-postion-son"}>
                            <div className={"swiper-list-postion-son-a"}>
                                <Link to={"/SelectCity"}>
                                    全国
                                </Link>
                                <span className={"iconfont icon-location"}></span>
                            </div>
                            <div className={"swiper-list-postion-son-b"}>
                                <span className={"iconfont icon-xingtaiduICON_sousuo--"}></span>搜索热门演出
                            </div>
                            <div className={"swiper-list-postion-son-c"}>
                                <img src="https://image.juooo.com/group1/M00/02/65/rAoKmVyvD7iAHJX4AAADmpmoUeI150.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-container" id={"swiper1"}>
                        <div className="swiper-wrapper">
                            {
                                swiperList.map((v,i)=>(
                                    <div key={i} className={"swiper-slide"}>
                                        <Link to={"/login"}><img src={v.image_url} alt="" className={"swiper-container-img"}/></Link>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        const mySwiper1 = new Swiper('#swiper1',{
            observer: true,
            pagination: {
                el: '.swiper-pagination',
            },
            autoplay: {
                disableOnInteraction: false,
            },
        });
        this.props.getSwiperList();
    }
}
function mapStateToProps(state){
    // console.log(state);
    return{
        swiperList:state.swiperList.swiperList
    }
}
export default connect(mapStateToProps,dispatch=>bindActionCreators(swiperListActions,dispatch))(SwpCom);
