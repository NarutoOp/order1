import React, { Component } from "react";

export default class TabNav extends Component {
    render() {
        return (
            <div className="home">
                <ul className="nav">
                    {this.props.tabs.map((tab) => {
                        const active =
                            tab === this.props.selected ? "active" : "";

                        return (
                            <>
                                <li className="nav-item" key={tab}>
                                    <a
                                        className={
                                            "nav-link mt-1 px-1 " + active
                                        }
                                        onClick={() =>
                                            this.props.setSelected(tab)
                                        }
                                    >
                                        {tab}
                                    </a>
                                </li>
                            </>
                        );
                    })}
                </ul>
                {this.props.children}
            </div>
        );
    }
}
