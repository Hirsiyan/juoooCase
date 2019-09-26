import React from "react";
import { Drawer, Button, Radio } from 'antd';
import "antd/dist/antd.css";
const RadioGroup = Radio.Group;
class Reminder extends React.Component{

    state = { visible: false, placement: 'bottom' };

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

                <Button type="text"  onClick={this.showDrawer}>
                    >

                </Button>
                <Drawer
                    title=""
                    placement={this.state.placement}
                    closable={true}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    height={"12.24rem"}


                >
                    <h2>温馨提示</h2>
                    <h2>订票说明</h2>
                    <p>网上订购请提前选择您意欲购买的演出和票品价位，根据流程提示完成订票</p>
                    <h2>确认订单</h2>
                    <p>下单成功后，您可以通过微信公号【聚橙票务】-【个人中心】-【我的订单】查看订单详情。如有任何疑问，请致电客服热线：400-185-8666咨询</p>
                    <h2>购票提醒</h2>
                    <p>因票品的特殊性，一经订购，不退不换，请订票前务必确认购买意向。</p>
                </Drawer>
            </div>
        );
    }

}
export default Reminder




