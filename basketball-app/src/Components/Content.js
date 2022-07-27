import React from 'react';

function Content(){
    const [active, setActive] = useState(true);
    return(
        <div className='content'>
          <div className="tabs">
        <div className="tab-leagues" onClick={() => setActive(true)}>
          <h2 style={{ color: active ? "#c20114" : null }}>Leagues</h2>
        </div>
        <div className="tab-standings" onClick={() => setActive(false)}>
          <h2 style={{ color: !active ? "#c20114" : null }}>Standings</h2>
        </div>
      </div>

      {active ? <Leagues /> : <Standings />}
    </div>
    )
}
export default Content;