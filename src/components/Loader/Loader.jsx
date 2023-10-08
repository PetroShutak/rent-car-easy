import { Puff } from "react-loader-spinner";
import { Wrap } from "./Loader.styled";

export const Loader = () => {
  return (
    <Wrap>
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#0B44CD"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Wrap>
  );
};

export default Loader;
