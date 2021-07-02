import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { getListCity } from "./controllers/actions/city";
import Empty from "./partials/empty";
import ListCity from "./partials/list";
import Load from "./partials/loading";
import "./styles.css";

const App = (props) => {
  const { city, loading, getDataCity } = props;

  return (
    <div>
      {loading ? (
        <Load />
      ) : city.length === 0 ? (
        <Empty />
      ) : (
        <ListCity data={city} />
      )}
      <br />
      <Button variant="contained" color="primary" onClick={() => getDataCity()}>
        Load Province
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    city: state.cityStore.city,
    loading: state.cityStore.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDataCity: () => dispatch(getListCity())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
