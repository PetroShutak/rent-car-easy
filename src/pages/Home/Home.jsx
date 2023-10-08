import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button, Description, SectionHero, Title } from "./Home.styled";

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/catalog");
  };

  return (
    <main>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <SectionHero>
        <Title>Where Your Journey Begins ?</Title>
        <Description>
          We will be happy to provide you with a car for rent in Ukraine!
        </Description>
        <Button onClick={handleStart}>Get started</Button>
      </SectionHero>
    </main>
  );
};

export default Home;
