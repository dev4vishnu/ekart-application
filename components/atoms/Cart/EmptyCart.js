import styled from "styled-components";

const ContentStyle =styled.div`
    margin:50% auto;
    width:auto;
    text-align:center;
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
