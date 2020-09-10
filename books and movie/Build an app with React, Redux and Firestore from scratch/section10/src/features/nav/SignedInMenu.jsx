import React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "../auth/authAction";

export default function SignedInMenu() {
  const history = useHistory();
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <Menu.Item position='right'>
      <Image
        avatar
        spaced='right'
        src={currentUser.photoURL || "/assets/user.png"}
      />
      <Dropdown pointing='top right' text={currentUser.email}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to='/createEvent'
            text='Create Event'
            icon='plus'
          />
          <Dropdown.Item text='My profile' icon='user' />
          <Dropdown.Item
            onClick={() => {
              dispatch(signOutUser());
              history.push("/");
            }}
            text='Sign out'
            icon='power'
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
