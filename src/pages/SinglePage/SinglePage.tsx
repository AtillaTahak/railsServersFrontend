import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

export interface IAppProps {
}

export default function SinglePage (props: IAppProps) {
  const { email } = useParams();
  console.log(email);
  const [user, setUser] = React.useState([
    {
      first_name: '',
      email: '',
      avatar: '',
    }
  ]);
  React.useEffect(() => {
    fetch(`http://127.0.0.1:3001/api/v1/users/find_user/${email}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [email]);
  return (
    <div>
      <h1>Single Page</h1>
      <p>{user && user.length > 0 && user[0].first_name}</p>
      <p>{user && user.length > 0 && user[0].email}</p>
      <img src={user && user.length > 0 && user[0].avatar || ""} alt="Avatar" style={{ width: '100%' }} />
      <Link to={`/`}>
        <p>Back to Home</p>
      </Link>
    </div>
  );
}
