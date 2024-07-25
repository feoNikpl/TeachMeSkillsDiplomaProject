import { IStoreState, IUIState, THEMES } from "../../types";
import "./footer.scss";
import { useDispatch, useSelector} from 'react-redux'
import { setTheme} from '../../redux/action-creators';
import { Switch } from "@mui/material";

const Footer = () => {
    const theme = useSelector((state: IStoreState) => state.ui.theme)
    const dispatch = useDispatch();
    return (
        <footer className='footer'>
            <div className="container">
                <div className="info">
                    <div className="info__year">
                        ©2022 Blogolog
                    </div>
                    <div className="info__dark">
                        Dark theme
                        <Switch onChange={() => dispatch(setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK))}/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export {Footer}