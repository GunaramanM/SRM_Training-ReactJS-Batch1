import React, { useState } from 'react'

export default function DisName() {
    const [data, setData] = useState({
        date: new Date(),
       });
    

    return (
        <div className="txt">
            <h1 style={{ color: 'red' }}>Username: GUNARAMAN M</h1>
            <div className="res">
                 <h1 style={{ color: 'blue' }}>{data.date.toString()}</h1>
            </div>
           
        </div>
    )
}
