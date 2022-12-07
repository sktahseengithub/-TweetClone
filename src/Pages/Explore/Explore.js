import './Explore.css';
import ExploreOption from '../../Componenets/ExploreOption/ExploreOption';
import ExploreLoginOption from '../../Componenets/ExploreLoginOption/ExploreLoginOption'
import Feed from '../../Componenets/HomeFeed/Feed/Feed';



function Explore(){
    return(

        <div className='homeContainer'>
             
            <div className="leftContainer">
                <ExploreOption />
            </div>
             <div className='centerContainer'>
                <Feed />
                </div>  
            
            <div className="rightContainer">
                <ExploreLoginOption />
            </div>
             </div>
    )
}

export default Explore;