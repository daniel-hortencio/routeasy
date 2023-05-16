import { Section } from 'components/elements/Section'

export const Testimonials = () => {
  const CardTestimonial = ({ avatar, name, position, testimonial }) => {
    return (
      <div className="pt-7 pb-6 px-11">
        <div className="w-[138px] h-[138px] mb-8">{avatar}</div>
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
      <div className="grid gap-8 grid-cols-3">
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
    </Section>
  )
}
