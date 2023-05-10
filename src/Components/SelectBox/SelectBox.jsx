import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

const SelectBox = ({title, value, setValue}) => {
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{title}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label="Age"
                onChange={e => setValue(e.target.value)}
            >
                <MenuItem value={10}>امنیت</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    )
}

export default SelectBox