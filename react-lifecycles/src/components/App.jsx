import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout, CreateTodo, TodoDetails, TodoList } from "./";

class App extends React.Component {
  state = {
    todoList: [],
    currentTodo: {},
  };

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/new" render={() => <CreateTodo />} />
            <Route
              path="/todo/:id"
              render={(routeProps) => <TodoDetails {...routeProps} />}
            />
            <Route
              path="/"
              render={() => <TodoList todoList={this.state.todoList} />}
            />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
