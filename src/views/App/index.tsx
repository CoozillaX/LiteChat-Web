import { ThemeModeProvider } from "@/contexts";
import router from "@/routes";
import { RouterProvider } from "react-router-dom";

export default function Index() {
  return (
    <ThemeModeProvider>
      <RouterProvider router={router} />
    </ThemeModeProvider>
  );
}
