import React from "react";
import { Drawer, Button, Radio } from 'antd';
import "antd/dist/antd.css";
import "../../assets/css/Location.css"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import axios from "axios"
import locationActions from "../../store/actionCreators/Location"
const RadioGroup = Radio.Group;
class Location extends React.Component{
    constructor(props) {
        super(props);
    }

    state = { visible: false, placement: 'right' };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onChange = e => {
        this.setState({
            placement: e.target.value,
        });
    };

    render() {
        const discountL = this.props.locationList;
        const cityL = this.props.cityList;
        console.log(cityL);
        return (
            <div>
                <div type="text" className="address-btn" onClick={this.showDrawer}>
                    筛选
                </div>
                <Drawer
                    title=""
                    placement={this.state.placement}
                    closable={true}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    width={"8rem"}
                    height={"42px"}
                    style={{height:"95%",margin:"42px 0 0 0"}}
                >
                    <div className={"Discount_box_1"}>
                        <div className={"ZK"}>折扣</div>
                    {/*{discountL.map((v,i)=>(*/}
                    {/*        <div className={"discount-box"}>{v.name}</div>*/}
                    {/*))}*/}
                    </div>
                    <div className={"city-box_1"}>
                        <div className={"city-box"}>
                            <div className={"CS"}>城市</div>
                        </div>
                    </div>
                </Drawer>
            </div>
        );
    }

    componentDidMount(){
         this.props.getLocation();
         console.log(this.props);
    }
}
function mapStateToProps(state){
    // console.log(state)
    return{
        locationList:state.changeDiscountList.discountList

    }
}
export default connect(mapStateToProps,dispatch=>bindActionCreators(locationActions,dispatch))(Location);




