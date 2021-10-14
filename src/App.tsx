import Layout from './components/Layout';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import CompleteItems from './components/CompleteItems';

function App() {
  return (
    <div className="App">
      <Layout>
        <AddTodoForm />
        <TodoList />
        <CompleteItems />
      </Layout>
    </div>
  );
}

export default App;
