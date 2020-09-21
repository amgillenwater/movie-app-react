import styled from 'styled-components'

export const Input = styled.input`
    flex-grow: 2;
    border: none;
    font-size: 1.2rem;
    width: 70%;
    background: none;
    outline: none;
    padding-left: 10px;
`

export const Form = styled.form`
    display: flex;
    width: 250px;
    min-height: 30px;
    flex-direction: row;
    border: 2px solid grey;
    padding: 5px;
    border-radius: 20px;
`
export const Button = styled.button`
    border: none;
    outline: none;
    background: #00838f;
    color: white;
    font-size: 1.2rem;
    width: 30%;
    border-radius: 20px;
`

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    max-width: 100vw;
    height: auto;
    justify-content: center;
    
`
export const Card = styled.div`
    background-color: white;
    margin: 15px;
    outline: 1px solid black;
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    max-width: 90vw;
`
export const Title = styled.h2`
    color: #000000;
    font-weight: 500;
    font-size: 2rem;
`
export const Header = styled.h2`
    color: #000000;
    font-weight: 400;
    font-size: 1.5rem;
`
export const Circle = styled.div`
    background-color: #00838f;
    text-align: center;
    color: #ffffff;
    font-weight: 300;
    margin: 6px 0;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
`
export const Description = styled.p`
    color: #000000;
    font-weight: 300;
    font-size: 1.2rem;
`
export const StyledImage = styled.img`
    width: 30%;
    margin: 10 px;
`

export const Nav = styled.div`
  border-bottom: 1px solid lightgray;
  margin-bottom: 15px;
  max-width: 100vw;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

`

export const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`

export const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
`

export const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
`

export const NavRight = styled.div`
  width: 33.333%;
  text-align: right;
`
