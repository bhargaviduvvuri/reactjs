import React from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Name</th>
          <th>Job</th>
          
        </tr>
        <tr>
          <td>Charlie</td>
          <td>Janitor</td>
          
        </tr>
        <tr>
          <td>Mac</td>
          <td>Bouncer</td>
          
        </tr>
        <tr>
          <td>Dee</td>
          <td>Aspiring Actress</td>
          
        </tr>
        <tr>
          <td>Dennies</td>
          <td>BarTender</td>

        </tr>
      </table>
    </div>
  );
}
  
export default App;

----------------------------------app.css-------------------------------------------------------
  
  .App {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
  
table {
  border: 2px solid forestgreen;
  width: 800px;
  height: 200px;
}
  
th {
  border-bottom: 1px solid black;
}
  
td {
  text-align: center;
  border-bottom: 1px solid black;
}
