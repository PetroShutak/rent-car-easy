// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Виконуємо GET-запит при завантаженні компонента
    axios.get('https://65205e8e906e276284c463cc.mockapi.io/adverts')
      .then((response) => {
        // Отримали дані від сервера, зберігаємо їх у стейті
        setData(response.data);
        console.log(response.data);

      })
      .catch((error) => {
        console.error('Failed to fetch data:', error);
      });
  }, []);


  return (
    <div className="App">
      <h1 style={{
        color: 'red',
        fontSize: '50px',
        textAlign: 'center',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontStyle: 'italic',
        textDecoration: 'underline',
        textTransform: 'uppercase',
        backgroundColor: 'yellow',
        padding: '20px',
        margin: '20px',
        border: '2px solid black',
      }}>RENT CAR EASY</h1>
      <ul style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        listStyle: 'none'      
      }}>
        {data.map((item) => (
          <li key={item.id}>
            {/* {item.model} */}
            {/* {item.year}
            {item.price}
            {item.make}
            {item.description}
            {item.img} */}
          <img src={item.img} alt={item.model} width="300" height="300"/>
          <p>{item.model}</p>
          <p>{item.year}</p>
          <p>{item.price}</p>
          <p>{item.rentalCompany}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

