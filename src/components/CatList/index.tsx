"use client"

import { useEffect, useState } from 'react'
import { fetchCats } from '@/services/catService'
import { Cat } from '@/types/cat'
import CatCard from '@/components/CatCard'

const CatList: React.FC = () => {
  const [cats, setCats] = useState<Cat[]>([])
  const [loading, setLoading] = useState(false)

  // create a mocked cat
  const mockedCats: Cat[] = [
    {
      id: 1,
      name: 'Fluffy',
      age: 2,
      breed: 'Persian',
      adopted: false,
      created_at: '2021-06-01T00:00:00Z',
      updated_at: '2021-06-01T00:00:00Z',
      image: 'https://placecats.com/300/200',
      description: 'Fluffy is a sweet and playful Persian cat. She loves to play with toys and cuddle with her human.'
    },

    {
      id: 2,
      name: 'Whiskers',
      age: 1,
      breed: 'Siamese',
      adopted: false,
      created_at: '2021-06-01T00:00:00Z',
      updated_at: '2021-06-01T00:00:00Z',
      image: 'https://placecats.com/300/200',
      description: 'Whiskers is a curious and energetic Siamese cat. He loves to explore and play with other cats.'
    },

    {
      id: 3,
      name: 'Mittens',
      age: 3,
      breed: 'Main',
      adopted: false,
      created_at: '2021-06-01T00:00:00Z',
      updated_at: '2021-06-01T00:00:00Z',
      image: 'https://placecats.com/300/200',
      description: 'Mittens is a gentle and affection Main cat. She loves to be petted and sit on laps.',
    },

    {
      id: 4,
      name: 'Socks',
      age: 4,
      breed: 'Ragdoll',
      adopted: false,
      created_at: '2021-06-01T00:00:00Z',
      updated_at: '2021-06-01T00:00:00Z',
      image: 'https://placecats.com/300/200',
      description: 'Socks is a friendly and calm Ragdoll cat. He loves to be held and sleep',
    },

    {
      id: 5,
      name: 'Boots',
      age: 5,
      breed: 'Bengal',
      adopted: false,
      created_at: '2021-06-01T00:00:00Z',
      updated_at: '2021-06-01T00:00:00Z',
      image: 'https://placecats.com/300/200',
      description: 'Boots is a playful and active Bengal cat. He loves to run and climb on cat trees.',
    },

    {
      id: 6,
      name: 'Mittens',
      age: 3,
      breed: 'Main',
      adopted: false,
      created_at: '2021-06-01T00:00:00Z',
      updated_at: '2021-06-01T00:00:00Z',
      image: 'https://placecats.com/300/200',
      description: 'Mittens is a gentle and affection Main cat. She loves to be petted and sit on laps.',
    },

    {
      id: 7,
      name: 'Socks',
      age: 4,
      breed: 'Ragdoll',
      adopted: false,
      created_at: '2021-06-01T00:00:00Z',
      updated_at: '2021-06-01T00:00:00Z',
      image: 'https://placecats.com/300/200',
      description: 'Socks is a friendly and calm Ragdoll cat. He loves to be held and sleep.',
    },

    {
      id: 8,
      name: 'Boots',
      age: 5,
      breed: 'Bengal',
      adopted: false,
      created_at: '2021-06-01T00:00:00Z',
      updated_at: '2021-06-01T00:00:00Z',
      image: 'https://placecats.com/300/200',
      description: 'Boots is a playful and active Bengal cat. He loves to run and climb on cat trees.',
    },
  ]


  useEffect(() => {
    const loadCats = async () => {
      setLoading(true)

      try {
        // const catsData = await fetchCats()

        setCats(mockedCats)
      } catch (error) {
        console.log('Error fetching cats: ', error)
      } finally {
        setLoading(false)
      }
    }

    loadCats()
  }, [])

  
  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <section className="flex flex-col gap-4">
      <article className="flex flex-col gap-3">
        <h1 className="text-2xl text-main font-semibold">Cats for adoption</h1>
        <p className="text-primary text-sm font-light">Explore our list of lovable cats looking for their forever homes.</p>
      </article>

      <div className="grid grid-cols-4 gap-x-6 gap-y-8">
        {cats.map((cat) => (
          // <li key={cat.id}>{cat.name}</li>
          <CatCard key={cat.id} cat={cat} />
        ))}
      </div>
    </section>
  )
}

export default CatList
