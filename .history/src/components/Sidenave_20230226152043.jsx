import React from "react";
import {AiOutlineMenu} from "react-icons/ai"

const Sidenave = () => {
    const [nav, setNav] = useState(0)

    const handleNav = () => {
        setNav((prev) => prev = !nav);
    };
  return (
    <div>
        <AiOutlineMenu />
    </div>
  )
};

export default Sidenave;
