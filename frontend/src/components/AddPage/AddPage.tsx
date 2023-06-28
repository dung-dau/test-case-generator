import { Box, Button, FormControl, MenuItem, Select } from "@mui/material";
import React, { FormEvent, useState } from "react";

const AddPage: React.FC = () => {
    const [type, setType] = useState('');
    const [email, setEmail] = useState('');
  
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(type);
      // Handle form submission logic or data processing here
    };

    return (
        <Box mt={5}>
            <form onSubmit={handleSubmit} id="add-form">
                {/* make a default border of white and make it gray when selected or focused */}
                {/* also need to fix the hovering style for items in the dropdown list */}
                <FormControl sx={{ display: 'block', mb: '1.5rem' }}>
                    <Select
                        value={type}
                        onChange={(event) => { setType(event.target.value) }}
                        displayEmpty
                        required
                        sx={{
                            '& .MuiSelect-select, & .MuiSelect-icon': {
                                color: 'white',
                            },
                            '& :hover': {
                                borderColor: '#c0c0c0',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#c0c0c0',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#c0c0c0',
                            },
                        }}
                    >
                        <MenuItem value="" disabled>
                            Select an option
                        </MenuItem>
                        <MenuItem value="Integer">Integer</MenuItem>
                        <MenuItem value="String">String</MenuItem>
                        <MenuItem value="Integer Array">Integer Array</MenuItem>
                    </Select>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">
                    Generate Test Case
                </Button>
                {/* dropdown list for type */}
                {/* range picker for range of input based on type */}
                {/* random test case radio button? add input field if not random test case */}
                {/* generate test case button */}
                {/* <label>Enter the desired test case:</label>
                <button>Generate Test case</button> */}
            </form>
        </Box>
    )
}

export default AddPage;