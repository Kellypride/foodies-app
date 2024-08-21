import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="header">
        <div className="slideShow"></div>
        <div>
          <div className="herror">
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world</p>
          </div>
          <div className="cta">
            <Link href="/community">Join the community</Link>
            <Link href="/meals">Explore meals</Link>
          </div>
        </div>
      </header>
      <main></main>
    </div>
  );
}
