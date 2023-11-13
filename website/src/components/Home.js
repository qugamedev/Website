import React from "react";

function Member({ name, position }) {
  return (
    <div className='member'>
      <div className='image-container'>{/* future img */}</div>
      <h3>{name}</h3>
      <p>{position}</p>
    </div>
  );
}

function Home() {
  return (
    <div>
      {/* Intro */}
      <section>
        <h1>Queen's Game Devlopment Club</h1>
        <p>Queen’s Game Development Club is dedicated to enriching students’ experience in all areas of game development</p>
      </section>

      {/* leadership section */}
      <section>
        <h2>Leadership</h2>
        <div>
          <Member name='Noah Cabral' position='Co-Chair' />
          <Member name='Jaysall Bedi' position='Co-Chair' />
          <Member name='...' position='...' />
          <Member name='...' position='...' />
          <Member name='...' position='...' />
          <Member name='...' position='...' />
          <Member name='...' position='...' />
          <Member name='...' position='...' />
          <Member name='...' position='...' />
          <Member name='...' position='...' />
        </div>
      </section>

      {/* Community section*/}
      <section>
        <h6>Come Join Our Community</h6>
        <img />
        <h6>on Discord</h6>
      </section>
    </div>
  );
}

export default Home;
