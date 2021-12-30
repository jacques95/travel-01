import {createStore, combineReducers, applyMiddleware} from 'redux'

const useInitialState = {}

function useReducer ( state = useInitialState, action ) {
    switch (action.type) {
        default:
            return state
    }
}

const allReducers = combineReducers ( {user: useReducer} )

export default function initializeStore ( state ) {
    const store = createStore (
        allReducers,
        Object.assign ( {}, {user: useInitialState}, state )
    )
    return store
}
