import { useEffect, useState } from 'react';
import Table from './components/common/Table';
import * as S from './styles.js';

function App() {
  const [users, setUsers] = useState();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/search/users?q=${searchQuery}+sort:followers`)
      .then(res => res.json())
      .then(data => setUsers(data.items))
  }, [searchQuery])

  return (
    <S.Root>
      <p>Technology used: JavaScript, React and styled-components</p>
      <input type="text" placeholder="ex.Elon Musk" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
      {users && <Table data={users}/>}
    </S.Root>
  );
}

export default App;
