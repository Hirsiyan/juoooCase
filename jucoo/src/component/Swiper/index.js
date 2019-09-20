import React from "react"
import Swiper from "swiper/dist/js/swiper.js";
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import swiperListActions from "../../store/actionCreators/swiper"
import {Link,withRouter} from "react-router-dom"
class SwpCom extends React.Component{
    render(){
        const swiperList = this.props.swiperList;
        return(
            <div>
                <div className={"swiper-list"}>
                    <div className={"swiper-list-postion"} id={"swiper-list-postion"}>
                        <div className={"swiper-list-postion-son"}>
                            <div className={"swiper-list-postion-son-a"} id={"font-col"} onClick={()=>{
                                this.props.history.push("/SelectCity")
                            }}>
                                <span className={"iconfont icon-location"} id={"iconfont"}></span>
                                <span >{localStorage.name?JSON.parse(localStorage.name).name:localStorage.China}</span>
                            </div>
                            <div className={"swiper-list-postion-son-b"} id={"search"}>
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
        window.onload=function () {
            let iconfont  = document.getElementById("iconfont"),
                search = document.getElementById("search"),
                fontCol = document.getElementById("font-col"),
                big_nav = document.getElementById("swiper-list-postion"),//获取到导航栏id
                H = 0,
                Y = big_nav;
            while (Y) {
                H += Y.offsetTop;
                Y = Y.offsetParent;
            }

            window.onscroll = function () {
                let topScroll = document.body.scrollTop || document.documentElement.scrollTop;//滚动的距离,距离顶部的距离
                if (topScroll > H) {  //当滚动距离大于H时执行下面的东西
                    iconfont.style.color = "orange";
                    fontCol.style.cssText = "color:black;background:white";
                    search.style.cssText = "background:#D3D3D3;color:gray";
                    big_nav.style.cssText = "position:fixed;top:0;z-index:9999;background-color:white";
                } else {//当滚动距离小于H的时候执行下面的内容，也就是让导航栏恢复原状
                    big_nav.style = '';
                    iconfont.style = "";
                    fontCol.style = "";
                    search.style = "";
                }
            }
        }
    }
}
function mapStateToProps(state){
    return{
        swiperList:state.swiperList.swiperList
    }
}
export default withRouter(connect(mapStateToProps,dispatch=>bindActionCreators(swiperListActions,dispatch))(SwpCom));
