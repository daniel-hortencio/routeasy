import { Banner } from './Banner'
import { Clients } from './Clients'
import { Integrating } from './Integrating'
import { Solutions } from './Solutions'

export const HomePage = () => {
  return (
    <div>
      <Banner />
      <Clients />
      <Solutions />
      <Integrating />
    </div>
  )
}
