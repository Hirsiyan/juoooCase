import {CHANGE_ADDRESS_LIST} from "../../actionType/AddressCity"
import axios from "axios"
export function changeAddressList(payload) {
    return {
        type: CHANGE_ADDRESS_LIST,
        payload
    }
}
export default {
    getAddressList(){
       return  async (dispatch)=>{
             const {data} = await axios.get("/juooo/city/city/getHotCityList?version=6.0.5&referer=2");
             dispatch(changeAddressList(data.data.hot_city_List))
             console.log(data.data.hot_city_List);
        }

    }
}