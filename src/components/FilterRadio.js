import { useState } from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const FilterRadio = () => {
  const [value, setValue] = useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Collection</FormLabel>
      <RadioGroup
        aria-label="collection"
        name="collection"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="modern" control={<Radio />} label="Modern" />
        <FormControlLabel value="classic" control={<Radio />} label="Classic" />
      </RadioGroup>
    </FormControl>
  );
};

export default FilterRadio;
