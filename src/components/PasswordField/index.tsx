import { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import type { TextFieldProps } from "@mui/material/TextField";

export default function PasswordField(props: TextFieldProps) {
  const [show, setShow] = useState(false);
  const { slotProps, ...rest } = props;
  return (
    <TextField
      {...rest}
      type={show ? "text" : "password"}
      slotProps={{
        ...slotProps,
        input: {
          ...(slotProps?.input || {}),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" onClick={() => setShow(!show)}>
                {show ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }
      }}
    />
  );
}
