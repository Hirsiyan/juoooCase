import React from "react";
import SwpCom from "../component/Swiper"
import Super from "../component/Super"
import Vip from "../component/Vip"
import Hot from "../component/Hot"
import Repeat from "../component/Repeat"
import TypeList from "../component/TypeList"
import Recommend from "../component/Recommend"
import Type from "../component/Type"
import BlackSuper from "../component/BlackSuper"
import "swiper/dist/css/swiper.min.css";
class Home extends React.Component{
    render(){
        return(
            <div style={{background:"white"}}>
                <SwpCom></SwpCom>
                <Type></Type>
                <Super></Super>
                <Vip></Vip>
                <Hot></Hot>
                <Repeat></Repeat>
                <BlackSuper></BlackSuper>
                <TypeList></TypeList>
                <Recommend></Recommend>
                <div style={{width:"100px",height:"100px"}}></div>
            </div>
        )
    }
    componentDidMount() {

    }
}


export default Home;