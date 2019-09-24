import swiperAction from "../../actionType/swiper"
import axios from "axios"
import Swiper from "swiper/dist/js/swiper.js";
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
            dispatch(changeSwiperList(data.data.data.slide_list));
            const mySwiper1 = new Swiper('#swiper1',{
                observer: true,
                observeParents:true,
                pagination: {
                    el: '.swiper-pagination',
                },
                slidesPerView :1
            })
        }
    },
    getSuperList(){
        return async (dispatch)=>{
            const data = await axios.get("/juooo/vip/index/getVipHomeSchedular?version=6.0.5&referer=2");
            dispatch(changeSuperList(data.data.data.priorList));
            const mySwiper2 = new Swiper('#swiper2',{
                observer: true,
                observeParents:true,
                loop:true,
                slidesPerView :1,
            });
        }
    },
    getHotList(){
        return async (dispatch)=>{
            const data = await axios.get("/juooo/home/index/getHotsRecommendList?city_id=0&version=6.0.5&referer=2");
            dispatch(changeHotList(data.data.data.hots_show_list.slice(0,10)));
            const mySwiper3 = new Swiper('#swiper3',{
                observer:true,
                observeParents:true,
                paginationClickable: true,
                slidesPerView : 'auto',
            });
        }
    },
    getRepeatList(){
        return async (dispatch)=>{
            const data = await axios.get("/juooo/home/index/getTourRecommendList?city_id=0&version=6.0.5&referer=2");
            dispatch(changeRepeatList(data.data.data.tour_show_list.slice(0,6)));
                const mySwiper4 = new Swiper('#swiper4',{
                    observer:true,
                    paginationClickable: true,
                    slidesPerView : 'auto',
                });
        }
    }
}