import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  h1{
    color: #1976d2;
    margin: 8px;
  }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px;

    div {
      margin: 14px 0 14px 0;
    }
`;


export const Button = styled.button.attrs({
  type: 'submit',
})`
    background: none;
    border-radius: 6px;
    border: 2px solid #1976d2;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    margin-top: 16px;
    padding: 4px;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
`;

export const Head = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    background-color: #1976d2;
    padding: 18px;
    
    h1{
        color: #fff;
        margin: 8px;
    }
`;


export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    

    a{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 120px;
      padding: 6px;
      margin-left: 10px;
      text-decoration: none;
      color: #dda;
      border: 1px solid #fff;
      border-radius: 3px
    }

    a:hover{
      background: #dda;
      color: #002;
      transition: 0.5s ease-in-out;
    }
`;

export const TABLE = styled.table`
    width: 100%;
    padding: 10px;
    border: 1px solid #fff;
    border-radius: 8px;
    display: block;
    height: 500px;
    overflow: auto;
    padding: 20px;
    position relative;
    border-collapse: collapse;

    thead{
      background-color: white;
      position: sticky;
      top: 0;
      color: #000;
      font-weight: bold;
      font-size: 20px !important;                                                                               
      tr:nth-child(2){
        th{
          padding: 10px;
        }
      }
    }
    tbody{
      tr{
        td{
          padding: 10px;
          text-align: center;
          font-weight: bold;
          border: 2px solid grey;
          border-radius: 2px;
          border-style: dashed;
          opacity: 0.5;
        }
      }
    }
`;
