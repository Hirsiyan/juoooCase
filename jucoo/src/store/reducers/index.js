import {combineReducers} from "redux"
import {theatre} from "./theatre"
import {swiperList} from "./swiper";
import {changeCityList} from "./selectCity"
const reducer = combineReducers({
    theatre,
    swiperList,
    changeCityList

});
export default reducer;
