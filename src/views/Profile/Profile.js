import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import avatar from "assets/img/user.jpg";

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
  const { profile, status, changeStatus, authId, changePhoto } = props;
  const [avatarLoading, setAvatarLoading] = useState(false);
  const ref = React.createRef();
  const classes = useStyles();

  if (!profile) return <Preloader/>

  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={9}>
          <Card>
            <CardAvatar profile>
              {avatarLoading
                ? <div style={{width: '130px', height: '130px', display: 'flex', alignItems: 'center'}}>
                    <Preloader/>
                  </div>
                : <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img 
                      src={profile.photos.large ? profile.photos.large : avatar} 
                      alt="..." 
                      onDoubleClick={() => {
                        ref.current.firstChild.click();
                        setAvatarLoading(true);
                      }}
                    />
                  </a>}
            </CardAvatar>
            <CardBody profile>

              <div style={{display: 'none'}}>
                <CustomInput
                  inputProps={{
                    type: "file",
                    ref: ref,
                    onChange: async (e) => {
                      let file = e.target.files[0];
                      if (file) {
                        await changePhoto(file);
                        setAvatarLoading(false);
                      } else {
                        setAvatarLoading(false);
                      }
                    }
                  }}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </div>

              <h4 className={classes.textCenter}>{profile.fullName}</h4>

              {profile.userId === authId
                ? <Status 
                    status={status}
                    styles={classes.textCenter}
                    changeStatus={changeStatus}
                  />
                : <h6 className={classes.textCenter}>{status || 'No status'}</h6>}
              
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