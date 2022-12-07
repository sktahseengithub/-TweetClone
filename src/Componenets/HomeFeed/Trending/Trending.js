import './Trending.css';


function Trending (props){

    const data =props.data;

    return(
        <div className="trendingMain">
            <p className="header-small">{data.header}</p>
            <p className="text">{data.text}</p>
            <p className="header-small">{data.tweetCount}</p>
        </div>
    )
}

export default Trending;