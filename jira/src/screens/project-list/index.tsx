import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useEffect, useState } from "react";

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: ""
  });

  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  // const debouncedParam = useDebounce(param, 120);

  useEffect(() => {
    fetch(``).then(async response => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [param]);
  return <div>
    <SearchPanel param={param} setParam={setParam} users={users} />
    <List list={list} users={users} />
  </div>;
};
