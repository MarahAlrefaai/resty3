import React, { useState , useEffect}  from 'react'; // useeffect is to loading use state is to get the data 
import Form from '../form/form.js';
import Result from '../result/result.js';
import axios from 'axios';//to fetch the data


  export default function App (props) {  

    const [data, setData] = useState(null);
    const [header, setHeader] = useState({});
    const [isloading, setLoading] = useState(false);
    const [requestParams, setRequest] = useState({});
    
    //============================================
  
    const handleApiCall = async (requestParams) => {
      
      setRequest(requestParams);
      let methodCall = requestParams.method.toLowerCase();
      const response = await axios[methodCall](requestParams.url, (requestParams.body) ? (requestParams.body) : null);
      const result = {
        
        results: response.data
      };
      const headers = {
        
        headers: response.headers
      };
      setHeader(headers);
      setData(result);
    }

    //==================================
    const handleClick = () => setLoading(true);
    useEffect(() => {
        if (isloading) {
        loading().then(() => {
                setLoading(false);
            });
        }
    }, [isloading]);
//========================================
const loading = () => {
  return new Promise((resolve) => setTimeout(resolve, 1800));

}

    return (
      <>
        <Form handleClick={handleClick} handleApiCall={handleApiCall}  />
     <Result  data={data} url={requestParams.url} header={header}  method={requestParams.method} loading={isloading} />
      </>
    );
  }
