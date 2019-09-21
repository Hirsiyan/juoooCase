import React from "react"
import {withRouter} from "react-router-dom"
class Eticket extends React.Component{
    render(){
        return(
            <div>
                <div className={"header"}>
                    <span className={"iconfont icon-fanhui"} onClick={()=>{
                        this.props.history.push({
                            pathname:"/MyJucco"
                        })
                    }}></span>
                    <span>票夹</span>
                    <span className={"iconfont icon-sangedian"}></span>
                </div>
                <div className={"eticketList"}>
                    <div className={"noList"}>
                        <p className={"noList-p"}><span className={"iconfont icon-dianzipiaoguanli noList-p-span"}></span></p>
                        <p>暂无电子票</p>
                    </div>
                </div>
            </div>
        )
    }
    componentWillMount(){
        console.log(this.props);
        // 如果不存在token，跳转到login页面
        if(!localStorage.token){
            this.props.history.push({
                pathname:"/login",
                state:{
                    goUrl:this.props.location.pathname
                }
            })
        }
    }

}
export default withRouter(Eticket);