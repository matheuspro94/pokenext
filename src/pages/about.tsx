import Image from "next/image";
import AboutStyled from '../styles/AboutStyled';

export default function About() {
  return (
    <AboutStyled>
      <h1>Sobre o projeto</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis temporibus dolor obcaecati ducimus at facilis, sunt vel sit possimus aspernatur doloremque. Quos nihil modi ducimus illo ipsum alias nulla quibusdam.</p>
      <Image src="/images/charizard.png" width="300" height="300" alt="charizard" />
    </AboutStyled>
  )
}
