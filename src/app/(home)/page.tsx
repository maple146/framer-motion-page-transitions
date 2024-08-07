import { HOME_DATA } from "@/utils/static/home";
import HomeCardsGrid from "./HomeCardsGrid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900">
      <HomeCardsGrid {...HOME_DATA.home} />
    </main>
  )
}
