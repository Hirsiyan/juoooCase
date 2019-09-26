import {combineReducers} from "redux"
import {theatre} from "./theatre"
import {swiperList} from "./swiper";
import {changeCityList} from "./selectCity"
import {recommendList} from "./Recommend"
import {changeAddressList} from "./AddressCity"
import {typeList} from "./typeList";
import {loading} from "./loading"
import {changeDiscountList} from "./Location"
const reducer = combineReducers({
    theatre,
    swiperList,
    typeList,
    changeCityList,
    changeAddressList,
    recommendList,
<<<<<<< HEAD
    loading,
    changeDiscountList
=======
    loading

>>>>>>> e3336a429bd259f7f36ab00c6df9b5318525fcbc
});
export default reducer;
