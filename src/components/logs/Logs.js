import React , { useState, useEffect } from 'react';

const Logs = () => {
    setLoading(true);
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
       getLogs();
       
       //eslint-disable-next-line
    }, []);


    const getLogs = async () => {
       
        const res = await fetch('/logs');
        const data = await res.json();
     
        setLogs(data);
        setLoading(false);
      };


    if(loading){
        return <h4>loading...</h4>
    }
    return (
        <ul className="collection-with-header">
            <li className="collection-header">
                <h4 className="center">System Logos</h4>

            </li>
            {!loading && logs.length === 0 ? (<p className="center">No logs to show....</p>):
                logs.map(log =>  (<li className="center">{log.message}</li>)
                 ) }
        </ul>
    )
}

export default Logs
