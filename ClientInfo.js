import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClientInfo = () => {
    const [clientInfo, setClientInfo] = useState(null);

    useEffect(() => {
        const fetchClientInfo = async () => {
            try {
                const response = await axios.get('/api/client-info');
                setClientInfo(response.data);
            } catch (error) {
                console.error('Error fetching client info:', error);
            }
        };

        fetchClientInfo();
    }, []);

    return (
        <div>
            {clientInfo ? (
                <div>
                    <p>IP klienta: {clientInfo.client_ip}</p>
                    <p>Czas klienta: {clientInfo.client_time}</p>
                </div>
            ) : (
                <p>Ładowanie...</p>
            )}
        </div>
    );
};

export default ClientInfo;
