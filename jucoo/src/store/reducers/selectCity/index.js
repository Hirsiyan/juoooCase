import {CHANGE_CITY_LIST} from "../../actionType/selectCity";
import initState from "../../state/SelectCity"

export function changeCityList(state=initState,{type,payload}) {
     state=JSON.parse(JSON.stringify(state));
     if(type===CHANGE_CITY_LIST){
         state.cityList=payload;
     }
         return state;
}

