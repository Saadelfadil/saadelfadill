import React from "react";
import {AiOutlineMenu} from "react-icons/ai"

const Sidenave = () => {
    const [nav, setNav] = useState(1)

    const handleNav = () => {
        setNav((prev) => prev = !nav);
    };

  return (
    <div>
        <AiOutlineMenu onClick={handleNav} className=""/>
    </div>
  )
};

export default Sidenave;
