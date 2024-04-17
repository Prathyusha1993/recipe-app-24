import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Category from "./components/Category";
import Pages from "./components/Pages";
import Search from "./components/Search";
import { GiKnifeFork } from "react-icons/gi";
import styled from "styled-components";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Food Recipe App</h1>
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>Deliciousss</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  dispaly: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
