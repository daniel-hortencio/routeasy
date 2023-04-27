/** @type { import('@storybook/nextjs').StorybookConfig } */

import path from 'path';

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  webpackFinal: async (config) => {
    // Adiciona o loader de CSS para o webpack
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true, // Ativa os módulos CSS
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [require('tailwindcss')], // Adiciona o plugin do Tailwind
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../'), // Inclui o diretório raiz do projeto
    });

    // Configura o resolve do webpack para suportar arquivos TypeScript
    config.resolve.extensions.push('.ts', '.tsx');

    // Adiciona a regra de compilação para arquivos TypeScript
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      ],
    });

    return config;
  },
}
export default config
