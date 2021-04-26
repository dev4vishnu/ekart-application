import styled from "styled-components";

const HeaderStyles = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-items: self-end;
  box-shadow: 1px 3px 7px 2px #cacacacc;
  text-align: center;
  height: 80px;
  .lhs {
    padding: 0.4rem 1rem;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }
  .rhs {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    align-content: stretch;
    width: 100%;
    margin-right: 5%;
  }

  .login-reg {
    margin-top: 20px;
  }
  .login-reg a {
    margin-right: 5px;
    font-size: 12px;
    font-weight: 600;
  }
  .login-reg a:hover {
    color: #c51162;
    text-decoration: none;
    background-color:#f5f5f5;
    border-radius:10%;
    padding:5px;
    
  }
`;

export default HeaderStyles;
