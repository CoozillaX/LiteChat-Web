import { Button, CardHeader, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function LoginPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 4,
        py: 2
      }}
    >
      <CardHeader
        title={
          <Typography variant="h5" fontWeight={600}>
            {t("login.title")}
          </Typography>
        }
        subheader={t("login.subtitle")}
        sx={{
          textAlign: "center"
        }}
      />
      <CardContent>
        <Stack spacing={2}>
          <TextField id="email" label={t("login.email")} variant="outlined" />
          <TextField
            id="password"
            label={t("login.password")}
            type="password"
            variant="outlined"
          />
        </Stack>
      </CardContent>
      <CardActions sx={{ px: 2 }}>
        <Stack sx={{ width: "100%" }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => {
              navigate("/chat");
            }}
          >
            {t("login.submit")}
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
