import React from "react"
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'
class App1 extends React.Component{
    render(){
        return (
            <div>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide" data-history="slide1">Slide 1</div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        var mySwiper = new Swiper('.swiper-container', {
            autoplay:true,//可选选项，自动滑动
        })
    }
}
export default App1;