import {combineReducers} from "redux"
import {theatre} from "./theatre"
import {swiperList} from "./swiper";
import {changeCityList} from "./selectCity"
import {recommendList} from "./Recommend"
import {changeAddressList} from "./AddressCity"
import {typeList} from "./typeList";
import {loading} from "./loading"
const reducer = combineReducers({
    theatre,
    swiperList,
    typeList,
    changeCityList,
    changeAddressList,
    recommendList,
    loading

});
export default reducer;
