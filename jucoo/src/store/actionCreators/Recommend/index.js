import recommendAction from "../../actionType/Recommend"
import axios from "axios"
export function changeRecommendList(payload){
    return{
        type:recommendAction.CHANGE_RECOMMEND_LIST,
        payload
    }
}
export default {
    getRecommendList(){
        return async (dispatch)=>{
            const data = await axios.get("/juooo/home/index/getRecommendShow?cityAdd=&page="+this.page+"&version=6.0.5&referer=2");
            // console.log(data.data.data.recommend_show_list)
            dispatch(changeRecommendList(data.data.data.recommend_show_list))
        }
    }
}