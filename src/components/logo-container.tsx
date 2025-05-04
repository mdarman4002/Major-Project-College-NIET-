import { Link } from "react-router-dom"

export const LogoContainer = () => {
  return (
    <Link to = {"/"}>
        <img 
        //src = "assets/svg/logo.svg"
       // src = "/assets/img/logo_.jpeg"
       src = "/assets/img/_logo.jpg"
        alt = ""
       className="w-13 h-14 object-contain p-1 rounded"
        />
    
    </Link>
  );
};
