import './Profile.css';
import ProfileOption from '../../Componenets/ProfileOption/ProfileOption'; 
import ProfileWidgets from '../../Componenets/ProfileWidgets/ProfileWidgets';
import ProfileMain from '../../Componenets/ProfileMain/ProfileMain';





function Profile(){
    return(

        <div className='homeContainer'>
             
            <div className="leftContainer">
                <ProfileOption />
            </div>
            <div className="centerContainer">
                <ProfileMain />
                </div>
            
            <div className="rightContainer">
                <ProfileWidgets />
            </div>
             </div>
    )
}

export default Profile;