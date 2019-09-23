import React from "react";
import "../assets/css/Show.css"
import "../assets/fonts/iconfont.css"
import Swiper from "swiper/dist/js/swiper.js";
import AddressDrawer from "../component/AddressDrawer"
import changeAddress from "../store/actionCreators/addressdrawer";
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
class Show extends React.Component{
    render(){
        // console.log(this.props);
        return (
            <div>
                <div className="show-header">
                    <i className="iconfont icon-fanhui1-copy"></i>
                    <span>演出</span>
                    <i className="iconfont icon-sandian"></i>
                </div>
                <div className="show-nav">
                    <div className="show-list">

                    </div>

                    <div className="show-address">
                        <AddressDrawer>
                            <i className="iconfont icon-shouhuodizhi"></i>
                        </AddressDrawer>
                    </div>

                </div>

            </div>
        )
    }
    componentDidMount() {
        this.props.getAddressList();
        // console.log(this.props)
    }

}
function mapStateToProps(state) {
    // console.log(state)
    return{
        addressList:state.changeAddressList.addressList
    }
}
function mapDidTOProps(dispatch) {
    return bindActionCreators(changeAddress,dispatch )
}
export default connect(mapStateToProps,mapDidTOProps)(Show)