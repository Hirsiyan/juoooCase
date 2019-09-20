import React from "react"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import typeList from "../../store/actionCreators/typeList"
class TypeList extends React.Component{
    render(){
        return(
            <div>

            </div>
        )
    }
    componentDidMount(){
        this.props.getTypeList();
    }
}
function mapStateToProps(state){
    console.log(state);
    return{
        typeList:state.typeList.typeList
    }
}
export default connect(mapStateToProps,dispatch=>bindActionCreators(typeList,dispatch))(TypeList)
