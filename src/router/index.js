import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "../components";
import { Home, Page404, ContactSuccess } from "../pages";

export const Router = ({
  onClickVisibleFormContact,
  visibleFormContact,
  onEventGaClickButton,
  onEventGaClickVideos,
  onEventGaClickSuccessful,
}) => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <BaseLayout onClickVisibleFormContact={onClickVisibleFormContact}>
            <Home
              onClickVisibleFormContact={onClickVisibleFormContact}
              visibleFormContact={visibleFormContact}
              onEventGaClickButton={onEventGaClickButton}
              onEventGaClickVideos={onEventGaClickVideos}
            />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/contact-success"
        element={
          <BaseLayout>
            <ContactSuccess
              onEventGaClickButton={onEventGaClickButton}
              onEventGaClickSuccessful={onEventGaClickSuccessful}
            />
          </BaseLayout>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
