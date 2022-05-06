import {useState, useEffect} from 'react'
import axios from 'axios'

const Table = ({data}) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>URL</th>                           
                </tr>
                
                {data && data.map((item, idx) => (
                    <tr key={idx}>
                        <td>{item.name}</td>
                        <td>{item.url}</td>
                    </tr>
                ))}                
            </tbody>
        </table>
    )
}

export default Table