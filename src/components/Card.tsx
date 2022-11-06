import * as React from 'react';

export interface IAppProps {
    name: string, 
    email: string, 
    phone: string,
    avatar: string,

}

export default function App(props: IAppProps) {
    // create card component
    const styles = {
        card: {
            width: '350px',
            height: '350px',
            margin: '10px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box' as 'border-box',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            transition: '0.3s',
            backgroundColor: '#f2f2f2',
        },
        cardContent: {
            width: '100%',
            height: '100%',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box' as 'border-box',
        },
        cardHeader: {
            width: '100%',
            height: '40px',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box' as 'border-box',
            backgroundColor: '#ccc',
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
            <div style={styles.cardHeader}>
                <h3 style={styles.cardTitle}>{props.name}</h3>
            </div>
            <div style={styles.cardContent}>
                <p>{props.email}</p>
                <p>{props.phone}</p>
            </div>
        </div>
    );
};
