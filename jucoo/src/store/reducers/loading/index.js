import loadingActionType from "../../actionType/loading"
import {isLoading} from "../../state/loading"
export function loading(state=isLoading,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === loadingActionType.CHANGE_IS_LOADING) state = payload.fal;
    return state;
}