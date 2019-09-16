import React from "react"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import theatreActionCreators from "../store/actionCreators/theatre"
class Theatre extends React.Component{
    render(){
        return(
            <div>
                影院
            </div>
        )
    }
    componentDidMount(){
        this.props.getTheatreList();
    }
}
function mapStateToProps(state){
    console.log(state);
    return{
        theatreList:state.theatre.theatreList
    }
}
export default connect(mapStateToProps,dispatch=>bindActionCreators(theatreActionCreators,dispatch))(Theatre);