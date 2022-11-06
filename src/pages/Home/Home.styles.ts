import CSS from 'csstype';

export const HomeStyles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    } as CSS.Properties,
    title: {
        fontSize: '4rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
    } as CSS.Properties,
    description: {
        fontSize: '1.5rem',
        fontWeight: 'normal',
        marginBottom: '2rem',
    } as CSS.Properties,
    link: {
        fontSize: '1.5rem',
        fontWeight: 'normal',
        color: 'blue',
    } as CSS.Properties,
    code: {
        fontSize: '1.5rem',
        fontWeight: 'normal',
        color: 'red',
    } as CSS.Properties,
    flexRow:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    } as CSS.Properties,
    flexColumn:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    } as CSS.Properties,
};
