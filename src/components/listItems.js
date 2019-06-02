import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PrivacyIcon from '@material-ui/icons/VerifiedUser';
import AcountIcon from '@material-ui/icons/AccountCircle';
import PasswordIcon from '@material-ui/icons/VpnKey';
import LogoutIcon from '@material-ui/icons/AllOut';
import ContactIcon from '@material-ui/icons/ContactMail';
import TermsIcon from '@material-ui/icons/ListAlt';

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <AcountIcon />
            </ListItemIcon>
            <ListItemText primary="Account Information" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PasswordIcon />
            </ListItemIcon>
            <ListItemText primary="Change Password" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <PrivacyIcon />
            </ListItemIcon>
            <ListItemText primary="Privacy Policy" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <TermsIcon />
            </ListItemIcon>
            <ListItemText primary="Terms and Conditions" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ContactIcon />
            </ListItemIcon>
            <ListItemText primary="Contact Us" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItem>
    </div>
);