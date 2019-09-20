import initState from "../../state/typeList"
import typeListAction from "../../actionType/typeList"
export function typeList(state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === typeListAction.CHANGE_TYPE_LIST) state.typeList = payload;
    return state;
}