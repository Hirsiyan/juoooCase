import React from "react";
import classNames from "classnames"
import { Drawer, Button, Radio } from 'antd';
import "antd/dist/antd.css";
import "../../assets/css/AddressDrawer.css"
import "../../assets/fonts/iconfont.css"




const RadioGroup = Radio.Group;

class AddressDrawer extends React.Component{
     constructor(props){
         super(props);
         this.state = {
             index: 0,
         };
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
        let styleObj ={
            background: '#fff1e9',
             color: '#ff6743'
        }
        const addressC = this.props.children._self.props.addressList
        console.log(addressC);
        return (

            <div>

                <Button type="text" className="address-btn" onClick={this.showDrawer}>
                    全国
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
                            {
                                addressC.map((v,idx )=> (
                                    // axtive:address-main-list

                                    <li  className={'address-main-list  classNames({ active: idx === this.state.index })'} onClick={()=>{
                                        this.handleClick.bind(this, idx)
                                    }} ref={v.id} key={v.id}>{v.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="address-main-btn">
                        <span onClick={this.onClose} >重置</span>
                        <span className="address-main-btn-color" onClick={this.onClose} >确定</span>
                    </div>

                </Drawer>
            </div>
        );
    }
     // ChangeColor(){
     //    //添加class
     //         let styleName = document.querySelectorAll(".address-main-list");
     //         // styleName.className="active";
     //         console.log(styleName);
     //         this.setState({
     //             active: !this.state.active
     //         })
     // }
    handleClick (index) {
        // toggle效果你可以先判定是否等同，然后设置为-1
        this.setState({index});
    }


}
export default AddressDrawer




