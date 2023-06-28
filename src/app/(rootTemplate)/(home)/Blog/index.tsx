'use client'

import { Section } from 'components/elements/Section'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { ButtonSecondary } from 'components/elements/Button'
import { TextHighlight, Title, Text } from 'components/elements/Texts'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Skeleton } from 'components/elements/Skeleton'

const CardBlog = ({ tag, title, author, date, imageUrl }) => {
  return (
    <div className="relative rounded-2xl h-96 bg-[#555] flex items-end overflow-hidden">
      <div className="pb-6 px-4 relative z-10">
        <p className="h-6 px-2 mb-1 bg-primary-50 rounded w-min text-xs text-black font-bold flex items-center whitespace-nowrap">
          {tag}
        </p>
        <p className="mb-1 text-xl uppercase font-semibold max-h-[3.5rem] overflow-hidden">
          {title}
        </p>
        <footer className="flex items-center">
          <div className="border-2 border-white h-10 w-10 rounded-full"></div>
          <p className="ml-2">{author}</p>
          <p className="ml-auto font-bold">{date}</p>
        </footer>
      </div>
      <img
        src={imageUrl}
        alt="Imagem destacada"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
  )
}

export const Blog = () => {
  const [posts, setPosts] = useState<any>([])
  const [isLoading, setIsLoading] = useState(true)

  async function getPosts() {
    const response = await axios.get('/api/get-blog')

    console.log('POSTS:', response.data)

    if (response) {
      setPosts(response.data)
    }

    setIsLoading(false)
  }

  const [sliderRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 1.25
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: {
          perView: 2.25
        }
      }
    }
  })

  useEffect(() => {
    getPosts()
  }, [])

  console.log({})

  return (
    <div>
      <Section
        title={
          <Title>
            Acompanhe as <TextHighlight>novidades</TextHighlight> da Logística
          </Title>
        }
        subtitle={
          <Text className="text-grayscale-50 text-[15px] font-light">
            Acesse o blog da RoutEasy e fique por dentro de todas as novidades!
          </Text>
        }
      >
        <div className="hidden lg:grid grid-cols-3 gap-6 mt-2">
          {isLoading
            ? [1, 2, 3].map(item => (
                <Skeleton key={item} className="pt-96 rounded-2xl" />
              ))
            : posts
                ?.map(post => (
                  <CardBlog
                    key={post?.title}
                    tag={post?.categories.nodes[0].name}
                    title={post?.title}
                    imageUrl={post?.featuredImage?.node?.sourceUrl}
                    author="Luana Torres"
                    date="Março 2023"
                  />
                ))
                .slice(0, 3)}
        </div>
      </Section>
      <div className="lg:hidden">
        {isLoading ? (
          <Skeleton className="h-96 w-full mx-6 rounded-2xl" />
        ) : (
          <div ref={sliderRef} className="keen-slider ">
            {posts
              ?.map((post, index) => (
                <div
                  key={post?.title}
                  className={`keen-slider__slide pr-6 ${index === 0 && 'ml-5'}`}
                >
                  <CardBlog
                    tag={post?.categories.nodes[0].name}
                    title={post?.title}
                    imageUrl={post?.featuredImage?.node?.sourceUrl}
                    author="Luana Torres"
                    date="Março 2023"
                  />
                </div>
              ))
              .slice(0, 10)}
          </div>
        )}
      </div>
      <Section className="pt-16 pb-14 md:py-20 w-full">
        <div className="mx-auto sm:w-36">
          <Link href="https://routeasy.com.br/content/" target="_blank">
            <ButtonSecondary>Ir para o blog</ButtonSecondary>
          </Link>
        </div>
      </Section>
    </div>
  )
}
