import { useState, useEffect } from 'react';
import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Individualimage from './Component/Individualimage';
import About from './Component/About';

function App() {


  const [data, setData] = useState([]);
  const [fetcherror, setFetcherror] = useState(null);
  const [loading, setLoading] = useState(true);
  const[up,setUp]=useState(1);
  const url=`https://picsum.photos/v2/list?page=${up}&limit=20`
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw Error("Did not receive Data");
        const apiData = await response.json();
        setData(apiData);
        setFetcherror(null);

      } catch (err) {

        setFetcherror(err.message);


      }
      finally {
        setLoading(false);

      }
    };
    setTimeout(() => {
          fetchData();
    
        }, 2000);


  }, [up,setData]);



  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home loading={loading}
                                      fetcherror={fetcherror}
                                      up={up} setUp={setUp}
                                        data={data} />} />
        
        <Route path='individualimage/:id' element={<Individualimage data={data} />} />
        <Route path='about' element={<About/>}/>
      </Routes>

    </BrowserRouter>


  );
}

export default App;
