import React, {Component} from "react";
import Chevron from "./Chevron";

class PaginationComponent extends Component {

    constructor(props) {
        super(props);
        this.pageBack = this.pageBack.bind(this);
        this.pageForward = this.pageForward.bind(this);
    }

    handleUpdate(pageToLoad) {
        this.props.onPageChange(pageToLoad);
    }

    pageBack = function (currentPage, e) {
        let prevPage = (currentPage - 1);
        if (prevPage > 0) {
            this.handleUpdate(prevPage);
        }
    };

    pageForward = function (currentPage, totalPages, e) {
        let nextPage = (currentPage + 1);
        if (nextPage <= totalPages) {
            this.handleUpdate(nextPage);
        }
    };

    displayChevronElement(displayElement, chevronText, pageFunction) {
        if (displayElement) {
            return <Chevron chevronText={chevronText}
                            pageFunction={pageFunction}/>
        }
        return null;
    }

    render() {

        const response = this.props.response;
        let content = null;
        if (response) {
            const totalPages = response.totalPages;
            const currentPage = response.number;

            content = <div className="col s12 m12 center">
                <ul className="pagination">
                    {this.displayChevronElement(!response.first, "chevron_left", (e) => this.pageBack(currentPage, e))}

                    <li>{currentPage} of {totalPages} page(-s)</li>

                    {this.displayChevronElement(!response.last, "chevron_right", (e) => this.pageForward(currentPage, totalPages, e))}
                </ul>
            </div>
        }
        return (
            <div>{content}</div>
        )
    }
}

export default PaginationComponent;