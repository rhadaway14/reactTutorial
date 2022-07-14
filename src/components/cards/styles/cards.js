import styled from 'styled-components';


export const Card = styled.div`
    width: 400px;
    height: 300px;
    padding: 5px 15px;
    background: rgba(255,255,255,0.1);
    border-radius: 15px;
    margin: 10px;
    margin-top: 25px;
    box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
    border-top: 1px solid rgba(255,255,255,0.5);
    border-left: 1px solid rgba(255,255,255,0.5);
    backdrop-filter: blur(5px);
    transition: 1s;
    position: sticky;
    top: 50px;
`;

export const Title = styled.h2`
    color: rgba(255,255,255,0.25);
    text-align: center;
    margin: 5 auto;
`;

export const Content = styled.div`
    padding: 5px;
    text-align: center;
`;

export const Desc = styled.div`
    color: White;
    font-size: 20px;
`;

