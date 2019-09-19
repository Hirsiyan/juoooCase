import initState from "../../state/swiper"
import swiperAction from "../../actionType/swiper"
export function swiperList(state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === swiperAction.CHANGE_SWIPER_LIST) state.swiperList = payload;
    if(type === swiperAction.CHANGE_SUPER_LIST) state.superList = payload;
    if(type === swiperAction.CHANGE_HOT_LIST) state.hotList = payload;
    if(type === swiperAction.CHANGE_REPEAT_LIST) state.repeatList = payload;
    return state;
}