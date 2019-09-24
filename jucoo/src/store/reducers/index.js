import {combineReducers} from "redux"
import {theatre} from "./theatre"
import {swiperList} from "./swiper";
import {changeCityList} from "./selectCity"

import {recommendList} from "./Recommend"

import {typeList} from "./typeList";
import {loading} from "./loading"
const reducer = combineReducers({
    theatre,
    swiperList,
    typeList,
    changeCityList,

    recommendList,
    loading

});
export default reducer;
