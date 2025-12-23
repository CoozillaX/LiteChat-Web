import { useTranslation } from "react-i18next";
import {
  Box,
  Typography,
  InputBase,
  type SxProps,
  type Theme
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { I18nKeys } from "@/i18n";
import type { ChangeEvent, ReactNode } from "react";

// Page Header Component Props
export interface PageHeaderProps {
  titleI18nKey?: string;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;

  showSearch?: boolean;
  searchValue?: string;
  onSearchChange?: (value: string) => void;

  sx?: SxProps<Theme>;
}

// Page Header Component
export default function Index({
  titleI18nKey,
  leftSlot,
  rightSlot,
  showSearch = false,
  searchValue,
  onSearchChange,
  sx
}: PageHeaderProps) {
  const { t } = useTranslation();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange?.(event.target.value);
  };

  return (
    <Box
      sx={{
        p: 1.6,
        borderBottom: 1,
        borderColor: "divider",
        ...sx
      }}
    >
      {/* Top Bar */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          height: 32
        }}
      >
        {/* Left side slot */}
        <Box
          sx={{
            height: 1,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            overflow: "hidden"
          }}
        >
          {leftSlot ?? null}
        </Box>

        {/* Title */}
        <Box
          sx={{
            px: 2,
            textAlign: "center",
            pointerEvents: "none"
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            {t(titleI18nKey ?? "")}
          </Typography>
        </Box>

        {/* Right side slot */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            overflow: "hidden"
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
            px: 1.5
          }}
        >
          <SearchIcon
            fontSize="small"
            sx={{ mr: 1, color: "text.secondary" }}
          />
          <InputBase
            placeholder={t(I18nKeys.contacts.searchPlaceholder)}
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
