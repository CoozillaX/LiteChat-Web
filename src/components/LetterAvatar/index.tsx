import { Avatar, type SxProps, type Theme } from "@mui/material";

function stringToColor(string: string) {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  const h = Math.abs(hash % 360);
  const s = 60;
  const l = 40;

  return `hsl(${h}, ${s}%, ${l}%)`;
}

function stringAvatar(name: string) {
  const nameParts = name.trim().split(" ");
  const initials =
    nameParts.length > 1
      ? `${nameParts[0][0]}${nameParts[1][0]}`
      : nameParts[0][0];

  return {
    sx: {
      bgcolor: stringToColor(name)
    },
    children: initials.toUpperCase()
  };
}

interface LetterAvatarProps {
  name: string;
  src?: string;
  alt?: string;
  sx?: SxProps<Theme>;
}

export default function Index({ name, src, alt, sx }: LetterAvatarProps) {
  const avatarProps = stringAvatar(name || "User");

  return (
    <Avatar
      src={src}
      alt={alt}
      {...avatarProps}
      sx={{
        ...avatarProps.sx,
        ...sx
      }}
    />
  );
}
