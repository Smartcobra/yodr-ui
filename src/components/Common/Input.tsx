import React, { useState, useCallback, useMemo } from "react";
import {
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  TextField,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
export const Input = ({
  handleChange,
  lbl,
  isRequired,
  value,
  name,
  type,
  errorMsg,
  inputCols,
  options = [],
}: {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  lbl: string;
  isRequired: boolean;
  value: string | number;
  name: string;
  type: string;
  errorMsg: string;
  inputCols?: number;
  options?: Array<{ value: string | number; label: string }>;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // Memoized password toggle handler
  const handleClickShowPassword = useCallback(
    () => setShowPassword((show) => !show), []
  );

  // Prevent unnecessary re-renders
  const handleMouseDownPassword = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    },
    []
  );

  // Memoized options for select input
  // const memoizedOptions = useMemo(() => options, [options]);

  return (
    <div className="mb-6 flex flex-wrap">
      <div
        className={`w-full ${
          inputCols ? `sm:w-${inputCols}/12` : "sm:w-2/3"
        } flex items-center`}
      >
        {type === "password" ? (
          <FormControl variant="outlined" fullWidth>
            <InputLabel>{lbl}</InputLabel>
            <OutlinedInput
              onChange={handleChange}
              name={name}
              type={showPassword ? "text" : "password"}
              value={value}
              error={!!errorMsg}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label={lbl}
            />
            <FormHelperText error={!!errorMsg}>{errorMsg || ""}</FormHelperText>
          </FormControl>
        
        ) : (
          <TextField
            className="w-full"
            label={lbl}
            onChange={handleChange}
            name={name}
            type={type}
            value={value}
            error={!!errorMsg}
            helperText={errorMsg || ""}
            fullWidth
          />
        )}
      </div>
    </div>
  );
};
