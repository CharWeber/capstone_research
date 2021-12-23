import React from "react";
import { useSigninCheck, useUser } from "reactfire";
import Fingerprint from "@mui/icons-material/Fingerprint";
import HomeIcon from '@mui/icons-material/Home';
import {Stack, IconButton, Tooltip, Button, CircularProgress} from '@mui/material'

export default function Navbar() {
  let userInfo = null;
  let user = useUser();
  const { status, data: signInCheckResult } = useSigninCheck();

  if (status === "loading") {
    return <CircularProgress color='secondary' />
  }

  if (signInCheckResult.signedIn === true) {
    userInfo = (
      <div>
        <Button href="/facility">facilities</Button>
        <Tooltip title='user'>
          <IconButton href="/user" aria-label="fingerprint" color="secondary">
            <Fingerprint />
          </IconButton>
        </Tooltip>
        <span style={{ paddingTop: "10px" }}>{user.data?.email}</span>
      </div>
    );
  } else {
    userInfo = (
      <div>
        <Tooltip title='user'>
          <IconButton href="/user" aria-label="fingerprint" color="secondary">
            <Fingerprint />
          </IconButton>
        </Tooltip>
        <span style={{ paddingTop: "10px" }}>Log in</span>
      </div>
    );
  }

  return (
    <div>
      <Stack direction="row" spacing={2} style={{borderColor: '994B68', borderStyle: 'solid', backgroundColor: '#E0C9D1', marginTop: '3vh'}}>
        <IconButton href="/"><HomeIcon /></IconButton>
        <Button href="/athletics">Athletics</Button>
        <Button href="/crafts">Crafts</Button>
        <Button href="/theatre">Theatre</Button>
        {userInfo}
      </Stack>
    </div>
  );
}
