import React from "react";
import { Drawer, Button, Radio } from 'antd';
import "antd/dist/antd.css";
import "../../assets/css/AddressDrawer.css"
import "../../assets/fonts/iconfont.css"



const RadioGroup = Radio.Group;

class AddressDrawer extends React.Component{
     constructor(props){
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
        const addressC = this.props.children._self.props.addressList
        console.log(addressC);
        return (

            <div>

                <Button type="text" className="address-btn" onClick={this.showDrawer}>
                    地址
                    <i className="iconfont icon-shouhuodizhi"></i>
                </Button>
                <Drawer
                    title=""
                    placement={this.state.placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    width={"8rem"}
                    height={"42px"}
                    style={{height:"95%",margin:"42px 0 0 0"}}


                >
                    <div className="address-title">
                        <h2>城市</h2>
                    </div>
                    <div className="address-main">
                        <ul>
                            {/*{*/}
                            {/*    this.props.cityList.map(v => (*/}
                            {/*        <li className={"city-block__con__item hots--item"} key={v.id}>{v.name}</li>*/}
                            {/*    ))*/}
                            {/*}*/}
                        </ul>
                    </div>

                </Drawer>
            </div>
        );
    }
    componentDidMount() {

    }

}
export default AddressDrawer




