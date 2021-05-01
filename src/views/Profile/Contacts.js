import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import Tooltip from "@material-ui/core/Tooltip";

import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkIcon from '@material-ui/icons/Link';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WebIcon from '@material-ui/icons/Web';


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


const Contacts = ({ contacts }) => {
  const classes = useStyles();
  return (
    <div className={classes.contactsContainer}>
      {Object.entries(contacts).map(([name, src]) => {
        const contact = socialContacts[name];
        const Contact = React.forwardRef(function Contact(props, ref) {
          return (
            <div {...props} ref={ref}>
              <Button justIcon round key={name}
                color="white" 
                href={src || contact.src} 
                target="blank"
                className={classes.contact}
              >
                <contact.icon/>
              </Button>
            </div>
          );
        });

        return (
          <Tooltip title={name} arrow key={name}>
            <Contact/>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default Contacts;