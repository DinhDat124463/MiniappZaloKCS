import React, { useState } from "react";
import { Page, Grid, Center, Icon } from "zmp-ui";

const Calendar: React.FC = () => {
  return (
    <Page>
      <Center gutters='1rem'>
        <Grid columnCount={3} className='grid_Calendar' style={{ gridTemplateColumns: "50px 190px 60px" }}>
          {/* Nút để giảm tháng */}
          <button >
            <Icon icon="zi-arrow-left" />
          </button>
          {/* Hiển thị tháng hiện tại */}
          <div>Tháng 1</div>
          {/* Nút để tăng tháng */}
          <button >
            <Icon icon="zi-arrow-right" />
          </button>
        </Grid>
      </Center>
    </Page>
  );
}

export default Calendar;
