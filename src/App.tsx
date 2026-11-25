import { MainLayout } from "./components/layout/MainLayout";
import { AppRouter } from "./router/router";

export default function App() {
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
}
