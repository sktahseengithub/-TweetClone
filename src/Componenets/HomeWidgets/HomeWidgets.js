import React from 'react'
import './HomeWidgets.css'


function HomeWidgets() {
  return (
    <div className='cardd'>
      <div className='card2'>
        <div className='searchHeader'>

          <div className="search-box-search">

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>

            <input className='hold-search-hold' type="search" placeholder='Search Twitter'></input>
          </div>
        </div>


        <div className="card">

          <div className="card-body">
            <h4 className="card-title fw-bold">What's happening</h4>
          </div>

          <div className='align-card1'>
            < div className='trend-side-widgets'>
              <div className='trend1'>Technology . Trending</div>
              <h5 className='td1' >#WhatsApp</h5>
              <h6 className='fd6'> 6,449 Tweets</h6>

              <div className='trend2'>Trending in Cricket</div>
              <h5 className='td2'>#MSDhoni</h5>
              <h6 className='fd5'> 6,45 Tweets</h6>

              <div className='trend3'>Chennai Super Kings . Trending</div>
              <h5 className='td3' >#RuturajGaikwad</h5>
              <h6 className='fd4'> 6.3k Tweets</h6>

              <div className='trend4'>Trending in India</div>
              <h5 className='td4' >#ShahRukhKhan</h5>
              <h6 className='fd3'> 200k  Tweets</h6>

              <div className='trend5'>Entertainment . Trending</div>
              <h5 className='td5' >#PushpaTheRise</h5>
              <h6 className='fd2' > 300k Tweets</h6>

              <div className='trend6'>Travel . Trending</div>
              <h5 className='td6'>#NepallsNextSrilanka</h5>
              <h6 className='fd1' > 250k Tweets</h6>
            </div>

            <div className='trend-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </div>


          </div>


        </div>

        {/* <HomeWidgets2 /> */}

      </div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title fw-bold">You might like ?</h4>

          <div className='align-card'>

            <div className='align-img'>
              <img className="profile-imge2"
                src="https://pbs.twimg.com/profile_images/1572269909513478146/dfyw817W_400x400.jpg" />
              <img className="profile-imge2"
                src="https://pbs.twimg.com/profile_images/1594950553037115393/oMJoolav_400x400.jpg" />
              <img className="profile-imge2"
                src="https://pbs.twimg.com/profile_images/1408089447455891461/hwvI8tM1_400x400.jpg" />

            </div>


            <div className='wid-name'>
              <div className='name-auth1'>CZ🔶Binance
                <svg fill="cornflowerblue" width="25px" height="25px" viewBox="0 0 24 24" aria-label="Verified account" role="img"
                  class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-1xvli5t r-9cviqr r-f9ja8p r-og9te1 r-bnwqim r-1plcrui r-lrvibr"><g>
                    <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91
             -2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2
              3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68
              -.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8
               12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z">
                    </path></g></svg></div>
              <h2 className='email1'>@cz_binance</h2>



              <div className='name-auth2'>Google Developers
                <svg fill="cornflowerblue" width="25px" height="25px" viewBox="0 0 24 24" aria-label="Verified account" role="img"
                  class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-1xvli5t r-9cviqr r-f9ja8p r-og9te1 r-bnwqim r-1plcrui r-lrvibr"><g>
                    <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91
             -2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2
              3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68
              -.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8
               12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z">
                    </path></g></svg></div><h2 className='email2'>@googledevs</h2>




              <div className='name-auth3'> Windows
                <svg fill="cornflowerblue" width="25px" height="25px" viewBox="0 0 24 24" aria-label="Verified account" role="img"
                  class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-1xvli5t r-9cviqr r-f9ja8p r-og9te1 r-bnwqim r-1plcrui r-lrvibr"><g>
                    <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91
             -2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2
              3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68
              -.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8
               12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z">
                    </path></g></svg></div><h2 className='email3'>@Windows</h2>

            </div>

            <div className='align-btn'>
              <button className='follow-btn fw-bold'>Follow</button>
              <button className='follow-btn fw-bold'>Follow</button>
              <button className='follow-btn fw-bold'>Follow</button>
            </div>
          </div>

        </div>


      </div>

    </div >
  )
}

export default HomeWidgets
