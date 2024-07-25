import './pagination.scss';
import { IStoreState, THEMES } from '../../../types';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from "../../../redux/action-creators";

const Pagination = () => {
    const theme = useSelector((state: IStoreState) => state.ui.theme)
    const total = useSelector((state: IStoreState) => state.posts.total);
    const currentPage = useSelector((state: IStoreState) => state.posts.currentPage);
    const maxPage = Math.ceil(total / 15);
    const dispatch = useDispatch();

    return (
        <div className='pgn'>
            <button className='pgn-btn' disabled={currentPage === 1} onClick={() => dispatch(setCurrentPage(currentPage - 1))}>
                <div className='pgn-btn-content'>
                    <div>Prev</div>
                </div>
            </button>

            <button className='pgn-btn' disabled={currentPage === maxPage} onClick={() => dispatch(setCurrentPage(currentPage + 1))}>
                <div className='pgn-btn-content'>
                    <div>Next</div>
                </div>
            </button>
        </div>
    )
}

export { Pagination }