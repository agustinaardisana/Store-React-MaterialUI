import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}`;
}

const FilterSlider = ({ filterPriceRange }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState([90, 2600]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    filterPriceRange(value);
  };

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={0}
        max={3000}
      />
    </div>
  );
};
export default FilterSlider;
