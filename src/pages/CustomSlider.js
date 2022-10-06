import React from "react";
import Slider from '@material-ui/core/Slider';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const muiTheme = createTheme({
  overrides:{
    MuiSlider: {
        root: {
            color: "#49446B",
            height: 8
        },
        thumb:{
            width: "24px",
            height: "24px",
            color: "#49446B",
            border: "4px solid currentColor",
            marginTop: -8,
            marginLeft: -10,
            "&:focus,&:hover,&$active": {
            boxShadow: "inherit"
            }
        },
        active: {},
        track: {
            height: 6,
            color: "gray"
        },
        rail: {
            height: 6,
            color: "gray",
            borderRadius: 10
        },
        marks: {
            scaledValue: 1000
        },
        valueLabel: {
            margin: "0 12px",
            fontSize: "24px",
        },
    }
}
});

function valuetext(value) {
    return `${value}월`;
}

const monthlyMarks = [
    { value: 0, year: "2020", month: "06", label: "6월" },
    { value: 1, year: "2020", month: "07", label: "7월" },
    { value: 2, year: "2020", month: "08", label: "8월" },
    { value: 3, year: "2020", month: "09", label: "9월" },
    { value: 4, year: "2020", month: "10", label: "10월" },
    { value: 5, year: "2020", month: "11", label: "11월" },
    { value: 6, year: "2020", month: "12", label: "12월" },
    { value: 7, year: "2021", month: "01", label: "1월" },
    { value: 8, year: "2021", month: "02", label: "2월" },
    { value: 9, year: "2021", month: "03", label: "3월" },
    { value: 10, year: "2021", month: "04", label: "4월" },
    { value: 11, year: "2021", month: "05", label: "5월" },
    { value: 12, year: "2021", month: "06", label: "6월" },
    { value: 13, year: "2021", month: "07", label: "7월" },
    { value: 14, year: "2021", month: "08", label: "8월" },
    { value: 15, year: "2021", month: "09", label: "9월" },
    { value: 16, year: "2021", month: "10", label: "10월" },
    { value: 17, year: "2021", month: "11", label: "11월" },
    { value: 18, year: "2021", month: "12", label: "12월" },
    { value: 19, year: "2022", month: "01", label: "1월" },
    { value: 20, year: "2022", month: "02", label: "2월" },
    { value: 21, year: "2022", month: "03", label: "3월" },
    { value: 22, year: "2022", month: "04", label: "4월" },
    { value: 23, year: "2022", month: "05", label: "5월" },
    { value: 24, year: "2022", month: "06", label: "6월" },
    { value: 25, year: "2022", month: "07", label: "7월" },
    { value: 26, year: "2022", month: "08", label: "8월" },
    { value: 27, year: "2022", month: "09", label: "9월" },
];

const monthMarks = [
    { value: 1, month: "01", label: "1월" },
    { value: 2, month: "02", label: "2월" },
    { value: 3, month: "03", label: "3월" },
    { value: 4, month: "04", label: "4월" },
    { value: 5, month: "05", label: "5월" },
    { value: 6, month: "06", label: "6월" },
    { value: 7, month: "07", label: "7월" },
    { value: 8, month: "08", label: "8월" },
    { value: 9, month: "09", label: "9월" },
    { value: 10, month: "10", label: "10월" },
    { value: 11, month: "11", label: "11월" },
    { value: 12, month: "12", label: "12월" },
]


const CustomSlider = ( props ) => {

    const handleChange = (event, newValue) => {
        props.parentSetValue(newValue);
    }

    return (
        <ThemeProvider theme={muiTheme}>
        <Slider 
            aria-label="date"
            style={{ width: "900px", marginTop: "40px", fontSize: "30px" }}
            defaultValue={8}
            valueLabelDisplay="off"
            onChange={handleChange}
            step={1}
            marks={monthMarks}
            min={1}
            max={12}
            color="primary"
        />
        </ThemeProvider>
    );
}


export default CustomSlider;