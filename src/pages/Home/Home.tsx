import * as React from 'react';
import { HomeStyles } from './Home.styles';
import Input from '../../components/Input';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';
export interface IAppProps {
}

export default function App (props: IAppProps) {
  const [searchValue, setSearchValue] = React.useState('');
  const styles = HomeStyles;
  return (
    <div style={styles.container}>
        <h1 style={styles.title}>Welcome to My UserList</h1>
        <p style={styles.description}>
            You can search above with input
        </p>
        <p style={styles.description}>
            You can react details for user with click on user
        </p>
        <code style={styles.code}>Thank you for review </code>
        <div style={styles.flexRow}>
            <Input searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <div style={styles.flexRow}>
            <Card 
            name='Leanne Graham'
            email='lenne@gmail.com'
            phone='1-770-736-8031 x56442'
            avatar=''
            />
            <Card
            name='Ervin Howell'
            email='eving@gmail.com'
            phone='010-692-6593 x09125'
            avatar=''
            />
            <Card
            name='Ervin Howell'
            email='eving@gmail.com'
            phone='010-692-6593 x09125'
            avatar=''
            />
            <Card
            name='Ervin Howell'
            email='eving@gmail.com'
            phone='010-692-6593 x09125'
            avatar=''
            />
            <Card
            name='Ervin Howell'
            email='eving@gmail.com'
            phone='010-692-6593 x09125'
            avatar=''
            />
          </div>
          <Pagination 
          totalPosts={12}
          postsPerPage={6}
          />


        
    </div>
  );
}
