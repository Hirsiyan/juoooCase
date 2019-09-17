import React from "react"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import theatreActionCreators from "../store/actionCreators/theatre"
import "../assets/css/Theatre.css"
class Theatre extends React.Component{
    render(){
        const theatreList = this.props.theatreList;
        return(
            <div>
                <div className={"header-theatre-1"}></div>
                <div className={"header-theatre"}>
                    <p className={"header-p"}>剧院</p>
                </div>
                <div className={"theatre"}>
                    {
                        theatreList.map((v,i)=>(
                            <div key={i} className={"theatre-list"}>
                                <div className={"theatre-list-son"}>
                                    <div className={"theatre-list-son-1"}>
                                        <div className={"theatre-list-son-1a"}>
                                            <img className={"theatre-list-son-1a-img"} src={v.pic} alt=""/>
                                        </div>
                                        <div className={"theatre-list-son-1b"}>
                                            <p className={"theatre-list-son-1b-p1"}>{v.name}</p>
                                            <p>{v.count}场在售演出</p>
                                        </div>
                                        <div className={"theatre-list-son-1c"}>
                                            <span className={"iconfont icon-sangedian"}></span>
                                        </div>
                                    </div>
                                    <div className={"theatre-list-son-2"}>
                                        <div>
                                            <ul className="time-horizontal">
                                                <li><b></b>成立</li>
                                                <li><b></b>合作</li>
                                                <li><b></b>发展</li>
                                                <li><b></b>共赢</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
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