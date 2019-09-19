import {combineReducers} from "redux"
import {theatre} from "./theatre"
import {swiperList} from "./swiper";
import {typeList} from "./typeList";
const reducer = combineReducers({
    theatre,
    swiperList,
    typeList
});
export default reducer;
