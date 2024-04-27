import React from "react";
import { Page, Grid, Center, Icon } from "zmp-ui";

const Calendar: React.FC = () => {
  return (
    <Page className='grid_Calendar'>
      <Center gutters='1rem'>
        <Grid columnCount={3} className='grid_Calendar' style={{ gridTemplateColumns: "10px 200px 10px" }}>
          {/* Thêm nội dung vào các ô của lưới */}
          <button>
            <Icon icon="zi-arrow-left" />
          </button>
          <div>Tháng 1</div>
          <button>
            <Icon icon="zi-arrow-right" />
          </button>
        </Grid>
      </Center>
    </Page>
  );
}

export default Calendar;
