import {CHANGE_DISCOUNT_LIST} from "../../actionType/Location";
import axios from "axios";
export function changeDiscountList(payload) {
    return {
        type:CHANGE_DISCOUNT_LIST,
        payload
    }
}

export default {
    getLocation(){
        return async (dispatch)=>{
            const info = await axios.get("/juooo/vip/index/getDiscountList?page=1&city_id=0&cate_id=0&discount_id=0&version=6.0.5&referer=2");
            console.log(info.data);
            dispatch(changeDiscountList(info.data.data.discountlist))
        }
    }
}