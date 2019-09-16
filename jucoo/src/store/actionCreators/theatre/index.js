import theatreAction from "../../actionType/theatre"
export function changeTheatreList(payload){
    return{
        type:theatreAction.CHANGE_THEATRE_LIST,
        payload
    }
}
export default {
    getTheatreList(){
        return async (dispatch)=>{
            console.log(11111)
        }
    }
}