import swiperAction from "../../actionType/swiper"
import axios from "axios"
export function changeSwiperList(payload){
    return{
        type:swiperAction.CHANGE_SWIPER_LIST,
        payload
    }
}
export function changeSuperList(payload){
    return{
        type:swiperAction.CHANGE_SUPER_LIST,
        payload
    }
}
export function changeHotList(payload){
    return{
        type:swiperAction.CHANGE_HOT_LIST,
        payload
    }
}
export function changeRepeatList(payload){
    return {
        type:swiperAction.CHANGE_REPEAT_LIST,
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
    },
    getSuperList(){
        return async (dispatch)=>{
            const data = await axios.get("/juooo/vip/index/getVipHomeSchedular?version=6.0.5&referer=2");
            // console.log(data.data.data.priorList)
            dispatch(changeSuperList(data.data.data.priorList))
        }
    },
    getHotList(){
        return async (dispatch)=>{
            const data = await axios.get("/juooo/home/index/getHotsRecommendList?city_id=0&version=6.0.5&referer=2");
            // console.log(data.data.data.hots_show_list.slice(0,10))
            dispatch(changeHotList(data.data.data.hots_show_list.slice(0,10)))
        }
    },
    getRepeatList(){
        return async (dispatch)=>{
            const data = await axios.get("/juooo/home/index/getTourRecommendList?city_id=0&version=6.0.5&referer=2");
            // console.log(data.data.data.tour_show_list)
            dispatch(changeRepeatList(data.data.data.tour_show_list.slice(0,6)))
        }
    }
}