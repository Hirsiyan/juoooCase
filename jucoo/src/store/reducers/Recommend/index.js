import initState from "../../state/Recommend"
import recommendAction from "../../actionType/Recommend"
export function recommendList(state = initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === recommendAction.CHANGE_RECOMMEND_LIST){
        state.recommendList = [...state.recommendList,...payload];
        state.page++;
    }
    return state;
}