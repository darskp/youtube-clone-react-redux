import { useState } from "react";
import { tabItems } from "../../data/app.data";
import { Tabs, Tab, Box } from "@mui/material";

const Tablist = () => {
    let [value, setValue] = useState(0)

    let handleChange = (e, newvalue) => {
        setValue(newvalue)
    }
    return (<>
        <Box>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonMobile
                aria-label="Scrollable tabs"
            >
                {tabItems.map((tab) => {
                    return <Tab key={tab.id} label={tab.text} />;
                })}
            </Tabs>

        </Box>

    </>);
}

export default Tablist;