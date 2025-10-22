import React from "react";
import { ListItem } from "./ListItem";
import s from "./list.module.css";

export class List extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            list: [{
                title: "Item 1",
                price: 10
            }, {
                title: "Item 2",
                price: 20
            }, {
                title: "Item 3",
                price: 30
            }]
        }
    }
    
    render() {
        return (
            <div className={s.list}>
                {this.state.list.map((item, index) => (
                    <ListItem key={index} title={item.title} price={item.price} />
                ))}
            </div>
        );
    }
}
    