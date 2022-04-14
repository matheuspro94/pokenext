import Link from "next/link";
import Image from 'next/image';

import NavStyled from '../styles/NavStyled';

export default function Navbar() {
  return (
    <NavStyled>
      <div className="container">
        <div className="logo">
          <Image src='/images/pokeball.png' width="30" height="30" alt="pokeball" />
          <h1>PokéNext</h1>
        </div>
        <ul className="link_items">
          <li>
            <Link href="/"><a>Home</a></Link>
          </li>
          <li>
            <Link href="/about"><a>About</a></Link>
          </li>
        </ul>
      </div>
    </NavStyled>
  )
};
