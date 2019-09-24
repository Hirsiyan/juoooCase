import React from "react"
class Type extends React.Component{
    render(){
        return(
            <div className={"typeList"}>
                <dl className={"typeList-dl"}>
                    <dt className={"typeList-dl-dt"}>
                        <img className={"typeList-dl-img"} src="https://image.juooo.com/group1/M00/03/26/rAoKNVzId-KAX9CzAAAG-I4FmRM978.png" alt=""/>
                    </dt>
                    <dd>演唱会</dd>
                </dl>
                <dl className={"typeList-dl"}>
                    <dt className={"typeList-dl-dt"}>
                        <img className={"typeList-dl-img"} src="https://image.juooo.com/group1/M00/03/26/rAoKNVzIeBeAScMUAAAEhJWVzNA919.png" alt=""/>
                    </dt>
                    <dd>音乐剧</dd>
                </dl>
                <dl className={"typeList-dl"}>
                    <dt className={"typeList-dl-dt"}>
                        <img className={"typeList-dl-img"} src="https://image.juooo.com/group1/M00/03/26/rAoKNVzIeCKAMJQ7AAAGkw6V6Ms752.png" alt=""/>
                    </dt>
                    <dd>舞台剧</dd>
                </dl>
                <dl className={"typeList-dl"}>
                    <dt className={"typeList-dl-dt"}>
                        <img className={"typeList-dl-img"} src="https://image.juooo.com/group1/M00/02/7D/rAoKmVzIeCyAB0jKAAAFxM4aS44306.png" alt=""/>
                    </dt>
                    <dd>儿童剧</dd>
                </dl>
                <dl className={"typeList-dl"}>
                    <dt className={"typeList-dl-dt"}>
                        <img className={"typeList-dl-img"} src="https://image.juooo.com/group1/M00/03/26/rAoKNVzIeDSATtBuAAAFFfAO9uw344.png" alt=""/>
                    </dt>
                    <dd>音乐会</dd>
                </dl>
            </div>
        )
    }
}
export default Type;