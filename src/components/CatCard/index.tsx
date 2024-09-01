import { Cat } from "@/types/cat";
import Image from "next/image";

interface IProps {
  cat: Cat;
}

const CatCard: React.FC<IProps> = ({ cat }) => {
  return (
    <section className="border rounded-xl border-stroke max-w-64 flex flex-col justify-between gap-3 text-primary p-6">
      <Image src={cat.image} alt={cat.name} width={200} height={200} className="rounded-lg" />

      <h4 className="font-bold">{cat.name}</h4>
      <p className="text-sm font-light">{cat.description}</p>

      <button className="bg-main text-white rounded-md py-3 font-semibold">Adopt</button>
    </section>
  )
}

export default CatCard