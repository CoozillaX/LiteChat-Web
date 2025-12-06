import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { I18nKeys } from "@/i18n/keys";
import { Fingerprint } from "@mui/icons-material";
import {
  Alert,
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
import PasswordField from "@/components/PasswordField";
import { loginSchema, type LoginSchemaValues } from "@/schemas/auth/login";

export default function LoginPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Form success response
  const [failureMessage, setFailureMessage] = useState<string | null>(null);

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginSchemaValues>({
    resolver: zodResolver(loginSchema)
  });

  // Form submission handler
  const onValidSubmit = (data: LoginSchemaValues) => {
    console.log("Login attempt for:", data.email);
    console.log("Password:", data.password);
    // TODO: Integrate with backend API to handle login request
    if (data.password !== "ValidPass1!") {
      setFailureMessage(I18nKeys.login.error.invalidCredentials);
      return;
    }
    navigate("/chat");
  };

  return (
    <form onSubmit={handleSubmit(onValidSubmit)} noValidate>
      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 4,
          py: 2,
          userSelect: "none"
        }}
      >
        <CardHeader
          title={
            <Typography variant="h5" fontWeight={600}>
              {t(I18nKeys.login.title)}
            </Typography>
          }
          sx={{
            textAlign: "center"
          }}
        />
        <CardContent sx={{ pb: 1 }}>
          {failureMessage && (
            <Alert
              severity="error"
              onClose={() => setFailureMessage(null)}
              sx={{ mb: 2 }}
            >
              <Trans
                i18nKey={failureMessage}
                components={[<Link to="/" style={{ color: "#1976d2" }} />]}
              />
            </Alert>
          )}
          <Stack>
            <TextField
              id="email"
              label={t(I18nKeys.login.email)}
              variant="outlined"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email ? t(errors.email.message || "") : ""}
            />
            <PasswordField
              id="password"
              autoComplete="current-password"
              label={t(I18nKeys.login.password)}
              variant="outlined"
              {...register("password")}
              error={!!errors.password}
              helperText={
                errors.password ? t(errors.password.message || "") : ""
              }
              sx={{ mt: 2 }}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              align="right"
              sx={{ mt: 1 }}
            >
              <Link to="/forgot-password" style={{ color: "#1976d2" }}>
                {t(I18nKeys.login.forgotPassword)}
              </Link>
            </Typography>
          </Stack>
        </CardContent>
        <CardActions sx={{ px: 2 }}>
          <Stack sx={{ width: 1 }}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              sx={{ textTransform: "none" }}
              disabled={isSubmitting}
            >
              {t(I18nKeys.login.submit)}
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
              {t(I18nKeys.login.passkey)}
            </Button>
            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              sx={{ mt: 2 }}
            >
              <Trans
                i18nKey={I18nKeys.login.signup}
                components={[
                  <Link to="/request-signup" style={{ color: "#1976d2" }} />
                ]}
              />
            </Typography>
          </Stack>
        </CardActions>
      </Card>
    </form>
  );
}
