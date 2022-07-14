import styled from 'styled-components';

export const Field = styled.input`
font-size: 1.25rem;
font-weight: 700;
padding: .35em .3em;
letter-spacing: 1px;
background-color: rgba(255,255,255,0);
border-radius: 15px;
box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
border: none;
border-top: 1px solid rgba(255,255,255,0.5);
border-left: 1px solid rgba(255,255,255,0.5);
// width: 15em;
color: white;
margin: 0 auto;
margin-bottom: 20px;

&:focus {
    outline: none;
}

&:hover {
box-shadow: 0 0 5px  white,
            0 0 15px  white,
            0 0 30px  white,
            0 0 60px  white;
}
`;