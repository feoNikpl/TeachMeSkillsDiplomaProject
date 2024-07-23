import { IUIState, THEMES } from "../../types";
import { SET_THEME } from "../action-types";

const initialState = {
    theme: THEMES.LIGHT,
}

const uiReducer = (state: IUIState = initialState, action: any) => {
    switch(action.type) {
        case SET_THEME: {
            return ({
                ...state,
                theme: action.theme
            })
        }
        default: {
            return state
        }
    }
}

export {
    uiReducer
}