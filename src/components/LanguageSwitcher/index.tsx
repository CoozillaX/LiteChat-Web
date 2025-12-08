import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, MenuItem, IconButton, ListItemText } from "@mui/material";
import { Translate } from "@mui/icons-material";
import { supportedLanguages } from "@/i18n";
import { I18nKeys } from "@/i18n/keys";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
        <Translate />
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
            <ListItemText>{t(I18nKeys.languageName, { lng })}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
