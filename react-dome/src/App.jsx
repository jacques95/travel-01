import React, {Component} from "react";
import * as qs from 'qs'

import './App.less';
import ProxyDemo from "./Proxy";
import api from "./api";

export default class App extends Component {

    constructor ( props ) {
        super ( props );
        this.state = {
            banners: []
        }
    }

    componentDidMount () {
        /**
         * get
         */
        fetch ( "http://iwenwiki.com/api/blueberrypai/getIndexBanner.php" )
            .then ( res => res.json () )
            .then ( data => {
                this.setState ( {banners: data.banner} )
            } )

        /**
         * get
         * body:string 可用qs转码
         */
        fetch ( "http://iwenwiki.com/api/blueberrypai/login.php", {
            method: "POST",
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
                "Accept": 'application/json,text/plain,*/*'
            },
            body: qs.stringify ( {
                user_id: "iwen@qq.com",
                password: "iwen123",
                verification_code: "crfvw"
            } )
            // body:"user_id=iwen@qq.com&password=iwen123&verification_code=crfvw"
        } ).then ( res => res.json () )
            .then ( data => {
                console.log ( data )
            } )

        api.getChengping().then(res=> res.json()).then(data =>{
            console.log(data)
        })

        api.getLogin({
            user_id: "iwen@qq.com",
            password: "iwen123",
            verification_code: "crfvw"
        }).then(res=>res.json()).then(data=>{console.log(data)})
    }

    render () {
        const {banners} = this.state
        return (<>{
                banners.length > 0 ? <ul>
                    {banners.map ( ( ele, index ) => {
                        return <li key={index}>{ele.title}</li>
                    } )}
                </ul> : <div>数据正在加载...</div>
            }
                <ProxyDemo/>
            </>
        )
    }
}
