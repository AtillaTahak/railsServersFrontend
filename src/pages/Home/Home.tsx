import * as React from 'react';
import { HomeStyles } from './Home.styles';
import Input from '../../components/Input';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';

export default function Home() {
  const [searchValue, setSearchValue] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchResult, setSearchResult] = React.useState([]);
  const [data, setData] = React.useState({
    per_page: 0,
    total: 0,
    data: []
  });

  const styles = HomeStyles;
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setSearchValue('');

  }
  const fetchUsers = async (pageNumber:any,searchValue:string) => {
     if(searchValue.length > 0){
      const response = await fetch(`http://127.0.0.1:3001/api/v1/users/find_user/${searchValue}`);
      const data = await response.json();
      setSearchResult(data);
      }else{
      const response = await fetch(`http://127.0.0.1:3001/api/v1/users/${pageNumber}`);
      const data = await response.json();
      setData(data);
      }
  }
  React.useEffect(() => {
    fetchUsers(currentPage,searchValue);
  }, [currentPage,searchValue]);


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
        {searchValue.length == 0 ? data && data.data.map((user: any) => (
          <Card
            key={user.id}
            name={user.first_name}
            email={user.email}
            avatar={user.avatar}
          />
        )): searchResult && searchResult.length > 0 ? searchResult.map((user: any) => (
          <Card
            key={user.id}
            name={user.first_name}
            email={user.email}
            avatar={user.avatar}
          />
        )): <p style={styles.description}>No result</p>}
      </div>
      <Pagination
        paginate={paginate}
        totalPosts={data.total}
        postsPerPage={data.per_page}
      />
    </div>
  );
}
