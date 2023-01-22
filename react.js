serenade
  .language("javascript")
  .snippet(
    "add const function",
    "const <%cursor%> = () => {<%newline%><%indent%><%newline%>}",
    "inline"
  );

serenade
  .language("javascript")
  .snippet(
    "add const function <%name%>",
    "const <%name%> = () => {<%newline%><%indent%><%cursor%><%newline%>}",
    "inline"
  );

serenade
  .language("javascript")
  .snippet(
    "add component",
    "const <%cursor%> = () => {<%newline%><%indent%><%newline%>}",
    "inline"
  );

serenade
  .language("javascript")
  .snippet(
    "add component <%name%>",
    "const <%name%> = () => {<%newline%><%indent%><%cursor%><%newline%>}",
    { name: ["pascal"] },
    "inline"
  );

serenade
  .language("javascript")
  .snippet(
    "add map",
    "{<%cursor%>.map((item, i) => {<%newline%><%indent%><%newline%>})}"
  );

serenade
  .language("javascript")
  .snippet(
    "add map <%text%>",
    "{<%text%>.map((item, i) => {<%newline%><%indent%><%cursor%><%newline%>})}"
  );

serenade.language("javascript").snippet("add use id", "const id = useId()");
serenade
  .language("javascript")
  .snippet("add use state", "const [<%cursor%>] = useState(null);");

serenade.language("javascript").snippet(
  "add use reducer",
  `function reducer(state, action) {
<%indent%>switch (action.type) {
<%indent%><%indent%>case 'case1': {
<%indent%><%indent%><%indent%>return {};
<%indent%><%indent%>}
<%indent%>}
<%indent%>throw Error('Unknown action: ' + action.type);
}
const [state, dispatch] = useReducer(reducer, <%cursor%>initialState);`
);

serenade
  .language("javascript")
  .snippet("add state", "const [<%cursor%>] = useState(null);");

serenade
  .language("javascript")
  .snippet(
    "add state <%getter%> set <%setter%>",
    "const [<%getter%>, set<%setter%>] = useState(null);",
    { getter: ["identifier", "camel"], setter: ["identifier", "pascal"] }
  );

serenade
  .language("javascript")
  .snippet(
    "add use effect",
    "useEffect(() => {<%newline%><%indent%><%cursor%><%newline%>}, [])"
  );

serenade
  .language("javascript")
  .snippet(
    "add use memo",
    "const memoizedValue = useMemo(() => <%cursor%>, [])"
  );

serenade
  .language("javascript")
  .snippet("add use callback", "const cached = useCallback(<%cursor%>, [])");

serenade
  .language("javascript")
  .snippet("add use ref", "const <%cursor%> = useRef(null);");
