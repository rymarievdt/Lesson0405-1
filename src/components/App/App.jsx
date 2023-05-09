import { Component } from "react";
import ListItem from "../ListItem/ListItem";
import ManageListItem from "../ManageListItem/ManageListItem";
import "./App.css";

class App extends Component {
  state = {
    shoppingList: [],
    isItemAdding: false
  };

  startAddingNewItem = () => {
    this.setState({ isItemAdding: true });
  };

  finishAddingNewItem = () => {
    this.setState({ isItemAdding: false });
  };

  addNewItem = (newItemText) => {
    if (newItemText && !this.state.shoppingList.some((item) => item.text === newItemText)) {
      let newItemId = Math.max(...this.state.shoppingList.map((item) => item.id)) + 1;
      newItemId = !Number.isInteger(newItemId) ? 1 : newItemId;
      this.setState({ shoppingList: [...this.state.shoppingList, { id: newItemId, text: newItemText, isDone: false }] });
    }

    this.finishAddingNewItem();
  };

  deleteItem = (id) => {
    this.setState({ shoppingList: this.state.shoppingList.filter((item) => item.id !== id) });
  };

  render() {
    let addNewItemControls = !this.state.isItemAdding ? <button onClick={this.startAddingNewItem}>додати ➕</button> : <ManageListItem onSave={this.addNewItem} onCancel={this.finishAddingNewItem} />;

    return (
      <>
        <h1>Список покупок</h1>
        <div className="add-new-item-control">{addNewItemControls}</div>
        <div className="shopping-list">
          {this.state.shoppingList.map((item) => {
            return <ListItem key={item.id} itemId={item.id} itemText={item.text} onEdit={this.editItem} onDelete={this.deleteItem} />;
          })}
        </div>
      </>
    );
  }
}

export default App;
