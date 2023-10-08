import styled from "@emotion/styled";
import MobileImage from "../../images/backgrounds/hero-mobile.jpg";
import TabletImage from "../../images/backgrounds/hero.jpg";
import DesktopImage from "../../images/backgrounds/hero.jpg";

export const SectionHero = styled.section`
  max-width: 100%;
  height: 400px;
  padding: 60px 20px;

  margin-left: auto;
  margin-right: auto;
  text-align: left;

  background-color: var(--borders-color);
  background-image: var(--grad), url(${MobileImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 480px) {
    max-width: 480px;
    padding: 70px 35px;
    background-image: var(--grad), url(${TabletImage});
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 100px 60px;
    background-image: var(--grad), url(${DesktopImage});
  }

  @media screen and (min-width: 1200px) {
    max-width: 1600px;
    height: 600px;
    padding: 180px 200px;
  }
`;

export const Title = styled.h1`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 15px;
  color: var(--text-button-color);
  font-size: 24px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 38px;
  }
`;

export const Description = styled.p`
  max-width: 450px;
  margin-bottom: 25px;
  color: var(--text-button-color);
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
    width: 270px;
    height: 44px;

    border-radius: 12px;
    background-color: var(--accent-color);
    color: var(--text-button-color);
    font-size: 14px;
    font-weight: 600;
    line-height: 1.43;
    cursor: pointer;
    transition: background-color var(--transition);

    &:hover,
    &:focus {
        background-color: var(--hover-color);
`;
