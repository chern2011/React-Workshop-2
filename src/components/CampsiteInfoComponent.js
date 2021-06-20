import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
    renderCampsite(campsite) {
        return (<div className="col-md-5 m-1" />)
            (
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
            )
    }
    render() {
        if (this.props.campsite) {
            return <div className="row">  
            {this.renderCampsite(this.props.campsite)} 
            </div>
        } else {
        return <div />
    }
}
}

//     renderComments(comments) {
//         if(this.props.comments){
//             return ( <div className=”col-md-5 m-1” /> )
//     <h4>Comments</h4>
//     {this.map(comments)}
//     {text}
//     {author, date}
//     {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
//     </div>
//     }
// }
//     Return (<div />)

export default CampsiteInfo;
