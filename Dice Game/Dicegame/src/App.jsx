import styled from "styled-components";


function App() {
  return (
    <>
      <Button>This is styled component button</Button>
    </>
  );
}

export default App;

  const Button = styled.button`
    background-color: black;
    color: white;
    padding: 10px;
  `;