import HomeCardGroup from "@/components/home/HomeCardGroup";
import { HOME_DATA } from "@/utils/static/home";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-8">
      <h1 className="col-span-3 text-center text-white text-6xl">{HOME_DATA.home.title}</h1>
      {
        HOME_DATA.home.content.map((item, index) => (
          <HomeCardGroup key={`${item.title}-${index}`} {...item} />
        ))
      }
    </main>
  )
}
