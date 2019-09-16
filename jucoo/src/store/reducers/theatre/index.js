import initState from "../../state/theatre"
import theatreAction from "../../actionType/theatre"
export function theatre(state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === theatreAction.CHANGE_THEATRE_LIST) state.theatreList = payload;
    return state;
}