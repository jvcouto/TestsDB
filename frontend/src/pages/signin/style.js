import styled from 'styled-components'


export const Style = styled.div`

img {
    height: 250px;
}
height: 100%;
display: flex;
justify-content: center;
align-items: center;
text-align: center;

form {
    display: flex;
    flex-direction: column;
    margin-left: 40px;
    padding: 50px;
    width: 25%;
    min-width: 300px;
    background: rgba(236,54,57,0.5);
    border-radius: 20px;
}

input {
    background: #FF6A6A;
    border: 2, 2, 2, 2px;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    margin: 0 0 15px;
}
button {
    margin: 5px 0 15px;
    height: 44px;
    background: #EE5C42;
    border-radius: 4px;
    font-weight: bold;
    color: rgba(0,0,0,0.7);
    border: 0;
    font-size: 16px;
    transition: background 0.5s;
    :hover{
        background: #FF0000;
    }
}
a {
    font-size: 12px;
    font-family: sans-serif;
    color: black;
    opacity: 0.8;
    :hover{
        opacity: 1;
    }
}
h2{
    color: rgba(0,0,0,0.7);
    margin: 0 0 50px;
    font-size: 40px;
    text-align: left;
}
`