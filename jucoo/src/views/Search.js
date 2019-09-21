import React from "react";
import "../assets/css/Search.css"
import axios from "axios"

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            ShowList: []
        }
    }
    render() {
        console.log(this.props);
        const ShowList = this.state.ShowList;
        return (
            <div className={"y-search"}>
                <div className={"y-head"}>
                    <div className={"y-head-ipt"}>
                        <span className={"sear-icon"}></span>
                        <form action="">
                            <input ref={"searchVaule"} type="search" onChange={this.getSearChange.bind(this)}
                                   className={"y-text"}/>
                        </form>
                        <span className={"cancel-icon"}></span>
                    </div>
                    <span className={"cancel"} onClick={() => {
                        this.props.history.push("/")
                    }}>取消</span>
                </div>
                <section className={"js_search_com"}>
                    <div className={"com-t"}>
                        {/*<section className={"default history-search"}>*/}
                        {/*    <h3 className={"title y-clearfix"}>*/}
                        {/*            <span className={"y-tilte"}>*/}
                        {/*                历史搜索*/}
                        {/*            </span>*/}
                        {/*    </h3>*/}
                        {/*    <ul className={"y-list"}>*/}
                        {/*        <li>李荣浩</li>*/}
                        {/*    </ul>*/}
                        {/*</section>*/}
                        <div className={"default-wrap"} style={{display: "none"}}>
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
                        {

                            ShowList.map((v, i) => (
                                    <div id={"itemList"} className={"item-list"} key={i} style={{display:1===1?"none":"block"}}>
                                        <section className={"recommend-wrap"}>
                                            <div className={"recommend-list"}>
                                                <ul>
                                                    <li>
                                                        <div className={"show-icon"}>
                                                            <a href="">
                                                                <img src={v.pic} alt=""/>
                                                            </a>
                                                        </div>
                                                        <div className={"item-desc"}>
                                                            <p className={"show-date"}>
                                                                <strong>
                                                                    {v.show_time_top}
                                                                </strong>
                                                                {v.show_time_bottom}
                                                            </p>
                                                            <a href="">
                                                                <h3 className={"title text-double"}
                                                                    dangerouslySetInnerHTML={{__html: v.name}}></h3>
                                                            </a>
                                                            <p className={"venue text-single"}>
                                                                <span>{v.city_name} | {v.venue_name}</span>
                                                            </p>
                                                            <p className={"price"}>
                                                                <strong className={"c_ff6"}>
                                                                    {v.min_price}
                                                                </strong>起
                                                            </p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                        </section>
                                    </div>

                                )
                            )
                        }


                        <p className={"no-more-tip"}>没有更多了</p>

                    </div>
                </section>

            </div>
        )
    }
    async getSearChange() {
        const search = this.refs.searchVaule.value;
        console.log(search);
        const {data} = await axios.get("/juooo/Show/Search/getShowList?keywords=" + search + '&page=1&sort_type=1&version=6.0.5&referer=2');
        this.setState({
            ShowList: data.data.list
        })
        const ShowList = this.state.ShowList;
        console.log(ShowList);

    }

    componentDidMount() {
        const hotSearch = document.querySelector(".default-wrap");
        console.log(hotSearch);
        const itemList = document.querySelector("#itemList");
        console.log(itemList);
        if (this.state.ShowList.length===0) {
            hotSearch.style.display="block"
        }else{
            itemList.style.display="block"
        }
        this.getSearChange();
    }
}

export default Search;