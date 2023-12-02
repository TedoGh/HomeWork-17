import { useParams } from "react-router-dom";
import { Data } from "../data";

const FactPage = () => {
  const { factId } = useParams();
  const data = Data.find((item) => item.id === parseInt(factId));

  if (!data) {
    return <h1>Fact not found</h1>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default FactPage;
