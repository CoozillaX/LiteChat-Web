import { useTranslation, Trans } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Fingerprint } from "@mui/icons-material";
import {
  Button,
  CardHeader,
  Stack,
  Divider,
  Chip,
  Card,
  CardContent,
  CardActions,
  TextField,
  Typography
} from "@mui/material";

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
        sx={{
          textAlign: "center"
        }}
      />
      <CardContent sx={{ pb: 1 }}>
        <Stack>
          <TextField id="email" label={t("login.email")} variant="outlined" />
          <TextField
            id="password"
            label={t("login.password")}
            type="password"
            variant="outlined"
            sx={{ mt: 2 }}
          />
          <Typography
            variant="body2"
            color="text.secondary"
            align="right"
            sx={{ mt: 1 }}
          >
            <Link to="/forgot-password" style={{ color: "#1976d2" }}>
              {t("login.forgotPassword")}
            </Link>
          </Typography>
        </Stack>
      </CardContent>
      <CardActions sx={{ px: 2 }}>
        <Stack sx={{ width: 1 }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ textTransform: "none" }}
            onClick={() => navigate("/chat")}
          >
            {t("login.submit")}
          </Button>
          <Divider sx={{ my: 2 }}>
            <Chip label="or" size="small" />
          </Divider>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            startIcon={<Fingerprint />}
            sx={{ textTransform: "none" }}
            onClick={() => navigate("/chat")}
          >
            {t("login.passkey")}
          </Button>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ mt: 2 }}
          >
            <Trans
              i18nKey={"login.signup"}
              components={[<Link to="/signup" style={{ color: "#1976d2" }} />]}
            />
          </Typography>
        </Stack>
      </CardActions>
    </Card>
  );
}
