import Image from 'next/image'

export const Banner = () => {
  return (
    <>
      <div className="relative w-full h-full mb-16">
        <Image
          style={{
            objectFit: 'cover'
          }}
          fill
          src="/images/pictures/banner-sobre-nos.png"
          alt="Banner"
        />
        <div className="flex justify-center h-full relative min-h-[640px]">
          <div className="md:mx-auto lg:mx-0 flex flex-col justify-center w-[645px] text-center">
            <h1 className="text-white uppercase font-semibold text-5xl lg:text-[56px]/[72px] pb-5">
              Sobre
              <span className="text-primary-100">nós</span>
            </h1>
            <p className="font-normal text-grayscale-50 text-base pb-8">
              Somos uma empresa focada em resultados com um DNA cultural de
              Start-Up.
            </p>
            <p className="font-normal text-grayscale-50 text-base pb-8">
              Lorem ipsum dolor sit amet. Ut sint laboriosam ut sapiente rerum
              aut assumenda voluptates qui beatae quis id Quis cupiditate. Cum
              veritatis voluptatem hic dolores fuga eum dolorum tenetur est
              iusto quis.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
