import { useEffect, useState } from "react";
import * as qs from "qs";

import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { seriesParam, useDebounce, useMount } from "utils";
import { useHttp } from "../../utils/http";

const apiUrl = process.env.REACT_APP_URL;

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: ""
  });

  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const debouncedParam = useDebounce(param, 120);
  const client = useHttp();

  useEffect(() => {
    client("projets", { data: seriesParam(debouncedParam) }).then(setList);
  }, [param]);

  useMount(() => {
    client('users').then(setUsers)
  });

  return <div>
    <SearchPanel param={param} setParam={setParam} users={users} />
    <List list={list} users={users} />
  </div>;
};
