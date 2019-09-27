import React from "react"
import {withRouter} from "react-router-dom"
class Vip extends React.Component{
    render(){
        return(
            <div className={"vip-server"}>
                <div className={"vip-server-son"}>
                    <div className={"vip-server-son-1"}>
                        <div className={"vip-server-son-1a"} onClick={()=>{
                            this.props.history.push("/plus")
                        }}>
                            <div className={"vip-server-son-1a-1"}>
                                <p className={"vip-server-son-1a-1-p"}>橙PLUS卡</p>
                                <p>送<span style={{color:"#ff6743"}}>100元</span>,享V+权益</p>
                            </div>
                            <div className={"vip-server-son-1a-2"}>
                                <img style={{width:"50%",height:"50%"}} src="https://image.juooo.com/group1/M00/02/D0/rAoKmV0jZBGAD_e4AAAE27hwBgs927.png" alt=""/>
                            </div>
                        </div>
                        <div className={"vip-server-son-1a"}  onClick={()=>{
                            this.props.history.push("/plus")
                        }}>
                            <div className={"vip-server-son-1a-1"}>
                                <p className={"vip-server-son-1a-1-p"}>VIP+专区</p>
                                <p>尊享<span style={{color:"#ff6743"}}>10</span>大权益</p>
                            </div>
                            <div className={"vip-server-son-1a-2"}>
                                <img style={{width:"50%",height:"50%"}} src="https://image.juooo.com/group1/M00/03/79/rAoKNV0jY8iAQBUmAAAHfP7uF9k662.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={"vip-server-son-2"}>
                        <div className={"vip-server-son-2a"}  onClick={()=>{
                            this.props.history.push("/plus")
                        }}>
                            <p className={"vip-server-son-1a-1-p"}>积分商城</p>
                            <p>用积分，<span style={{color:"#ff6743"}}>0元</span>购票</p>
                            <p style={{display:"flex",justifyContent:"center"}}>
                                <img style={{width:"40px",height:"40px"}} src="https://image.juooo.com/group1/M00/02/63/rAoKmVyul4KAN4xIAAAGqNi5vq4366.png" alt=""/>
                            </p>
                        </div>
                        <div className={"vip-server-son-2a"} onClick={()=>{
                            this.props.history.push("/date")
                        }}>
                            <p className={"vip-server-son-1a-1-p"} id={"vip-server-son-1a-1-p"}>日历</p>
                            <p>演出信息，<span style={{color:"#ff6743"}}>一目了然</span></p>
                            <p style={{display:"flex",justifyContent:"center"}}>
                                <img style={{width:"40px",height:"30px"}} src="https://image.juooo.com/group1/M00/02/63/rAoKmVyul4KAN4xIAAAGqNi5vq4366.png" alt=""/>
                            </p>
                        </div>
                        <div className={"vip-server-son-2a"}  onClick={()=>{
                            this.props.history.push("/plus")
                        }}>
                            <p className={"vip-server-son-1a-1-p"}>欢聚橙卡</p>
                            <p><span style={{color:"#ff6743"}}>33元</span>看演出</p>
                            <p style={{display:"flex",justifyContent:"center"}}>
                                <img style={{width:"40px",height:"40px"}} src="https://image.juooo.com/group1/M00/03/0D/rAoKNVyumKiAfP1qAAACYTizNOw440.png" alt=""/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Vip);