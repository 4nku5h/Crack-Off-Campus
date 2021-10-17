import { func } from 'prop-types'
import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
const custom_style = { backgroundColor: "#fafafa"};
function UserProfileComponent(userDetails) {
    return (
        <div className="UserDetails">
            <Card style={{ borderRadius: "10px" }}>
                <Card.Img variant="top" src={userDetails.userProfilePicture} />
                <Card.Body>
                    <Card.Title>{userDetails.userName}</Card.Title>
                    <Card.Text>{userDetails.userTitle}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <div className="flexBox_column_joined">
                        <p>Course </p>
                        <p> {userDetails.userCourseDetails.course}</p>
                    </div>
                    <div className="flexBox_column_joined">
                        <p>Branch </p>
                        <p> {userDetails.userCourseDetails.branch}</p>
                    </div>
                    <div className="flexBox_column_joined">
                        <p>Year </p>
                        <p> {userDetails.userCourseDetails.year}</p>
                    </div>
                    <div className="flexBox_column_joined">
                        <p>Age </p>
                        <p> {userDetails.userAge}</p>
                    </div>
                </ListGroup>
            </Card>
        </div>
    )
}

export default UserProfileComponent;

//"userId": "1245454",
//"userName": "alpha",
//"userAge": "22",
//"userTitle": "Full Stack Developer | Android Developer",
//"userCourseDetails":{"course":"B.tech","branch":"CSE","year":"3"}, 
//"userProfilePicture": "https://avatars.githubusercontent.com/u/33266550?v=4"