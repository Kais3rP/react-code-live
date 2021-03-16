export const exampleCode = `
function Test () { 

  const [state, setState] = useState(1)

  useEffect(()=>{  
    console.log("INSIDE EFFECT")       
  },[state])

  const handler = () => setState( state => state*2)
  
  return (
        <>
          <MyBtn onClick={handler}>
            STATE: {state}
          </MyBtn> 
          <MyBtn2 onClick={handler}>
            STATE: {state}
          </MyBtn2> 
        </>
        )
}

const MyBtn = styled.button\`
            background-color: palegreen;
            cursor: pointer;
            &:active {
              transform: scale(0.9);
            }
          \`

const MyBtn2 = styled.button\`
            background-color: paleblue;
            cursor: pointer;
            &:active {
              transform: scale(0.9);
            }
          \`
`;

export const exampleCss = `button {
    color: magenta;
    width:100px;
    height:50px;
}`;
