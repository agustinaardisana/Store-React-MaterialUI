import { useEffect, useState } from "react";

import FilterSlider from "./FilterSlider.js";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Filters = ({
  filterCollection,
  filterColor,
  filterCategory,
  resetFilters,
  filterPriceRange,
  setSearchValue,
}) => {
  const classes = useStyles();

  const [valueOpenAccordion, setValueAccordion] = useState(false);
  const [value, setValue] = useState("");

  const handleChangeAccordion = () => {
    setValueAccordion(!valueOpenAccordion);
    resetFilters();
  };

  useEffect(() => {
    !valueOpenAccordion && resetFilters();
    console.log(valueOpenAccordion);
  }, [valueOpenAccordion]);

  const handleChangeCollection = (e) => {
    setValue(e.target.value);
    filterCollection(e.target.value);
  };

  const handleChangeColor = (e) => {
    setValue(e.target.value);
    filterColor(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setValue(e.target.value);
    filterCategory(e.target.value);
  };

  return (
    <div className={classes.root}>
      <p>FILTER BY</p>
      <Accordion value={valueOpenAccordion} onChange={handleChangeAccordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Collection</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset">
            <FormLabel component="legend">Collection</FormLabel>
            <RadioGroup
              aria-label="collection"
              name="collection"
              value={value}
              onChange={handleChangeCollection}
            >
              <FormControlLabel
                value="modern"
                control={<Radio />}
                label="Modern"
              />
              <FormControlLabel
                value="classic"
                control={<Radio />}
                label="Classic"
              />
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion value={valueOpenAccordion} onChange={handleChangeAccordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Color</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset">
            <FormLabel component="legend">Color</FormLabel>
            <RadioGroup
              aria-label="color"
              name="color"
              value={value}
              onChange={handleChangeColor}
            >
              <FormControlLabel value="wood" control={<Radio />} label="Wood" />
              <FormControlLabel value="gray" control={<Radio />} label="Gray" />
              <FormControlLabel
                value="orange"
                control={<Radio />}
                label="Orange"
              />
              <FormControlLabel
                value="white"
                control={<Radio />}
                label="White"
              />
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion value={valueOpenAccordion} onChange={handleChangeAccordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset">
            <FormLabel component="legend">Category</FormLabel>
            <RadioGroup
              aria-label="category"
              name="category"
              value={value}
              onChange={handleChangeCategory}
            >
              <FormControlLabel
                value="auxiliars"
                control={<Radio />}
                label="Auxiliars"
              />
              <FormControlLabel
                value="furniture"
                control={<Radio />}
                label="Furniture"
              />
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion value={valueOpenAccordion} onChange={handleChangeAccordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Price Range</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FilterSlider filterPriceRange={filterPriceRange} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Filters;
