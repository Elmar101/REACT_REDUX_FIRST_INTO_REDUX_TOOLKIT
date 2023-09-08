import "./styles.css";
import { useDispatch } from "react-redux";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import { reset, returnData, datasActions } from "./store";

export default function App() {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(reset());
  };

  const handleAddPayload = () => {
    dispatch(datasActions([{userName: "Elmar", password: "123"}]));
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr/>
      <button onClick={() => handleAddPayload()} className="button is-danger">
        create action with payload
      </button>
      <hr/>
       <button onClick={() => handleAddPayload()} className="button is-danger">
        create action with payload
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
