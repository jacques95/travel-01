import {Component} from "react";

export default class ProxyDemo extends Component {
    strURL = "/v1/restserver/ting?method=baidu.ting.song.getRecommandSongList&song_id=877578&num=5";

    componentDidMount () {
        fetch ( "strURL" )
            .then ( res => res.json () )
            .then ( data => {
            console.log ( data )
        } )
            .catch(error =>{
                console.log(new Error(error))
            })
    }

    render () {
        return <div>Proxy...</div>
    }
}


