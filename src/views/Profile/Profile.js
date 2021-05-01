import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";

import Preloader from '../../custom/Preloader/Preloader';
import Status from './Status';
import Contacts from './Contacts';


const styles = {
  textCenter: {
  	textAlign: 'center'
  },
  label: {
  	color: 'gray',
  	display: 'inline-block',
  	marginRight: '5px'
  }
};


const useStyles = makeStyles(styles);


export default function Profile(props) {
  const { profile, status, changeStatus } = props;
  const classes = useStyles();

  if (!profile) return <Preloader/> 

  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={9}>
          <Card >
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={profile.photos.large ? profile.photos.large : avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h4 className={classes.textCenter}>{profile.fullName}</h4>
              <Status 
                status={status}
                styles={classes.textCenter}
                changeStatus={changeStatus}
              />

              <p>
                <span className={classes.label}>About:</span>
                <span>{profile.aboutMe || 'No information'}</span>
              </p>
              <p>
                <span className={classes.label}>Lookink for a job:</span>
                <span>{profile.lookingForAJob ? 'yes': 'no'}</span>
              </p>
              <p>
                <span className={classes.label}>Lookink for a job description:</span>
                <span>{profile.lookingForAJobDescription || 'No description'}</span>
              </p>

              <CardFooter chart>
              	<Contacts contacts={profile.contacts}/>
              </CardFooter>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}