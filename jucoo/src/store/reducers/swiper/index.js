import initState from "../../state/swiper"
import swiperAction from "../../actionType/swiper"
export function swiperList(state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === swiperAction.CHANGE_SWIPER_LIST) state.swiperList = payload;
    return state;
}