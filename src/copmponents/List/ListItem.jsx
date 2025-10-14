import React from "react";
import s from "./list.module.css";

export class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={s.item}>
                <div>Title: {this.props.title}</div>
                <div>Price: {this.props.price}</div>
            </div>
        );
    }
}

