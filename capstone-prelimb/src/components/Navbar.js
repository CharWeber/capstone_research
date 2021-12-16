import React from "react";

import { useSigninCheck, useUser } from "reactfire";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import Stack from "@mui/material/Stack";

export default function Navbar() {
  let userInfo = null;
  let user = useUser();
  const { status, data: signInCheckResult } = useSigninCheck();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (signInCheckResult.signedIn === true) {
    userInfo = (
      <div>
        <Button href="/facility">facilities</Button>
        <IconButton href="/user" aria-label="fingerprint" color="secondary">
          <Fingerprint />
        </IconButton>
        <span style={{ paddingTop: "10px" }}>{user.data?.email}</span>
      </div>
    );
  } else {
    userInfo = (
      <div>
        <IconButton href="/user" aria-label="fingerprint" color="secondary">
          <Fingerprint />
        </IconButton>
      </div>
    );
  }

  return (
    <Stack direction="row" spacing={2}>
      <Button href="/">Home</Button>

      {userInfo}
    </Stack>
  );
}
