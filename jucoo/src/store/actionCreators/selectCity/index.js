import {CHANGE_CITY_LIST} from "../../actionType/selectCity";
import axios from "axios"
export function changeCityList(payload) {
    return {
        type: CHANGE_CITY_LIST,
        payload
    }
}

export default {
    getCityList() {
        return async (dispatch) => {
            const {data} = await axios.get("/juooo/city/city/getHotCityList?version=6.0.5&referer=2")
             console.log(data.data.hot_city_List)
            dispatch(changeCityList(data.data.hot_city_List))
        }
    }
}
