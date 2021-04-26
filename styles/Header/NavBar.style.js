import styled from "styled-components";

const NavStyles = styled.div`
    {
    margin-top: 30px;
    margin-left:40px;
    }
    a {
        margin-left:1rem;
        font-weight:600;
        color: #808080bf;
        font-family: monospace;
        font-size:16px;
        &:hover{
            transform: scale(4.15);
            color: #c51162;
            text-decoration:none,
        }
    }
`;
export default NavStyles;