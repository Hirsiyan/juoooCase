import theatreAction from "../../actionType/theatre"
import axios from "axios"
export function changeTheatreList(payload){
    return{
        type:theatreAction.CHANGE_THEATRE_LIST,
        payload
    }
}
export default {
    getTheatreList(){
        return async (dispatch)=>{
            const data = await axios.get("/juooo/theatre/index/getTheatreList?page=1&version=6.0.5&referer=2");
            // console.log(data.data.data.theatre_list)
            dispatch(changeTheatreList(data.data.data.theatre_list))
        }
    }
}