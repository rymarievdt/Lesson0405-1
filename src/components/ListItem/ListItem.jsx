import { Component } from "react";
import ManageListItem from "../ManageListItem/ManageListItem";
import "./ListItem.css";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.itemId,
      text: props.itemText,
      isCompleted: false,
      isItemEditing: false
    };
  }

  startItemEditing = () => {
    this.setState({ isItemEditing: true });
  };

  finishItemEditing = () => {
    this.setState({ isItemEditing: false });
  };

  editItem = (text) => {
    this.setState({ text: text });
    this.finishItemEditing();
  };

  deleteItem = () => {
    this.props.onDelete(this.state.id);
  };

  completeItem = () => {
    this.setState({ isCompleted: !this.state.isCompleted });
  };

  render = () => {
    let controls = !this.state.isItemEditing ? (
      <>
        <div className={this.state.isCompleted ? "text-completed" : "text"}>{this.state.text}</div>
        <div className="item-action" onClick={this.startItemEditing}>
          ✍️
        </div>
        <div className="item-action" onClick={this.deleteItem}>
          ❌
        </div>
        <div className="item-action" onClick={this.completeItem}>
          ✅
        </div>
      </>
    ) : (
      <ManageListItem text={this.state.text} onSave={this.editItem} onCancel={this.finishItemEditing} />
    );

    return <div className="list-item">{controls}</div>;
  };
}

export default ListItem;
