import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkIcon from '@material-ui/icons/Link';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WebIcon from '@material-ui/icons/Web';

import avatar from "assets/img/faces/marc.jpg";



const status = 'football is all and forevar!';
const profile = {
	aboutMe: `Don't be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...`,
	contacts: { facebook:null, github:null, instagram:null, mainLink:null,
							twitter:null, vk:null, website:null, youtube:null },
	fullName: 'Barbarik',
	lookingForAJob: true,
	lookingForAJobDescription: 'good job',
	photos: { small:null, large:null },
	userId: 5854
};


const socialContacts = {
	facebook: { icon: FacebookIcon, src: `https://facebook.com` },
	github: { icon: GitHubIcon, src: `https://github.com` },
	instagram: { icon: InstagramIcon, src: `https://instagram.com` },
	mainLink: { icon: LinkIcon, src: `https://google.com` },
	twitter: { icon: TwitterIcon, src: `https://twitter.com` }, 
	vk: { icon: WebIcon, src: `https://vk.com` }, 
	website: { icon: WebIcon, src: `https://google.com` }, 
	youtube: { icon: YouTubeIcon, src: `https://youtube.com` }
};


const styles = {
  textCenter: {
  	textAlign: 'center'
  },
  label: {
  	color: 'gray',
  	display: 'inline-block',
  	marginRight: '5px'
  },
  contactsContainer: {
  	width: '100%',
  	display: 'flex',
  	justifyContent: 'space-between'
  },
  contact: {
  	color: 'gray',
  	backgroundColor: '#f2f3f4',
  	marginRight: '5px'
  }
};


const useStyles = makeStyles(styles);

const Contacts = () => {
	const classes = useStyles();
	return (
		<div className={classes.contactsContainer}>
			{Object.entries(socialContacts).map(([name, info]) => {
				return (
					<Button justIcon round key={name}
						color="white" 
						href={info.src} 
						target="blank"
						className={classes.contact}
					>
						<info.icon/>
					</Button>
				);
			})}
		</div>
	);
}

export default function Profile() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer justify="center">
      
        <GridItem xs={12} sm={12} md={9}>
          <Card >
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h4 className={classes.textCenter}>{profile.fullName}</h4>
              <h6 className={classes.textCenter}>{status}</h6>

              <p>
                <span className={classes.label}>About:</span>
                <span>{profile.aboutMe}</span>
              </p>
              <p>
                <span className={classes.label}>Lookink for a job:</span>
                <span>{profile.lookingForAJob ? 'yes': 'no'}</span>
              </p>
              <p>
                <span className={classes.label}>Lookink for a job description:</span>
                <span>{profile.lookingForAJobDescription}</span>
              </p>

              <CardFooter chart>
              	<Contacts/>
              </CardFooter>
            </CardBody>
          </Card>
        </GridItem>

      </GridContainer>
    </div>
  );
}
