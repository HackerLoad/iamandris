import { Navigate, Route, Routes } from 'react-router'
import { RootRedirect } from './routes/RootRedirect'
import { LangLayout } from './routes/LangLayout'
import { Home } from './pages/Home'
import { Page } from './pages/Page'
import { Showcase } from './pages/Showcase'
import { SlugPage } from './pages/SlugPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path="/:lang" element={<LangLayout />}>
        <Route index element={<Home />} />
        <Route
          path="showcase"
          element={
            <Page routeKey="home">
              <Showcase />
            </Page>
          }
        />
        <Route path=":slug" element={<SlugPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/de" replace />} />
    </Routes>
  )
}
