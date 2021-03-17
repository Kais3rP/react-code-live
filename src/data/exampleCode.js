export const exampleJs = `
function Test() {
  const [state, setState] = useState(1);

  useEffect(() => {
    console.log("CLICKED!");
  }, [state]);

  const handler = () => setState(state => state * 2);

  return (
    <div>
      <button onClick={() => setState(state => state + 1)}>
        CLICKS {state}
      </button>
    </div>
  );
}
`

export const exampleCss = `button {
  background-color: tomato !important;
  color: #312;
  border-radius: 5px;
  cursor:pointer;
}
button:hover {
  transform: scale(1.05);
}
button:active {
  transform: scale(0.95)
}`
