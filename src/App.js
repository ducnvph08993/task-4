import React from 'react';
import './App.css';
import Routers from './routers';
import store from './redux/createStore';
import { Provider } from 'react-redux';

function App() {
  // const [employees, setEmployees] = useState(
  //   [
  //     {
  //       key: '1',
  //       name: 'John Brown',
  //       age: 32,
  //       address: 'New York No. 1 Lake Park',
  //       tags: ['nice', 'developer'],
  //     },
  //     {
  //       key: '2',
  //       name: 'Jim Green',
  //       age: 42,
  //       address: 'London No. 1 Lake Park',
  //       tags: ['loser'],
  //     },
  //     {
  //       key: '3',
  //       name: 'Joe Black',
  //       age: 32,
  //       address: 'Sidney No. 1 Lake Park',
  //       tags: ['cool', 'teacher'],
  //     },
  //   ]
  // );
  return (
    <Provider store={store}>
      <div className="App">
        <Routers />
      </div>
    </Provider>
  );
}

export default App;
