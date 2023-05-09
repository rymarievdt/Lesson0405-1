import { Component } from "react";
import "./ManageListItem.css";

class ManageListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItemText: props.text
    };
  }

  setListItemText = (event) => {
    this.setState({ listItemText: event.target.value });
  };

  btnSaveClicked = () => {
    this.props.onSave(this.state.listItemText);
  };

  btnCancelClicked = () => {
    this.props.onCancel();
  };

  render = () => (
    <div className="manage-item-control">
      <input type="text" value={this.state.listItemText} onChange={this.setListItemText} />
      <button onClick={this.btnSaveClicked}>зберегти 📀</button>
      <button onClick={this.btnCancelClicked}>скасувати ❌</button>
    </div>
  );
}

export default ManageListItem;
