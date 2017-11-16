import React, {Component} from "react";

class Pagination extends Component {
    render() {
        return (
            <div className="col s12 m12 center">
                <ul className="pagination">
                    <li className="waves-effect">
                        <a href="javascript:;" ng-click="pageBack()">
                            <i className="material-icons">chevron_left</i>
                        </a>
                    </li>
                    <li>{/*{{currentPage}} of {{totalPages}}*/} page(-s)</li>
                    <li className="waves-effect">
                        <a href="javascript:;" ng-click="pageForward()">
                            <i className="material-icons">chevron_right</i>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Pagination;