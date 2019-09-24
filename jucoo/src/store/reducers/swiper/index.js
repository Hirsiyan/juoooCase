import initState from "../../state/swiper"
import swiperAction from "../../actionType/swiper"
export function swiperList(state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    switch (type) {
        case swiperAction.CHANGE_SWIPER_LIST : state.swiperList = payload;break;
        case swiperAction.CHANGE_SUPER_LIST : state.superList = payload;break;
        case swiperAction.CHANGE_HOT_LIST : state.hotList = payload;break;
        case swiperAction.CHANGE_REPEAT_LIST : state.repeatList = payload;break;
    }
    return state;
}