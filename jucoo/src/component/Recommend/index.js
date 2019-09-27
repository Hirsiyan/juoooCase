import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import recommendAction from "../../store/actionCreators/Recommend"
import Tools from "../../common/Tools"
import { Spin } from 'antd';
import 'antd/dist/antd.css';
import InfiniteScroll from "react-infinite-scroll-component";
import {Link} from "react-router-dom"
class Recommend extends React.Component{
    render(){
        const recommendList = this.props.recommendList;
        return(
            <div className={"recommend"}>
                <div className={"recommend-div1"}>
                    <p className={"recommend--div1-p1"}>为你推荐</p>
                    <p className={"recommend--div1-p2"}> > </p>
                </div>
                <InfiniteScroll
                    dataLength={this.props.recommendList.length}
                    next={this.fetchMoreData}
                    hasMore={true}
                    loader={<h4 style={{textAlign:"center"}}><Spin /></h4>}
                >
                    {this.props.recommendList.map((v,i) => (
                        <div key={i} className={"recommend-div2"}>
                            <div className={"recommend-div2-1"}>
                                <Link to={"/ticket/"+v.sche_id}><img className={"recommend-div2-1-img"} src={v.schePic} alt=""/></Link>
                            </div>
                            <div className={"recommend-div2-2"}>
                                <p className={"recommend-div2-2-p1"}><span style={{color:"black"}}>
                                    {Tools.time(v.min_show_time) === Tools.time(v.max_show_time)?Tools.time(v.min_show_time):Tools.time(v.min_show_time)+"-"+Tools.time(v.max_show_time)}
                                </span> {v.week}</p>
                                <p className={"recommend-div2-2-p2"}>{v.show_name}</p>
                                <p className={"recommend-div2-2-p3"}>{v.c_name}|{v.v_name}</p>
                                <p><span className={"recommend-div2-2-p3-span1"}>￥{v.low_price}</span><span className={"recommend-div2-2-p3-span2"}>起</span></p>
                            </div>
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
        )
    }
    fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            this.props.getRecommendList();
        }, 3000);
    };
    componentDidMount(){
        this.props.getRecommendList();
    }
}
function mapStateToProps(state){
    return{
        recommendList : state.recommendList.recommendList,
        page:state.recommendList.page,
        isLoading:state.loading
    }
}
export default connect(mapStateToProps,dispatch=>bindActionCreators(recommendAction,dispatch))(Recommend)

<<<<<<< HEAD

=======
>>>>>>> da8f004ba5ead0f0101b9c4e98a5af3e4f42b881
