import React from "react"
import "../assets/css/Login.css"
class Login extends React.Component{
    render(){
        return(
            <div>
                <div className={"navbar"}>
                    <span className={"iconfont icon-fanhui"} onClick={()=>{
                        const goUrl = this.props.history.location.state.goUrl;
                        this.props.history.push({
                            pathname:goUrl?goUrl:"/"
                        })
                    }}></span>
                </div>
                <div className={"father"}>
                    <div className={"blank"}></div>
                    <div className={"father-div1"}>
                        欢迎来到聚橙网
                    </div>
                    <div className={"father-div2"}>
                        <div className={"login-list"}>
                            <form>
                                <ul>
                                    <li><input className={"login-list-li1"} type="text" placeholder={"请输入手机号/邮箱"}/></li>
                                    <li><input className={"login-list-li1"} type="text" placeholder={"请输入密码"}/></li>
                                </ul>
                            </form>
                        </div>
                        <div className={"login"}>
                            <input type="button" className={"login-input"} value={"登录"}/>
                        </div>
                        <div className={"login-foot"}>
                            <span>忘记密码</span>
                            <span>验证码登录/注册</span>
                        </div>
                    </div>
                </div>
                <div className={"foot"}>
                    <div className={"foot-div1"}>
                        <span className={"foot-div1-span1"}>—————</span>其他登录方式<span className={"foot-div1-span2"}>—————</span>
                    </div>
                    <div className={"foot-div2"}>
                        <span className={"iconfont icon-qq foot-div2-span1"}></span>
                        <span className={"iconfont icon-weibo foot-div2-span2"}></span>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
    }
}
export default Login;
