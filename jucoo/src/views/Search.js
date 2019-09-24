import React from "react";
import "../assets/css/Search.css"
import axios from "axios"

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            ShowList:[],
            hotWord:[],
            keyword:"",
            aKeyWords:localStorage.aKeyWords?JSON.parse(localStorage.aKeyWords):[]
        }


    }
    render() {
        console.log(this.props);
        const ShowList = this.state.ShowList;
        const hotWord = this.state.hotWord;
        const keyword = this.state.keyword;
        return (
            <div className={"y-search"}>
                <div className={"y-head"}>
                    <div className={"y-head-ipt"}>
                        <span className={"sear-icon"}></span>
                        <form action="">
                            <input ref={"searchVaule"} type="search" onChange={this.getSearChange.bind(this)}
                                   className={"y-text"}/>
                        </form>
                        <span className={"cancel-icon"} onClick={()=>{
                            this.props.history.go(-1)
                        }}></span>
                    </div>
                    <span className={"cancel"} onClick={() => {
                        this.props.history.push("/")
                    }}>取消</span>
                </div>
                <section className={"js_search_com"}>
                    <div className={"com-t"}>
                        {
                            this.state.aKeyWords.length>0 && keyword.length===0?
                            <section className={"default history-search"}>
                                    <h3 className={"title y-clearfix"}>
                                            <span className={"y-tilte"}>
                                                历史搜索
                                            </span>
                                        <span className={"del-icon"} onClick={() => {
                                            window.localStorage.removeItem("aKeyWords");
                                            this.setState({
                                                aKeyWords:this.state.aKeyWords
                                            })
                                        }}></span>
                                    </h3>
                                    <ul className={"y-list"}>
                                    {
                                        this.state.aKeyWords.map((v,i)=>(
                                        <li key={i}>{v}</li>
                                        ))
                                    }
                                    </ul>
                        </section>
                                :""
                        }
                        <div className={"default-wrap"} style={{display:keyword.length===0?"block":"none"}}>
                            <section className={"default hot-search"}>
                                <h3 className={"title y-clearfix"}>
                                                        <span className={"y-tilte"}>
                                                            热门搜索
                                                        </span>
                                </h3>
                                <ul className={"y-list"}>
                                {
                                    hotWord.map((v,i)=>(
                                        <li ref={"sear"} key={i} onClick={
                                            this.getChange.bind(this,i)
                                        }>{v}</li>
                                    )

                                )
                                }

                                </ul>
                            </section>
                        </div>
                        {
                            ShowList.map((v, i) => (
                                    <div id={"itemList"} className={"item-list"} key={i} style={{display:keyword.length===0?"none":"block"}}>
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
    async Search(){
        if(!this.state.keyword.match(/^\s*$/)){
            if(this.state.aKeyWords.length>0){
                for(let i = 0;i<this.state.aKeyWords.length;i++){
                    if(this.state.aKeyWords[i]===this.state.keyword){
                           this.state.aKeyWords.splice(i--,1);
                    }
                }
            }
            this.state.aKeyWords.unshift(this.state.keyword);
            window.localStorage.setItem("aKeyWords",JSON.stringify(this.state.aKeyWords));
        }
         this.setState({
             aKeyWords:this.state.aKeyWords
         });
        console.log(this.state.aKeyWords)
    }
    async getHotWord(){
        const info = await axios.get("/juooo/Show/Search/getHotWord?version=6.0.5&referer=1");
        // console.log(info);
        this.setState({
            hotWord:info.data.data
        })
        // console.log(this.state.hotWord)
    }
    async getChange(i){
        //this.props.history.push({pathname:Search,query:{k:this.state.hotWord[i]}})
        this.refs.searchVaule.value = this.state.hotWord[i];
        this.getSearChange()
        this.refs.searchVaule.value=" ";


    }
    async getSearChange() {
        const search = this.refs.searchVaule.value;
        // console.log(search);
        const {data} = await axios.get("/juooo/Show/Search/getShowList?keywords=" + search + '&page=1&sort_type=1&version=6.0.5&referer=2');
        this.setState({
            ShowList: data.data.list,
            keyword:search,

        })
        const ShowList = this.state.ShowList;
        this.Search();
        // console.log(ShowList);

    }
    componentDidMount() {
        this.getHotWord();
        this.getSearChange();
    }
}

export default Search;