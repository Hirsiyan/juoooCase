import stateInit from "../../state/Location";
import {CHANGE_DISCOUNT_LIST} from "../../actionType/Location";
export function changeDiscountList(state=stateInit,{type,payload}) {
    state=JSON.parse(JSON.stringify(state));
    if (type === CHANGE_DISCOUNT_LIST){
        state.discountList=payload
    }
    return state
}