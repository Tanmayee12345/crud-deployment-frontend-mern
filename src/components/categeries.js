import React, { useState } from 'react';
import Mypage from './engineering.jpg';
import Mypage1 from './Inter.jpg';
import Mypage2 from './iit.jpg';
import Mypage3 from './neet.jpg';
import Mypage4 from './upsc.jpg';
import Mypage5 from './phil.jpg';
import Mypage6 from './music.jpg';
import Mypage7 from './mystery.jpg';
import Mypage8 from './art.jpg';
import Mypage9 from './travel.jpg';
import Mypage10 from './history.jpg';
import Mypage11 from './economy.jpg'

import DisplayBooks from './DisplayBooks';
import { Link } from 'react-router-dom';

function Category(props) {
  const engineering = 'Engineering';
  const intermediate = 'Intermediate';
  const iit = 'IIT-JEE';
  const neet = 'NEET';
  const ups = 'UPSC';
  const philosophy='Philosophy';
  const music='music';
  const Mystery='Mystery';
  const ArtandPhotography='Art and Photography';
  const travel='Travel';
  const history='History'
  const economy='Economy'
  const [id, setId] = useState(props.id);
  const [searchTerm, setSearchTerm] = useState('');

  const imgStyle = {
    height: '300px', // Set the desired height for the images
    width: '100%', // Set the width to 100% to maintain aspect ratio
  };


  return (
    
    <div className="category-container bg-info">
      <div className="card-container row mx-auto" style={{ display: 'flex', flexDirection:"row" }}>
        {/* First Card */}
        <div className="card col-md-3 col-6 bg-light mx-auto mt-3" style={{ width: '18rem',  display: 'flex', flexDirection: 'column' }}>
          <img src={Mypage} className="card-img-top" alt="not found" style={imgStyle} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Engineering</h5>
            <p className="card-text">
              Engineering: Apply scientific principles to design, build, and innovate. Varied disciplines shape modern infrastructure and technology.
            </p>
            <div className="mt-auto">
              <button className='btn btn-secondary'>
                <Link to={'/displaybooks/' + engineering} className="text-light text-decoration-none">
                  Engineering
                </Link>
              </button>
            </div>
          </div>
        </div>
                           
        {/* Second Card */}
        <div className="card bg-light col-md-3 col-6 mx-auto mt-3" style={{ width: '18rem', display: 'flex', flexDirection: 'column' }}>
          <img src={Mypage1} className="card-img-top" alt="not found" style={imgStyle} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Intermediate</h5>
            <p className="card-text">
              Intermediate education: Transition between school and college. Core subjects, career choices. Academic foundation crucial for success.
            </p>
            <div className="mt-auto">
              <button className='btn btn-secondary'>
                <Link to={'/displaybooks/' + intermediate} className="text-light text-decoration-none">
                  Intermediate
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="card bg-light col-md-3 col-6 mx-auto mt-3" style={{ width: '18rem', display: 'flex', flexDirection: 'column' }}>
          <img src={Mypage2} className="card-img-top" alt="not found" style={imgStyle} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">IIT-JEE</h5>
            <p className="card-text">
              Top engineering entrance exam. Rigorous preparation and practice are crucial Premier engineering entrance exam in India for undergraduate programs.
            </p>
            <div className="mt-auto">
              <button className='btn btn-secondary'>
                <Link to={'/displaybooks/' + iit} className="text-light text-decoration-none">
                  IIT-JEE
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Fourth Card */}
        <div className="card bg-light col-md-3 col-6 mx-auto  mt-3" style={{ width: '18rem',  display: 'flex', flexDirection: 'column' }}>
          <img src={Mypage3} className="card-img-top" alt="not found" style={imgStyle} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">NEET</h5>
            <p className="card-text">
              Medical entrance exam in India. Focus on NCERT, biology, chemistry, and physics for success.
            </p>
            <div className="mt-auto">
              <button className='btn btn-secondary'>
                <Link to={'/displaybooks/' + neet} className="text-light text-decoration-none">
                  NEET
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Fifth Card */}
        <div className="card bg-light col-md-3 col-6 mx-auto  mt-3" style={{ width: '18rem',marginRight: '10px', display: 'flex', flexDirection: 'column' }}>
          <img src={Mypage4} className="card-img-top" alt="not found" style={imgStyle} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">UPSC</h5>
            <p className="card-text">
              UPSC exam essentials are Laxmikanth's "Indian Polity," Chandra's "Independence," NCERTs, newspapers, and MHE manuals for GS and aptitude.
            </p>
            <div className="mt-auto">
              <button className='btn btn-secondary'>
                <Link to={'/displaybooks/' + ups} className="text-light text-decoration-none">
                  UPSC
                </Link>
              </button>
            </div>
          </div>
        </div>
      {/* </div>



      
        {/* First Card */}
        <div className="card bg-light col-md-3 col-6 mx-auto  mt-3" style={{ width: '18rem', marginRight: '10px', display: 'flex', flexDirection: 'column' }}>
          <img src={Mypage5} className="card-img-top" alt="not found" style={imgStyle} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Philosophy</h5>
            <p className="card-text">
            Explore profound ideas and concepts that delve into the nature of existence, knowledge, morality, and the universe, as authors critically analyze and contemplate fundamental aspects of human thought and experience.
            </p>
            <div className="mt-auto">
              <button className='btn btn-secondary'>
                <Link to={'/displaybooks/' + philosophy} className="text-light text-decoration-none">
                  Philosophy
                </Link>
              </button>
            </div>
          </div>
        </div>
                           
        {/* Second Card */}
        <div className="card bg-light col-md-3 col-6 mx-auto  mt-3" style={{ width: '18rem', marginRight: '10px', display: 'flex', flexDirection: 'column' }}>
          <img src={Mypage6} className="card-img-top" alt="not found" style={imgStyle} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Music</h5>
            <p className="card-text">
            Dive into the harmonious world of music literature, where authors explore the rich history, cultural significance, and emotional impact of melodies, rhythms, and the artists who shape the diverse landscape of musical expression.
            </p>
            <div className="mt-auto">
              <button className='btn btn-secondary'>
                <Link to={'/displaybooks/' + music} className="text-light text-decoration-none">
                Music
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="card bg-light col-md-3 col-6 mx-auto  mt-3" style={{ width: '18rem', marginRight: '10px', display: 'flex', flexDirection: 'column' }}>
          <img src={Mypage7} className="card-img-top" alt="not found" style={imgStyle} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Mystery</h5>
            <p className="card-text">
            Immerse yourself in gripping narratives filled with suspense and intrigue that challenge readers to uncover secrets, solve crimes, and navigate through
             twists and turns until the thrilling resolution unfolds.
            </p>
            <div className="mt-auto">
              <button className='btn btn-secondary'>
                <Link to={'/displaybooks/' + Mystery} className="text-light text-decoration-none">
                Mystery
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Fourth Card */}
       
     {/* Fifth Card */}
     <div className="card bg-light col-md-3 col-6 mx-auto  mt-3" style={{ width: '18rem',marginRight: '10px', display: 'flex', flexDirection: 'column' }}>
          <img src={Mypage8} className="card-img-top" alt="not found" style={imgStyle} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Art and Photography</h5>
            <p className="card-text">
            Embark on a visual journey through the lens of art where creativity knows no bounds. Discover the stories behind masterpieces 
           providing insights into the visual language that speaks volumes.
            </p>
            <div className="mt-auto">
              <button className='btn btn-secondary'>
                <Link to={'/displaybooks/' + ArtandPhotography} className="text-light text-decoration-none">
                  ArtandPhotography
                </Link>
              </button>
            </div>
          </div>
        </div>
      {/* </div>



      
        {/* First Card */}
        <div className="card bg-light col-md-3 col-6 mx-auto  mt-3" style={{ width: '18rem', marginRight: '10px', display: 'flex', flexDirection: 'column' }}>
          <img src={Mypage9} className="card-img-top" alt="not found" style={imgStyle} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Travel</h5>
            <p className="card-text">
            Experience the world through the pages of travel. Whether it's an adventurous exploration, a culinary tour, or a reflective memoir, 
            travel books offer glimpses into diverse landscapes and the human spirit's quest for discovery.
            </p>
            <div className="mt-auto">
              <button className='btn btn-secondary'>
                <Link to={'/displaybooks/' +travel} className="text-light text-decoration-none">
                  Philosophy
                </Link>
              </button>
            </div>
          </div>
        </div>
                           
        {/* Second Card */}
        <div className="card bg-light col-md-3 col-6 mx-auto  mt-3" style={{ width: '18rem', marginRight: '10px', display: 'flex', flexDirection: 'column' }}>
          <img src={Mypage10} className="card-img-top" alt="not found" style={imgStyle} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">History</h5>
            <p className="card-text">
            
History unfolds as epochs shift, cultures intertwine, wars reshape borders, innovations surge, societies evolve, echoing tales of triumphs, struggles, and shared human narratives across millennia.
            </p>
            <div className="mt-auto">
              <button className='btn btn-secondary'>
                <Link to={'/displaybooks/' + history} className="text-light text-decoration-none">
                History
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="card bg-light col-md-3 col-6 mx-auto  mt-3" style={{ width: '18rem', marginRight: '10px', display: 'flex', flexDirection: 'column' }}>
          <img src={Mypage11} className="card-img-top" alt="not found" style={imgStyle} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Economy</h5>
            <p className="card-text">
           
Economy: intricate web of production, distribution, consumption; influenced by policies, global markets; shapes livelihoods, wealth distribution, societal well-being, and progress.
            </p>
            <div className="mt-auto">
              <button className='btn btn-secondary'>
                <Link to={'/displaybooks/' + economy} className="text-light text-decoration-none">
                Economy
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Fourth Card */}
       
        
      </div>
    
    


</div>

  );
}

export default Category;


