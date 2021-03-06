import './Detail.css';
import React, { useState, useEffect, useCallback } from 'react';
import * as messagesAPI from '../../utilities/messages-api';
import Loading from '../Loading/Loading';
import ShowDetails from '../ShowDetails/ShowDetails';

export default function Detail ({ activeMsg, setMessages }) {
    const [msg, setMsg] = useState([]);
    const [loaded, setLoaded] = useState(false);

    function checkLoaded () {
        if (msg !== []) setLoaded(true);
    }
    setTimeout(checkLoaded, 800);

    useEffect(function() {
        async function fetchMsg() {
            //fix conditional later
          if (1) {
            const msg = await messagesAPI.getDetails(activeMsg);
            setMsg(msg);
          }
        }
        fetchMsg();
    }, []);

    return (
        <div className="Detail">
            {loaded ? <div><ShowDetails setMessages={setMessages} activeMsg={activeMsg} msg={msg} /></div> : <Loading />}
        </div>
    )
}