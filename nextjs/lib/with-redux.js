import React from "react";
import createStore from '../store/store'

const isServer = typeof window === 'undefined'
const __NEXT_REUDX_STORE__ = '__NEXT_REUDX_STORE__'

function getOrCreateStore(initialState){
    if (isServer){
        return createStore(initialState)
    }

    if (!window[__NEXT_REUDX_STORE__]){
        window[__NEXT_REUDX_STORE__] = createStore(initialState)
    }
    return window[__NEXT_REUDX_STORE__]
}
export default Com =>{
    class WithReduxApp extends React.Component {
        constructor (props) {
            super (props)
            this.reduxStore = getOrCreateStore(props.initialReduxState)
        }
        render () {
            const {Component, pageProps, ...rest} = this.props
            if (pageProps){

            }
        }
    }
}
