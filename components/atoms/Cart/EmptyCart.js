import styled from "styled-components";

const ContentStyle =styled.div`
    width: auto;
    text-align: center;
    position: absolute;
    height: 50px;
    top: 50%;
    left: 50%;
    margin-top: -25px;
    margin-left: -25%;
    h3{
        color:#555;
        font-weight:bolder;
        padding:50% auto;
    }
    p{
        color:#001;
        font-weight:200;
        font-size:11px;
    }
`;

function EmptyCartTemplate() {
    return (
        <ContentStyle>
          <h3>No Items in your Cart</h3>
          <p>Your favorite items are just a click away</p>
        </ContentStyle>
    );
}
export default EmptyCartTemplate;
