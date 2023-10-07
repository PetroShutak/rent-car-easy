import { getAdverts } from "../../utils/api";
import { useEffect, useState } from "react";

const CardItem = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAdverts()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          listStyle: "none",
        }}
      >
        {data.map((item) => (
          <li key={item.id}>
            <img src={item.img} alt={item.model} width="300" height="300" />
            <p>{item.model}</p>
            <p>{item.year}</p>
            <p>{item.price}</p>
            <p>{item.rentalCompany}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardItem;
