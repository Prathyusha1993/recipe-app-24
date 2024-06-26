import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + search);
  };

  return (
    <div>
      <FormStyle onSubmit={submitHandler}>
        <div>
          <FaSearch></FaSearch>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </FormStyle>
    </div>
  );
}

const FormStyle = styled.form`
margin: 0rem, 20rem;


div{
    position: relative;
width: 100%;
}

input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem,
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem,
    outline: none;
    width: 100%
}
svg{
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
}
`;

export default Search;
