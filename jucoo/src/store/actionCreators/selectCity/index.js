import {CHANGE_CITY_LIST, CHANGE_SORTED_LIST} from "../../actionType/selectCity";
import axios from "axios"
export function changeCityList(payload) {
    return {
        type: CHANGE_CITY_LIST,
        payload
    }
}
export function changeSortedList(payload) {
    return {
        type: CHANGE_SORTED_LIST,
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
    },
    getSortedList() {
        return async (dispatch) => {
            const info = await axios.get("/juooo/city/city/getSortedCityList?version=6.0.5&referer=2")
            console.log(info.data.data);
            dispatch(changeSortedList(info.data.data))
        }
    }
}

