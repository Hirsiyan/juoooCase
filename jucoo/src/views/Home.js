import React from "react";
import "../assets/css/Home.css";
import SwpCom from "../component/Swiper"
import Super from "../component/Super"
import Vip from "../component/Vip"
import Hot from "../component/Hot"
import Repeat from "../component/Repeat"
import TypeList from "../component/TypeList"
import Recommend from "../component/Recommend"
import "swiper/dist/css/swiper.min.css";
class Home extends React.Component{
    render(){
        return(
            <div style={{background:"white"}}>
                <SwpCom></SwpCom>
                <div className={"typeList"}>
                    <dl className={"typeList-dl"}>
                        <dt className={"typeList-dl-dt"}>
                            <img className={"typeList-dl-img"} src="https://image.juooo.com/group1/M00/03/26/rAoKNVzId-KAX9CzAAAG-I4FmRM978.png" alt=""/>
                        </dt>
                        <dd>演唱会</dd>
                    </dl>
                    <dl className={"typeList-dl"}>
                        <dt className={"typeList-dl-dt"}>
                            <img className={"typeList-dl-img"} src="https://image.juooo.com/group1/M00/03/26/rAoKNVzIeBeAScMUAAAEhJWVzNA919.png" alt=""/>
                        </dt>
                        <dd>音乐剧</dd>
                    </dl>
                    <dl className={"typeList-dl"}>
                        <dt className={"typeList-dl-dt"}>
                            <img className={"typeList-dl-img"} src="https://image.juooo.com/group1/M00/03/26/rAoKNVzIeCKAMJQ7AAAGkw6V6Ms752.png" alt=""/>
                        </dt>
                        <dd>舞台剧</dd>
                    </dl>
                    <dl className={"typeList-dl"}>
                        <dt className={"typeList-dl-dt"}>
                            <img className={"typeList-dl-img"} src="https://image.juooo.com/group1/M00/02/7D/rAoKmVzIeCyAB0jKAAAFxM4aS44306.png" alt=""/>
                        </dt>
                        <dd>儿童剧</dd>
                    </dl>
                    <dl className={"typeList-dl"}>
                        <dt className={"typeList-dl-dt"}>
                            <img className={"typeList-dl-img"} src="https://image.juooo.com/group1/M00/03/26/rAoKNVzIeDSATtBuAAAFFfAO9uw344.png" alt=""/>
                        </dt>
                        <dd>音乐会</dd>
                    </dl>
                </div>
                <Super></Super>
                <Vip></Vip>
                <Hot></Hot>
                <Repeat></Repeat>
                <div className={"black-super"}>
                    <div className={"black-super-son"}>
                        <div className={"black-super-son-1"}>
                            <span style={{float:"left"}}>
                                <img className={"black-super-son-1-img"} src="https://image.juooo.com/group1/M00/03/79/rAoKNV0jY8iAQBUmAAAHfP7uF9k662.png" alt=""/>
                            </span>
                            <span style={{float:"left"}} className={"black-super-son-1-p1"}>
                                VIP+会员尊享权益
                            </span>
                            <span className={"black-super-son-1-p2"}>
                                99元/年 >
                            </span>
                        </div>
                        <div className={"black-super-son-2"}>
                            <div className={"black-super-son-2-1"}>
                                <div className={"black-super-son-2-1-1"}>
                                    <span className={"black-super-son-2-1-1-span1"}>专享折扣</span>
                                    <span className={'black-super-son-2-1-1-span2'}> > </span>
                                </div>
                                <div className={"black-super-son-2-1-2"}>
                                    <div className={"black-super-son-2-1-2-div"}>
                                        <p>
                                            <img className={"black-super-son-2-1-2-div-img"} src="https://image.juooo.com/group1/M00/03/A8/rAoKNV1fNlGAYQ4kAAB_-x8YGi8240.jpg" alt=""/>
                                        </p>
                                        <p>
                                            <span className={"black-super-son-2-1-2-div-p"}>8.5</span> 折
                                        </p>
                                    </div>
                                    <div className={"black-super-son-2-1-2-div"}>
                                        <p>
                                            <img className={"black-super-son-2-1-2-div-img"} src="https://image.juooo.com/group1/M00/03/3F/rAoKNVzc_luAAYj0AABKXDcBW98962.jpg" alt=""/>
                                        </p>
                                        <p>
                                            <span className={"black-super-son-2-1-2-div-p"}>9.8</span> 折
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={"black-super-son-2-2"}>
                                <div className={"black-super-son-2-2-1"}>
                                    <span className={"black-super-son-2-1-1-span1"}>优先购票</span>
                                    <span className={'black-super-son-2-1-1-span2'}> > </span>
                                </div>
                                <div className={"black-super-son-2-2-2"}>
                                    <p>
                                        <img className={"black-super-son-2-2-2-img"} src="https://image.juooo.com/group1/M00/03/BA/rAoKNV1_IcWAAKMCAACBad-K3Io772.jpg" alt=""/>
                                    </p>
                                    <p style={{color:"#ff6743"}}>
                                        09/20 11:00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <TypeList></TypeList>
                <Recommend></Recommend>
                <div style={{width:"100%",height:"100px"}}></div>
            </div>
        )
    }
}

export default Home;