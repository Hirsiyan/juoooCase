import React from "react"
import "../assets/css/Login.css"
import axios from "axios"
class Login extends React.Component{
    render(){
        return(
            <div style={{backgroundColor:"white",backgroundImage:'url("https://m.juooo.com/public/basic/Home/app/app-juooo5/images/login/login_bg.png")',backgroundSize:'cover'}}>
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
                                <ul style={{display:"block"}} id={"passLogin"}>
                                    <li><input id={"phone"} className={"login-list-li1"} type="text" placeholder={"请输入手机号/邮箱"}/></li>
                                    <li><input id={"password"} className={"login-list-li1"} type="password" placeholder={"请输入密码"}/></li>
                                </ul>
                                <ul style={{display:"none"}} id={"codeLogin"}>
                                    <li><input id={"phone2"} className={"login-list-li1"} type="text" placeholder={"请输入手机号/邮箱"}/></li>
                                    <li><input id={"code"} className={"login-list-li1"} type="password" placeholder={"请输入验证码"}/></li>
                                </ul>
                            </form>
                        </div>
                        <div className={"login"}>
                            <input type="button" className={"login-input"} id={"btn"} value={"登录"}/>
                        </div>
                        <div className={"login-foot"}>
                            <span>忘记密码</span>
                            <span ref={"loginChoice"} id={"loginChoice"}>验证码登录/注册</span>
                        </div>
                    </div>
                </div>
                <div className={"foot"}>
                    <div className={"foot-div1"}>
                        <span className={"foot-div1-span1"}>—————</span>其他登录方式<span className={"foot-div1-span2"}>—————</span>
                    </div>
                    <div className={"foot-div2"}>
                        <a href="https://m.juooo.com/Passport/oauthRegLogin?type=qq"><span className={"iconfont icon-qq foot-div2-span1"}></span></a>
                        <a href="https://m.juooo.com/Passport/oauthRegLogin?type=sina"><span className={"iconfont icon-weibo foot-div2-span2"}></span></a>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        const _this = this;
        const phone = document.getElementById("phone");
        const passLogin = document.getElementById("passLogin");
        const codeLogin = document.getElementById("codeLogin");
        const password = document.getElementById("password");
        const btn = document.getElementById("btn");
        const loginChoice = document.getElementById("loginChoice");
        loginChoice.onclick = function(){
            if(loginChoice.innerHTML === "验证码登录/注册"){
                passLogin.style.display = "none";
                codeLogin.style.display = "block";
                loginChoice.innerHTML = "密码登陆";
                btn.value = "获取验证码";
            }
        };
        phone.oninput = function(){
            btn.style.background = "#ff4500";
        };
        btn.onclick = async function(){
            if(phone.value.length>0 && password.value.length>0){
                const {data} = await axios.post("/m/login",{
                    phoneId:phone.value,
                    code:password.value
                });
                console.log(data);
                localStorage.token = data.token;
                _this.props.history.push("/Eticket");
            }else{
                alert("请输入用户名或者密码")
            }
        }
    }
}
export default Login;
