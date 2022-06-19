import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postActivity } from "../../Redux/actions";
import { BackButton, Container, ContainerModal } from "./FormActivity.css";
import activitylogo from "./activityoutdoor.png";
import validate from "./validate";
import { useHistory } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Themes from "../Theme/Themes";
import { GlobalStyle } from "../../GlobalStyled";

export default function FormActivity() {
  const theme = useSelector(state => state.theme);
  const allCountries = useSelector((state) => state.allCountries);
  const [modal, setModal] = useState(false);
  const [info, setInfo] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const [countries, setCountries] = useState([]);
  const AllCountriesSort = allCountries.sort(function SortNameAZ(a, b){
    return a.name.localeCompare(b.name);
})
  
  if (!AllCountriesSort.length) dispatch(getCountries());
  const [input, setInput] = useState({
    name: "",
    duration: "",
    difficulty: 0,
    season: "",
    ids: [],
  });
  const [errors, setErrors] = useState({
    name: "",
    duration: "",
    difficulty: "",
    season: "",
  });

  const onSubmit = function (e) {
    e.preventDefault();
    // let difficulty = parseInt(input.difficulty);
    // setInput({
    //   ...input,
    //   difficulty,
    // });
    dispatch(postActivity(input)) && setModal(true);
    setInfo(input)
    
    setInput({name: "",duration: "",difficulty: 0,season: "",ids: [],})
    e.target.reset()
    setCountries([])
  };

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const onChange = (e) => {
    if (![...countries].includes(e.target.value))
      setCountries([...countries, { id: e.target.value }]);
    setInput({
      ...input,
      ids: [...countries.map((c) => c.id), e.target.value],
    });
  };

  const handleRemove = (id) => {
    let filterCountries = [...countries].filter((c) => c.id !== id);
    setCountries(filterCountries);
  };

  const onClick = () =>{
    setModal(!modal)
  }

  return (
    <ThemeProvider theme={Themes[theme ? 'dark' : 'light']}>
      <GlobalStyle/>
    <Container type="submit" onSubmit={onSubmit}>
      <div className="card">
        <img src={activitylogo} alt="activity-logo" className="activity-logo" />
        <h3>Name</h3>
        <div className="container-name">
          <input
            id="name"
            value={input.name}
            onChange={handleInputChange}
            name="name"
            className="name"
            type="text"
            placeholder="Write the name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <h3>Duration</h3>
        <div className="select-time">
          <input
          id="duration"
            value={input.duration}
            onChange={handleInputChange}
            name="duration"
            className="time"
            type="text"
            placeholder="Write the duration"
          />
          {errors.duration && <span className="error">{errors.duration}</span>}
        </div>

        <h3>Difficulty</h3>
        <div className="container-difficulty">
          <label className="container">
            One
            <input
              id="difficulty1"
              type="radio"
              name="difficulty"
              value="2"
              onChange={handleInputChange}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Two
            <input
            id="difficulty2"
              type="radio"
              name="difficulty"
              value="2"
              onChange={handleInputChange}
            />
            <span className="checkmark"></span>
          </label>
          <label  id="difficulty3" className="container">
            Three
            <input
            id="difficulty3"
              type="radio"
              name="difficulty"
              value="3"
              onChange={handleInputChange}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Four
            <input
            id="difficulty4"
              type="radio"
              name="difficulty"
              value="4"
              onChange={handleInputChange}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Five
            <input
            id="difficulty5"
              type="radio"
              name="difficulty"
              value="5"
              onChange={handleInputChange}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        {errors.difficulty && (
          <span className="error">{errors.difficulty}</span>
        )}

        <h3>Season</h3>
        <div className="container-temporate">
          <label className="container">
            Spring
            <input
            id="spring"
              type="radio"
              name="season"
              value="Spring"
              onChange={handleInputChange}
            />
            <span className="checkmark"></span>
          </label>
          <label  id="summer" className="container">
            Summer
            <input
            id="summer"
              type="radio"
              name="season"
              value="Summer"
              onChange={handleInputChange}
            />
            <span  className="checkmark"></span>
          </label>
          <label className="container">
            Fall
            <input
            id="fall"
              type="radio"
              name="season"
              value="Fall"
              onChange={handleInputChange}
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Winter
            <input
            id="winter"
              type="radio"
              name="season"
              value="Winter"
              onChange={handleInputChange}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        {errors.season && <span className="error">{errors.season}</span>}

        <h3>Countries</h3>
        <div className="countries">
          <select
            name="ids"
            id="selectCountries"
            className="selector-countries"
            onChange={onChange}
          >
            <option>Select Countries</option>
            {AllCountriesSort?.map((c, i) => (
              <option name="ids" key={i} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          <div className="container-selected-countries">
            {countries?.map((c) => (
              <div key={c.id} className="container-country">
                <button
                  className="close-country"
                  onClick={() => handleRemove(c.id)}
                >
                  X
                </button>
                <span className="country">{c.id}</span>
              </div>
            ))}
          </div>
        </div>
        {errors.ids && <span className="error">{errors.ids}</span>}
        <button
          disabled={
            !input.name || !countries.length || Object.entries(errors).length
          }
          type="submit"
          onSubmit={onSubmit}
          className="create-button"
          id="buttonCreate"
        >
          Create
        </button>
      </div>
      <BackButton id="backButtonActivity" onClick={()=>history.replace(`/home`)}>Back</BackButton> 
    </Container>
    <ContainerModal>
        {modal && (
          <div className="modal">
            <h2>Successful</h2>
            <p>
              The activity with name {info.name} and difficulty{" "}
              {info.difficulty} and duration of {info.duration} in{" "}
              {info.season} season has been successful
            </p>
            <button id="buttonClose" onClick={(e)=>onClick(e)}>Cerrar</button>
          </div>
        )}
      </ContainerModal>
    </ThemeProvider>
  );
}
