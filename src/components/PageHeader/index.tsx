import {
  Box,
  Typography,
  InputBase,
  type SxProps,
  type Theme
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import type { ChangeEvent, ReactNode } from "react";

// Page Header Component Props
export interface PageHeaderProps {
  title: ReactNode;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;

  showSearch?: boolean;
  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;

  sx?: SxProps<Theme>;
}

// Page Header Component
export function PageHeader({
  title,
  leftSlot,
  rightSlot,
  showSearch = false,
  searchPlaceholder = "Search",
  searchValue,
  onSearchChange,
  sx
}: PageHeaderProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange?.(event.target.value);
  };

  return (
    <Box
      sx={{
        p: 1.6,
        borderBottom: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
        ...sx
      }}
    >
      {/* Top Bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: 32
        }}
      >
        {/* Left side slot */}
        <Box
          sx={{
            width: 50,
            height: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start"
          }}
        >
          {leftSlot ?? null}
        </Box>

        {/* Title */}
        <Box
          sx={{
            flex: 1,
            textAlign: "center",
            pointerEvents: "none"
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            {title}
          </Typography>
        </Box>

        {/* Right side slot */}
        <Box
          sx={{
            width: 50,
            height: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end"
          }}
        >
          {rightSlot ?? null}
        </Box>
      </Box>

      {/* Search Box */}
      {showSearch && (
        <Box
          sx={{
            mt: 1.6,
            display: "flex",
            alignItems: "center",
            bgcolor: "action.hover",
            borderRadius: 2,
            px: 1.5,
          }}
        >
          <SearchIcon
            fontSize="small"
            sx={{ mr: 1, color: "text.secondary" }}
          />
          <InputBase
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={handleChange}
            sx={{
              fontSize: "0.86rem",
              width: 1
            }}
          />
        </Box>
      )}
    </Box>
  );
}
