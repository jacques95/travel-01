import * as qs from "qs";

export function httpGet ( url ) {
    return fetch ( url )
}

export function httpPost ( url, params ) {
    return fetch ( url, {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
            "Accept": 'application/json,text/plain,*/*'
        },
        body: qs.stringify ( params )
    } )
}
