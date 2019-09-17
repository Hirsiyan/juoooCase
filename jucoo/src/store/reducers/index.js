import {combineReducers} from "redux"
import {theatre} from "./theatre"
import {swiperList} from "./swiper";
const reducer = combineReducers({
    theatre,
    swiperList
});
export default reducer;
