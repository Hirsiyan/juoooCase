import React from "react";
import "../assets/css/Search.css"
import axios from "axios"
class Search extends React.Component{
    constructor(){
        super();
        this.state={
            getShowList:[]
        }
    }
    render() {
        return(
            <div className={"y-search"}>
                   <div className={"y-head"}>
                        <div className={"y-head-ipt"}>
                             <span className={"sear-icon"}></span>
                            <form action="">
                                <input type="search" className={"y-text"}/>
                            </form>
                            <span className={"cancel-icon"}></span>
                        </div>
                       <span className={"cancel"}>取消</span>
                   </div>
                   <section className={"js_search_com"}>
                       <div className={"com-t"}>
                            <div className={"default-wrap"}>
                                <section className={"default history-search"}>
                                    <h3 className={"title y-clearfix"}>
                                            <span className={"y-tilte"}>
                                                历史搜索
                                            </span>
                                    </h3>
                                    <ul className={"y-list"}>
                                        <li>李荣浩</li>
                                    </ul>
                                </section>
                                    <section className={"default hot-search"}>
                                        <h3 className={"title y-clearfix"}>
                                            <span className={"y-tilte"}>
                                                热门搜索
                                            </span>
                                        </h3>
                                        <ul className={"y-list"}>
                                                 <li>李荣浩</li>
                                                 <li>林宥嘉</li>
                                        </ul>
                                    </section>
                            </div>
                       </div>
                   </section>
            </div>
        )
    }
    async searChange(){
        const {data} = await axios.get("/juooo/Show/Search/getShowList",);
        console.log(data)
    }
    componentDidMount() {
        this.searChange();
    }
}
export default Search;