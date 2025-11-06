import data from "../utils/constants";
import "./Formula1.css";

function Formula1({ selectedPhoto }) {
  const formula1 = data.find((item) => {
    return item.name == selectedPhoto;
  });
  return (
    <img className="formula1-photo" src={formula1.image} alt={formula1.name} />
  );
}

export default Formula1;
