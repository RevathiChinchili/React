import { Component } from "react";

class MovieInfo extends Component{
    render(){
        const {movieData}= this.props
        return (
            <div className="cardContainer">
                {movieData &&movieData.map&&movieData.map((user)=>{
                    return (
                        <div className="cardContent"> 
                            
                            <img src={user.Poster}></img>
                            <p>{user.Title} </p>
                            
                        </div>
                    )
                })}
                
            </div>
        )
    }
}
export default MovieInfo;