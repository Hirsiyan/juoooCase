import {combineReducers} from "redux"
import {theatre} from "./theatre"
import {swiperList} from "./swiper";
import {changeCityList} from "./selectCity"

import {typeList} from "./typeList";
const reducer = combineReducers({
    theatre,
    swiperList,
    typeList,
    changeCityList
});
export default reducer;
