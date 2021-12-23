import { StudentProvider } from './ContextApi/StudenContext';
import StudentList from './ContextApi/StudentList';
import StudentStatus from './ContextApi/StudentStatus';
import ClassCounterOne from './Hooks/ClassCounterOne';
import HooksCounterOne from './Hooks/HooksCounterOne';
import HooksUnmount from './Hooks/HooksUnmount';

function App() {
  return (

    <StudentProvider>
      <div className="App">
        <StudentStatus />
        <StudentList />
      </div>
    </StudentProvider>
  );
}

export default App;




