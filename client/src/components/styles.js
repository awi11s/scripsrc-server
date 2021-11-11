import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  h1, 
  h2,
  p,
  button,
  input,
  li {
    font-family: 'Concert One', cursive;
  }

  body {
    background-color: #fffaed;
    color: #99764e;
    text-align: center;
  }

  .modal {
    position: fixed;
    overflow: hidden;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5em 1em;
    z-index: 999999;
    box-sizing: border-box;
  }
  
  .modal.modal-fade {
    animation: fadeIn 1s;
    animation-fill-mode: forwards;
    opacity: 0;
  }
  
  .modal > .modal-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .modal > .modal-close {
    position: absolute;
    right: 15px;
    top: 10px;
    color: #ffffff;
    cursor: pointer;
    font-size: 1.25em;
    padding: 7px;
    width: 42px;
    height: 42px;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
  }
  
  .modal > .modal-close:hover {
    background: rgba(255, 255, 255, 0.989);
    color:rgba(0, 0, 0, 0.8);
  }
  
  .modal > .modal-body {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fffaed;
    border-radius: 7px;
    padding: 25px;
    z-index: 1000;
  }
  
  
  @keyframes fadeIn {
    0% {
      /* animation-timing-function: cubic-bezier(0.2542, 0.7899, 0.3142, 0.8148); */
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const FORM_STYLE = {
  display: 'block',
  position: 'relative',
  width: '300px',
  margin: 'auto'
}


export const INPUT_STYLES = {
  color: '#99764e',
  backgroundColor: '#fffaed',
  fontSize: '1.1em',
  border: '2px solid #99764e',
  borderRadius: '4px',
  margin: '1em',
  padding: '0.5em'
}

export const CONTENTBTN_STYLES = {
  display: 'inline-block',
  color: '#99764e',
  backgroundColor: '#fffaed',
  fontSize: '1em',
  margin: '1em',
  padding: '0.25em 1em',
  border: 'none',
  boxShadow: '0px 0px 0px 3px rgba(0, 0, 0, 0.1)',
  borderRadius: '5px'
}

export const BUTTON_STYLES = {
  display: 'inline-block',
  color: '#fffaed',
  backgroundColor: '#99764e',
  fontSize: '1em',
  margin: '1em',
  padding: '0.25em 1em',
  border: 'none',
  boxShadow: '0px 0px 0px 3px rgba(0, 0, 0, 0.1)',
  borderRadius: '5px'
}
export const Input = styled.input.attrs(props => ({
}))`
  color: #99764e;
  background-color: #fffaed;
  font-size: 1em;
  border: 2px;
  border-radius: 4px;
  margin: 1em;
  padding: 1em;
`;

export const ContentBtn = styled.button`
  display: inline-block;
  color: #99764e;
  background-color: #fffaed;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
  box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export const Button = styled.button`
  display: inline-block;
  font-family: 'Concert One', cursive;
  color: #fffaed;
  background-color: #99764e;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 3px;
`;

export const Element = styled.div`
    display: flex;
    margin: 0;
`;

export const Header = styled.div`
    display: inline-block;
    justify-content: center;
`;

export const LINK_STYLES = {
  textDecoration: 'none',
  color: '#fffaed'

}

// export const MODAL_STYLE = { 
//     position: 'fixed',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     backgroundColor: '#fffaed',
//     borderRadius: '7px',
//     padding: '50px',
//     zIndex: 1000
// }

// export const OVERLAY_STYLES = {
//     position: "fixed",
//     top: 0, 
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, .7)',
//     zIndex: 1000
// }