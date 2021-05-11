import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import Tooltip from "@material-ui/core/Tooltip";

import socialContacts from './contacts';
import styles from './styles';


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