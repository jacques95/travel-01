export interface User {
  id: string,
  name: string,
  email: string,
  title: string,
  organization: string,
  token: string
}

interface SearchPanelProps {
  users: User[],
  param: {
    name: string,
    personId: string
  },
  setParam: (param: SearchPanelProps["param"]) => void
}

export const SearchPanel = ({ param, setParam, users }: SearchPanelProps) => {
  return <form>
    <input type="text" onChange={event => setParam({
      ...param,
      name: event.target.value
    })} />
    <option value={""}>负责人</option>
    {
      users.map(user => <option value={user.id} key={user.id}>{user.name}</option>)
    }
  </form>;
};
