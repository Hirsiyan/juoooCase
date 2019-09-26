const express = require("express");
const app = express();
const db = require("./module/db");
const tools = require("./module/tools");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.static(__dirname+"/upload"));
app.all("*",function (req,res,next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,POST,DELETE,PUT");
    res.header("Access-Control-Allow-Headers","content-type");
    next();
});
//发送验证码
app.post("/sendCode",async (req,res)=>{
    /*
    * 1、发送过
    *       1、未过期
    *           提示验证码未过期
    *       2、过期（60s）
    *           发送验证码
    * 2、未发送过
    *       发送验证码
    * */
    const phoneId = req.body.phoneId;
    const phoneInfo = await db.findOne("phoneCode",{phoneId});
    const code = tools.getRandom(100000,999999);
    if(phoneInfo){
        //发送过
        if((Date.now()-phoneInfo.addTime)>1000*60*60*24*365){
            //过期，发送验证码
            await db.updateOne("phoneCode",{phoneId},{
                $set:{
                    code,
                    addTime:Date.now()
                }
            });
            tools.sendCode(phoneId,code)
                .then(()=>tools.json(res,1,"发送成功"))
                .catch((err)=>{
                    console.log(err);
                    tools.json(res,-1,"发送失败")
                })
        }else{
            //未过期
            tools.json(res,-1,"您的验证码未过期，请稍后再发")
        }
    }else{
        //未发送
        await db.insertOne("phoneCode",{
            code,
            phoneId,
            addTime:Date.now()
        });
        tools.sendCode(phoneId,code)
            .then(()=>tools.json(res,1,"发送成功"))
            .catch(()=>tools.json(res,-1,"发送失败"))
    }
});
//登录
app.post("/login",async (req,res)=>{
    let {phoneId,password} = req.body;
    let code = password/1;
    const phoneInfo = await db.findOne("phoneCode",{
        phoneId,
        code
    });
    if(phoneInfo){
            res.json({
                ok:1,
                msg:"登录成功",
                phoneId,
                token:tools.enToken({
                    phoneId
                })
            })
    }else{
        await db.insertOne("phoneCode",{
            phoneId,
            code
        });
        res.json({
            ok:2,
            msg:"登陆成功",
            phoneId,
            token:tools.enToken({
                phoneId
            })
        })
    }
});
app.listen(80,function(){
    console.log("服务器开启成功")
});