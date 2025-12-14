import { Navigate, Route } from "react-router-dom";

export const ChatRoutes = (
  <Route path="chats">
    <Route index handle={{ isEmptyPage: true }} />
    <Route path="*" element={<Navigate to=".." replace />} />
  </Route>
);
