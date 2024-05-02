import React from "react";
import { Page, Grid, Button, Center } from "zmp-ui";

export default function HomePage() {
  return (
    <Page className='section-container'>
      <Center gutters='1rem'>
        <Grid columnCount={7}>
          <div
            style={{
              border: "solid 2px",
              width: "20px",
              height: "20px"
            }}
          />

        </Grid>
      </Center>
    </Page>
  );
}
