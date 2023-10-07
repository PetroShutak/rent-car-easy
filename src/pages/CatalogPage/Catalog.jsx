import { Helmet } from "react-helmet";
import CardItem from "../../components/CardItem/CardItem";

const Catalog = () => {
  return (
    <div>
      <Helmet>
        <title>Catalog</title>
      </Helmet>
      <h1>Catalog</h1>
      <CardItem />
    </div>
  );
};
export default Catalog;
