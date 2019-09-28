import React from "react";
import "../assets/css/Show.css"
import "../assets/fonts/iconfont.css"
// import Swiper from "swiper/dist/js/swiper.js";
import AddressDrawer from "../component/AddressDrawer"
import changeAddress from "../store/actionCreators/addressdrawer";
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'
import axios from 'axios'
class Show extends React.Component{
    constructor(){
        super();
        this.state = {
            showAddress:[],
            showSearch:[]
        }
    }
    render(){
        // console.log(this.props);
        return (
            <div>
                <div className="show-header">
                    <i className="iconfont icon-fanhui1-copy"></i>
                    <span>演出</span>
                    <i className="iconfont icon-sandian"></i>
                </div>
                <hr/>
                <div className="show-nav">
                    <div className="show-list">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {
                                    this.state.showAddress.map((v,i)=>(
                                        <div className="swiper-slide" key={i}>{v.name}</div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>

                    <div className="show-address">
                        <AddressDrawer>
                            <i className="iconfont icon-shouhuodizhi"></i>
                        </AddressDrawer>
                    </div>

                </div>
                <div className="show-main-list-info">
                    { this.state.showSearch.map((v,i)=>(
                    <div key={i} className={"show-main-Search"}>
                        <img className={"show-main-Search-pic"} src={v.pic}/>
                        <div className={"show-main-Search-item__info"}>
                            <div className={"show-main-Search-item__info__date-week"}>{v.show_time_top}</div>
                            <div className={"show-main-Search-item_info_name"}>{v.name}</div>
                            <div className={"show-main-Search-item_info_place"}>{v.city_name} | {v.venue_name}</div>
                            <div className={"show-main-Search-exclusive-card__extra-wrapper"}>￥ {v.min_price}</div>
                        </div>
                        <div className={"show-main-Search-discount__item__bottom"}>{v.end_time} {v.min_discount}</div>
                    </div>
                ))}

                </div>

            </div>
        )
    }

    componentDidMount() {
        this.props.getAddressList();

        // console.log(this.props)
        var mySwiper = new Swiper('.swiper-container', {
            // autoplay: true,//可选选项，自动滑动
            observer:true,
            observeParents:true,
            slidesPerView : 3,
            paginationClickable: true,
            cancelable:false
        })
        this.getShowCategory();
        this.getShowSearch();
    }
    async getShowCategory(){
        const info = await axios.get("/juooo/Show/Index/getShowCategoryList?version=6.0.5&referer=2")
        console.log(info)
        this.setState({
            showAddress:info.data.data
        })
        console.log(this.state.showAddress)
    }
    async getShowSearch(){
        const info = await axios.get("/juooo/Show/Search/getShowList?category=37&city_id=10017&page=1&keywords=&version=6.0.6&referer=2")
        console.log(info)
        this.setState({
            showSearch:info.data.data.list
        })
        console.log(this.state.showSearch)
    }



}
function mapStateToProps(state) {
    console.log(state)
    return{
        addressList:state.changeAddressList.addressList
    }
}
function mapDidToProps(dispatch) {
    return bindActionCreators(changeAddress,dispatch )
}
export default connect(mapStateToProps,mapDidToProps)(Show)