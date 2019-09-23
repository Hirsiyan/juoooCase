import {combineReducers} from "redux"
import {theatre} from "./theatre"
import {swiperList} from "./swiper";
import {changeCityList} from "./selectCity"
import {changeAddressList} from "./AddressCity"

import {typeList} from "./typeList";
const reducer = combineReducers({
    theatre,
    swiperList,
    typeList,
    changeCityList,
    changeAddressList
});
export default reducer;
