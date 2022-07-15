import { useSelector } from "react-redux";

import "./App.scss";

const App: React.FC = () => {
    const state = useSelector((state) => state);

    console.log(state);
    return <div></div>;
};

export default App;
