import { THEMES } from "../../types";
import { SET_THEME } from "../action-types";

const setTheme = (theme: THEMES) => ({
    type: SET_THEME,
    theme,
})

export {
    setTheme
}