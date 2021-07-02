import { List, ListItemText } from "@material-ui/core";

const ListCity = (props) => {
  const { data } = props;

  return (
    <List component="nav">
      {data.map((city, idx) => {
        return <ListItemText primary={city.nama} key={idx} />;
      })}
    </List>
  );
};

export default ListCity;
