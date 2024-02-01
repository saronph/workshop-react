import { Route, Routes } from "react-router";

import { Class } from "./pages/Class";
import { Dashboard } from "./pages/Dashboard";
import { Desafio } from "./pages/Desafio";
import { Hooks } from "./pages/Hooks";
import { Jsx } from "./pages/Jsx";
import { State } from "./pages/State";
import { Tailwind } from "./pages/Tailwind";
import { Typescript } from "./pages/Typescript";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/jsx" element={<Jsx />} />
      <Route path="/tailwind" element={<Tailwind />} />
      <Route path="/typescript" element={<Typescript />} />
      <Route path="/class" element={<Class />} />
      <Route path="/state" element={<State />} />
      <Route path="/hooks" element={<Hooks />} />
      <Route path="/desafio" element={<Desafio />} />
    </Routes>
  );
}
