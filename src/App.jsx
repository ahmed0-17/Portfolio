import Background from "./components/Background";
import FloatingDock from "./components/FloatingDock";
import { Analytics } from "@vercel/analytics/next"
function App() {
  return (
    <>
      <Background />
        <FloatingDock />
           
      <main className="relative z-10">
        {/* Home */}
        {/* About */}
        {/* Projects */}
        {/* Contact */}
      </main>
      <Analytics />
    </>
  );
}

export default App;