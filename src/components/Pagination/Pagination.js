import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import { getMoviesData} from "../../actionCreators/movies.action";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

import './Pagination.scss';

const CN = 'pagination';

class Pagination extends Component {

    render() {
        const {loading, totalPages, currPage} = this.props;

        let pages = [];
        let leftBorder;
        let rightBorder;
        const interval = 5;

        if (currPage - interval > 1) {
            leftBorder = currPage - interval;
        } else {
            leftBorder = 2;
        }

        if (currPage + interval < totalPages) {
            rightBorder = currPage + interval;
        } else {
            rightBorder = totalPages - 1;
        }

        for (let i = leftBorder; i <= rightBorder; i++) {
            pages.push(i);
        }

        return (
            <div className={`${CN}`}>
                {!loading && currPage > 1 && <NavLink
                    to={`/page=${currPage - 1}`}
                    className={`d-inline-block pagination_btn`}
                >
                    Prev. page
                </NavLink>}
                {!loading &&
                    <NavLink
                        to={`/page=1`}
                        activeClassName='pagination_btn_active'
                        className={`d-inline-block pagination_btn`}
                        key='1'
                    >
                        1
                    </NavLink>
                }
                {!loading && leftBorder > 2 && (
                        <NavLink
                            to={`/page=${leftBorder - 1}`}
                            className={`d-inline-block pagination_btn_gap`}
                            key={leftBorder - 1}
                        >
                            ...
                        </NavLink>
                    )
                }
                {!loading && pages.map(page => (
                        <NavLink
                            to={`/page=${page}`}
                            activeClassName='pagination_btn_active'
                            className={`d-inline-block pagination_btn`}
                            key={page}
                        >
                            {page}
                        </NavLink>
                    ))
                }
                {!loading && rightBorder < totalPages - 1 && (
                        <NavLink
                            to={`/page=${rightBorder + 1}`}
                            activeClassName='pagination_btn_active'
                            className={`d-inline-block pagination_btn_gap`}
                            key={rightBorder + 1}
                        >
                            ...
                        </NavLink>
                    )
                }
                {!loading &&
                    <NavLink
                        to={`/page=${totalPages}`}
                        activeClassName='pagination_btn_active'
                        className={`d-inline-block pagination_btn`}
                        key={totalPages}
                    >
                        {totalPages}
                    </NavLink>
                }
                {!loading && currPage < totalPages && <NavLink
                    to={`/page=${currPage + 1}`}
                    className={`d-inline-block pagination_btn`}
                >
                    Next page
                </NavLink>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.moviesReducer.loading,
        currPage: state.moviesReducer.currentPage,
        totalPages: state.moviesReducer.totalPagesNumber,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators( {
        changePage: getMoviesData,
    }, dispatch)
};

export const PaginationWithRedux = connect(mapStateToProps, mapDispatchToProps)(Pagination);

