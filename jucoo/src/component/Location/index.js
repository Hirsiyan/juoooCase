import React from "react";
import { Drawer, Button, Radio } from 'antd';
import "antd/dist/antd.css";
import "../../assets/css/Location.css"
import axios from"axios"
const RadioGroup = Radio.Group;
class Location extends React.Component{

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
        return (
            <div>

                <Button type="text" className="address-btn" onClick={this.showDrawer}>
                    .|筛选

                </Button>
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
                <div className={"discount-box"}></div>
                    <div className={"city-box"}></div>
                </Drawer>
            </div>
        );
    }
    async getLocation(){
        const info = await axios.get("/juooo/vip/index/getDiscountList?page=1&city_id=0&cate_id=0&discount_id=0&version=6.0.5&referer=2");
        console.log(info.data)
    }
}
export default Location;




