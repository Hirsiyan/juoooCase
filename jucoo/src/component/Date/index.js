import React from "react"
import Swiper from "swiper/dist/js/swiper.js";
import axios from "axios"
import "../../assets/css/Date.css"
import AddressDrawer from "../AddressDrawer";
class Date extends React.Component{
    constructor(){
        super();
        this.state={
            CategoryList:[]
        }
    }
    render(){
        console.log(this.state)
        return(
            <div className={"views"}>
                <div className="navTop">
                    <div className="navTop-inner">
                        <div className="left">
                            <a href="javascript:;">
                                     <span className="icon iconfont"onClick={()=>{this.props.history.go(-1)}}>
                                          &#xe603;
                                     </span>
                            </a>
                        </div>
                        <div className="center">
                            <span>演出日历</span>
                        </div>
                        <div className="right">
                            <a href="javascript:;">
                                     <span className={"dian icon iconfont"}>
                                         &#xe600;
                                     </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"swiper-container "} id={"spir"}>
                           <div className={"swiper-wrapper"}id={"spird"}>
                                    <div className="i-item">全部</div>
                                    {
                                        this.state.CategoryList.map((v,i)=>(
                                            <div className="swiper-slide i-item" data-history="slide1" key={i}>{v.name}</div>
                                        ))
                                    }
                           </div>
                    </div>
                    <div className="show-address">
                        <span>
                             <i className="iconfont icon-shouhuodizhi"></i>
                        </span>

                    </div>
                </div>



            </div>

        )
    }
    async getShowCategoryList(){
        const {data} = await axios.get("/juooo/Show/Index/getShowCategoryList?version=6.0.6&referer=2");
        console.log(data.data);
        this.setState({
            CategoryList:data.data
        })
    }
    componentDidMount() {
        setTimeout(()=>{
            const mySwiper8 = new Swiper('.swiper-container',{
                observer:true,
                paginationClickable:true,
                slidesPerView : 'auto',
            });
        },500)

        this.getShowCategoryList();
    }
}
export default Date;