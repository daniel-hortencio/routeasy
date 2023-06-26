'use client'

import { Section } from 'components/elements/Section'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { ButtonSecondary } from 'components/elements/Button'
import { TextHighlight, Title, Text } from 'components/elements/Texts'
import { GraphQLClient, gql } from 'graphql-request'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'

const client = new GraphQLClient(
  'https://routeasy.com.br/content/graphql'
  // "https://test-frontity-wordpress.000webhostapp.com/graphql"
  // https://routeasy.com.br/content/wp-admin/admin.php?isQueryComposerOpen=true&page=graphiql-ide&query=I4VwpgTgngBAcmA7gRXNGBvAUDGAHAewGcAXIzHXGMAEwHMxzsqqA7AmsCllkgSxIAbMJR4wAxgVYkw00VQC%2B8pbiUKgA
)

const query = gql`
  query NewQuery {
    posts {
      edges {
        node {
          content
          categories {
            nodes {
              name
            }
          }
          title
        }
      }
    }
  }
`

const CardBlog = ({ tag, title, author, date }) => {
  return (
    <div className="rounded-2xl h-96 bg-[#555] flex items-end">
      <div className="pb-6 px-4">
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
    </div>
  )
}

export const Blog = () => {
  const [posts, setPosts] = useState<any>([])

  async function getPosts() {
    const response = await axios.get('/api/get-blog')

    if (response) {
      setPosts(response.data)
    }
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
          {posts
            ?.map(post => (
              <CardBlog
                key={post?.title}
                tag={post?.categories.nodes[0].name}
                title={post?.title}
                author="Luana Torres"
                date="Março 2023"
              />
            ))
            .slice(0, 3)}
        </div>
      </Section>
      <div className="lg:hidden">
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
                  author="Luana Torres"
                  date="Março 2023"
                />
              </div>
            ))
            .slice(0, 10)}
        </div>
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
