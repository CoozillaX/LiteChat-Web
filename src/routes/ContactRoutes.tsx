import { Navigate, Route } from "react-router-dom";

export const ContactRoutes = (
  <Route path="contacts">
    <Route index handle={{ isEmptyPage: true }} />
    <Route path="*" element={<Navigate to=".." replace />} />
  </Route>
);
