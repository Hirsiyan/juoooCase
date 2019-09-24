import React from "react"
import '../assets/css/CustomerService.css';
import '../assets/css/Ticket.css'
class CustomerService extends React.Component{
    render(){
        return(
            <div>
                <div className="leaving-message">
                   <p>给我们留言<span>关闭</span></p>
                </div>
                <div className="message-main">
                    <p>您好，很抱歉我们暂时无法为您提供服务，如有需帮助，请留言，我们将尽快联系并解决您的问题</p>
                    <p>姓名<span>*</span></p>
                    <input type="text" placeholder="请输入"/>
                    <p>手机<span>*</span></p>
                    <input type="text" placeholder="请输入"/>
                    <p>留言内容<span>*</span></p>
                    <input  type="text" placeholder="请输入" className="message"/>
                    <input type="button" value="提交" className="message-main-btn"/>
                </div>

            </div>
        )
    }
}
export default CustomerService;