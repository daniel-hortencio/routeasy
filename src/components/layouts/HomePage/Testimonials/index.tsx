import Image from 'next/image'

import { Section } from 'components/elements/Section'

export const Testimonials = () => {
  const CardTestimonial = ({ avatar, name, position, testimonial }) => {
    return (
      <div className="pt-7 pb-6 px-11 border-2 border-primary rounded-xl text-center relative">
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-[6px] -translate-y-[6px]" />
        <div className="w-[138px] h-[138px] mb-8 border-2 border-primary mx-auto rounded-full">
          {avatar}
        </div>
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-sm mb-8">{position}</p>

        <p className="text-sm">
          <span className="text-primary text-3xl">”</span>
          {testimonial}
          <span className="text-primary text-3xl">”</span>
        </p>
      </div>
    )
  }

  return (
    <Section
      title={
        <h1>
          Quem usa <span className="text-primary">confia</span>
        </h1>
      }
      subtitle="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis. "
    >
      <div className="grid gap-8 grid-cols-3 mb-14">
        <CardTestimonial
          avatar=""
          name="Antonio Silva"
          position="Customer"
          testimonial="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis."
        />
        <CardTestimonial
          avatar=""
          name="Antonio Silva"
          position="Customer"
          testimonial="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis."
        />
        <CardTestimonial
          avatar=""
          name="Antonio Silva"
          position="Customer"
          testimonial="Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum veritatis voluptatem hic dolores fuga eum dolorum tenetur est iusto quis."
        />
      </div>
      <div className="grid grid-cols-3 gap-2 w-8 mx-auto mb-36">
        <div className="h-2 w-2 bg-primary rounded-full" />
        <div className="h-2 w-2 bg-primary rounded-full opacity-50" />
        <div className="h-2 w-2 bg-primary rounded-full opacity-50" />
      </div>

      <div className="relative rounded-3xl w-full h-[453px] text-center py-11 pb-16">
        <Image
          src="/images/pictures/background-way.png"
          fill
          alt="Background"
          style={{ objectFit: 'cover' }}
        />
        <div className="relative mx-auto w-16 h-16">
          <Image src="/images/pictures/recycle.png" fill alt="Recicável" />
        </div>
        <p className="relative z-10 text-lg text-[#EDEDED] font-bold mb-8">
          Nossos clientes já reduziram
        </p>
        <h1 className="relative z-10 text-[88px] font-semibold mb-16">
          50 Toneladas de Co2
        </h1>
        <a
          href="/"
          className="rounded relative z-10 w-64 bg-[#EDEDED] text-[#444B55] h-10 flex items-center justify-center mx-auto font-semibold"
        >
          Veja alguns cases de sucesso
        </a>
      </div>
    </Section>
  )
}
