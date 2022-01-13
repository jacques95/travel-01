import {httpGet, httpPost} from "../utils/http";
import base from "./base";

const api = {
    getChengping () {
        return httpGet ( base.ownUrl + base.chengpin )
    },
    getLogin ( params ) {
        return httpPost ( base.ownUrl + base.chengpin, params )
    }
}
export default api
