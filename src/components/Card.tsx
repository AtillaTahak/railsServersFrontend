import * as React from 'react';
import { Link } from "react-router-dom";


export interface IAppProps {
    name: string,
    email: string,
    avatar: string,

}

export default function App(props: IAppProps) {
    // create card component
    const styles = {
        card: {

            margin: '10px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box' as 'border-box',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            transition: '0.3s',
            backgroundColor: '#f2f2f2',

        },
        cardTitle: {
            width: '100%',
            height: '40px',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box' as 'border-box',
            backgroundColor: '#ccc',
        },
    };
    return (
        <div style={styles.card}>
            <Link to={`/user/${props.email}`}>
                <h3 style={styles.cardTitle}>{props.name}</h3>
                <p>{props.email}</p>
                <img src={props.avatar} alt="Avatar" style={{ width: '100%' }} />
            </Link>
        </div>
    );
};
