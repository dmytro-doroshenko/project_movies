import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import { getMoviesData} from "../../actionCreators/movies.action";
import {connect} from "react-redux";
import './Pagination.scss';
import {NavLink} from "react-router-dom";

class Pagination extends Component {

    render() {
        const {loading, totalPages, currPage} = this.props;

        return (
            <div>
                {!loading && currPage > 1 && <NavLink
                    to={`/page=${currPage - 1}`}
                    className={`d-inline-block pagination_btn`}
                >
                    Prev. page
                </NavLink>}
                {
                    (new Array(totalPages).fill(1).map((item, index) => (
                        <NavLink
                            to={`/page=${index + 1}`}
                            activeClassName='pagination_btn_active'
                            className={`d-inline-block pagination_btn`}
                            key={index +1}
                        >
                            {index + 1}
                        </NavLink>
                    )))
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

