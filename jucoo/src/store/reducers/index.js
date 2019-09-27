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

    loading


=======
    loading,
    changeDiscountList
>>>>>>> da8f004ba5ead0f0101b9c4e98a5af3e4f42b881
});
export default reducer;
