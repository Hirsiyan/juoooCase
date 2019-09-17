import swiperAction from "../../actionType/swiper"
import axios from "axios"
export function changeSwiperList(payload){
    return{
        type:swiperAction.CHANGE_SWIPER_LIST,
        payload
    }
}
export default {
    getSwiperList(){
        return async (dispatch)=>{
            const data = await axios.get("/juooo/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.0.5&referer=2");
            // console.log(data.data.data.slide_list)
            dispatch(changeSwiperList(data.data.data.slide_list));
        }
    }
}