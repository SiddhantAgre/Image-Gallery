import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  async function getData(){
    const respose = await axios.get('https://picsum.photos/v2/list');
    setData(respose.data);
  }

  return (<div>
    <button onClick={getData} className="h-10 w-25 rounded-2xl my-5 ml-180 bg-green-600 font-semibold text-xl">Get Data</button>
    {data.map((elem) => {
      return <div className=" p-1 bg-orange-400">
        <div className="bg-blue-100 p-2 rounded-xl flex justify-between items-center font-semibold text-2xl text-black">
        <img src={elem.download_url} alt="" className="h-50 w-60 rounded-xl" />
        <h1>{elem.author}</h1>

        </div>
      </div>
    })}
  </div>);
}

export default App;