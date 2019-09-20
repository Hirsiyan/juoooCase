import loadingActionType from "../../actionType/loading";
export function changeLoading(payload){
    return{
        type:loadingActionType.CHANGE_IS_LOADING,
        payload
    }
}