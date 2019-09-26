import stateInit from "../../state/AddressCity"
import {CHANGE_ADDRESS_LIST} from "../../actionType/AddressCity"
export function changeAddressList(state=stateInit,{type,payload}) {
    state=JSON.parse(JSON.stringify(state))
    if(type===CHANGE_ADDRESS_LIST){
        state.addressList=payload
    }

    return state
}