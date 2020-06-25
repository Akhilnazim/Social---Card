import React from 'react'
import img from '../assets/a.jpg'
import CardHeading from './CardHeading'
import CardContent from './CardContent'

function Card({data}) {
    return (
        <div className="container-fluid d-flex justify-content-center card-main">
            <div className="row justify-content-center">
                <div class="col--20 col-lg-20">
                    <div class="card news-card">
                        <CardHeading profPic={data.profPic} time={data.time} profName={data.profName}/>
                        <img class="card-img-top" src={require('../assets/'+ data.content)} alt="Card cap"></img>
                        <CardContent description={data.description} likes={data.likes} comments={data.comments}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
