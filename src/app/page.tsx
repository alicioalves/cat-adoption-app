import CatList from "@/components/CatList"
import Header from "@/components/Header"

export default function Home() {
  return (
    <main className="flex flex-col gap-4 w-screen bg-white text-black h-full px-32 py-10">
      <Header />
      <CatList />
    </main>
  )
}
