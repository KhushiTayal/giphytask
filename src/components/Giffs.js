import React from 'react';

export default function componentName(props) {


  let giffs = props.giffs.map((giff, i )=> {
    return (
              <div 
                className="col"
                key={i}>
                <div 
                  className="card" style={{width: "18rem"}}
                  onClick={()=> props.click(giff.title)}>
                  <img className="card-img-top" 
                  src={giff.image_url} alt="samp" />
                  <div className="card-body">
                    <p className="card-text">{giff.title}</p>
                  </div>
                </div>
              </div>
    )
  })

  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <div class="container text-center">
    <div className="row">
      {giffs}
      <button type="button" class="btn btn-secondary btn-sm" onClick={refreshPage}>Back</button>
    </div>
    </div>
  );
}

