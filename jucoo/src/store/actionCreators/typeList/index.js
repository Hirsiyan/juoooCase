import typeList from "../../actionType/typeList"
import axios from "axios"
import Swiper from "swiper/dist/js/swiper.js";
export function changeTypeList(payload){
    return{
        type:typeList.CHANGE_TYPE_LIST,
        payload
    }
}
export default {
    getTypeList(){
        return async (dispatch)=>{
            const data = await axios.get("/juooo/home/index/getFloorShow?city_id=0&version=6.0.5&referer=2");
            // console.log(data.data.data);
            dispatch(changeTypeList(data.data.data));
            if(this.typeList.length>0){
                const mySwiper = new Swiper('swiper-container',{
                    observer:true,
                    observeParents:true,
                    slidesPerView : 3,
                    paginationClickable: true,
                });
            }
        }
    }
}