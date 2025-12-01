import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, MenuItem, IconButton, ListItemText } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import { supportedLanguages } from "@/i18n";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
        <TranslateIcon />
      </IconButton>

      <Menu open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
        {supportedLanguages.map((lng) => (
          <MenuItem
            key={lng}
            selected={i18n.language === lng}
            onClick={() => {
              i18n.changeLanguage(lng);
              localStorage.setItem("litechat-lang", lng);
              setAnchorEl(null);
            }}
          >
            <ListItemText>{t("languageName", { lng })}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
