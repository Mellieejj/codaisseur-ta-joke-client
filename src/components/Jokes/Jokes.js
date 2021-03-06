import React, { useState, useEffect } from "react";
import { getJoke } from "../../actions/jokesActions";
import { useSelector, useDispatch } from "react-redux";
import ShareButtons from "../ShareButtons";
import { BallPulseSync } from "react-pure-loaders";
import "./Jokes.scss";

function Jokes() {
  const [jokeDelay, setJokeDelay] = useState(false);
  const dispatch = useDispatch();
  const joke = useSelector((state) => state.joke);

  useEffect(() => {
    dispatch(getJoke());

    setTimeout(() => {
      setJokeDelay(true);
    }, 3000);
  }, [dispatch]);

  return (
    <div className="jokeContainer">
      <div className="joke">
        <p>{joke ? joke[0].setup : <BallPulseSync color="#59b18c" loading={true}/>}</p>
        <p>{jokeDelay ? joke[0].punchline : null}</p>
      </div>
      <ShareButtons joke={joke} />
    </div>
  );
}

export default Jokes;
