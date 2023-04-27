import React from 'react'

interface ISetupStorybookTemplate {
  Component: (props: any) => JSX.Element
  args: any
  name: string
}

export const setupStorybookTemplate = ({
  Component,
  args,
  name
}: ISetupStorybookTemplate) => {
  const Template = args => <Component {...args} />

  const setup = Template.bind({})

  setup.args = args
  setup.bindings = {
    name: 'ASdfwefazsdf'
  }

  return setup
}
