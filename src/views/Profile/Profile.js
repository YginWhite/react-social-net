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
import SettingsIcon from '@material-ui/icons/Settings';

import Snackbar from "components/Snackbar/Snackbar.js";
import AddAlert from "@material-ui/icons/AddAlert";

import Preloader from '../../custom/Preloader/Preloader';
import Status from './Status/Container';

import Contacts from './Contacts/Contacts';
import Avatar from './Avatar/Container';

import ProfileForm from './ProfileForm/Container';
import { styles } from './styles';


const useStyles = makeStyles(styles);

export default function Profile(props) {
  const { profile, authId, serverErrors } = props;
  const [editMode, setEditMode] = useState(false);
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();

  const isOwner = profile && profile.userId === authId;
  const onEditModeChanged = () => setEditMode(!editMode);


  if (!profile) return <Preloader/>

  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={9}>
          <Card>
            <CardAvatar profile>
              <Avatar isEditable={isOwner}/>
            </CardAvatar>
            <CardBody profile>
              <h4 className={classes.textCenter}>{profile.fullName}</h4>

              <Status isEditable={isOwner}/>

              {editMode
                ? <ProfileForm toggleEditMode={onEditModeChanged}/>
                : <div>
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
                  </div>}
            
            </CardBody>

            {isOwner && 
              <div
                className={classes.settingsBnt}
                onClick={onEditModeChanged}
              >
                <SettingsIcon/>
              </div>}
          </Card>
        </GridItem>
      </GridContainer>

      {serverErrors && 
        <Snackbar
          place="tr"
          color="danger"
          icon={AddAlert}
          message={serverErrors.join(', ')}
          open={open}
          closeNotification={() => setOpen(false)}
          close
        />}
    </div>
  );
}