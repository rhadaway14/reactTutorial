import styled from 'styled-components';


export const Container = styled.section`
    height: 50px;
    width: 150px;

`;

export const Rec = styled.div`
font-family: Cardo, sans-serif;
cursor: pointer;
font-size: 20px;
font-weight: 700;
width: 80px;
margin: 15px auto;
background: red;
border: none;
padding: 15px 30px;
color: black;
border: 2px solid black;
transition: 1s ease-in-out;
text-decoration: none;


&:hover {
    color: white;
    background: black;
}
`;