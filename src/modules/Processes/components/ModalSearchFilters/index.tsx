'use client'

import { useForm, useFormContext } from 'react-hook-form'
import {
  Box,
  CheckboxGroup,
  RadioGroup,
  Select,
  Text
} from '../../../../shared/components/elements'

import S from './styles.module.css'
import { useEffect, useState } from 'react'

/* interface Props {
  filters: any
  orderBy: any
  setOrderBy: Dispatch<SetStateAction<number>>
  handleCheck: (param: any) => void
} */

export const ModalSearchFilters = () => {
  const { register, unregister } = useFormContext()
  const [orderBySelected, setOrderBySelected] = useState('')

  useEffect(() => {
    return unregister('radio-group')
  }, [])

  return (
    <Box
      className={`${S.ModalSearchFilters__Content} overflow-y-auto mt-6 pl-5`}
    >
      <Text className={`font-bold text-2xl mb-4`}>Filtros</Text>
      <div {...register('order_by')} className="mb-7 md:mb-8">
        <Text className="font-bold md:text-lg mb-2">Ordenação</Text>

        <Box className="mb-3">
          <RadioGroup
            group="order_by"
            value="consultas_mais_recentes"
            isSelected={orderBySelected === 'consultas_mais_recentes'}
            onChange={setOrderBySelected}
            label="Consultas mais recentes"
          />
        </Box>
        <Box className="mb-3">
          <RadioGroup
            group="order_by"
            value="consultas_mais_antigas"
            isSelected={orderBySelected === 'consultas_mais_antigas'}
            onChange={setOrderBySelected}
            label="Consultas mais antigas"
          />
        </Box>
        <Box className="mb-3">
          <RadioGroup
            group="order_by"
            value="movimentacoes_mais_recentes"
            isSelected={orderBySelected === 'movimentacoes_mais_recentes'}
            onChange={setOrderBySelected}
            label="Movimentações mais recentes"
          />
        </Box>
        <Box className="mb-3">
          <RadioGroup
            group="order_by"
            value="movimentacoes_mais_antigas"
            isSelected={orderBySelected === 'movimentacoes_mais_antigas'}
            onChange={setOrderBySelected}
            label="Movimentações mais antigas"
          />
        </Box>
      </div>

      <Box className="mb-7 md:mb-8 pr-5">
        <Text className="font-bold md:text-lg mb-2 ">Por tribunal</Text>
        <Select
          className="shadow-md"
          options={[
            { name: 'Todos' },
            { name: 'Tribunal 1' },
            { name: 'Tribunal 2' },
            { name: 'Tribunal 3' },
            { name: 'Tribunal 4' }
          ].sort((a, b) => a.name.localeCompare(b.name))}
          defaultValue="Todos"
        />
      </Box>

      <Box className="mb-7 md:mb-8">
        <Text className="font-bold md:text-lg mb-2">Por competência</Text>

        <Box className="mb-3">
          <CheckboxGroup label="Civil" name="civil" />
        </Box>
        <Box className="mb-3">
          <CheckboxGroup label="Penal" name="penal" />
        </Box>
        <Box className="mb-3">
          <CheckboxGroup label="Tributário" name="tributário" />
        </Box>
        <Box className="mb-3">
          <CheckboxGroup label="Trabalhista" name="trabalhista" />
        </Box>
        <Box className="mb-3">
          <CheckboxGroup label="Contratual" name="contratual" />
        </Box>
        <Box className="mb-3">
          <CheckboxGroup label="Ambiental" name="ambiental" />
        </Box>
        <Box className="mb-3">
          <CheckboxGroup label="Empresarial" name="empresarial" />
        </Box>
        <Box className="mb-3">
          <CheckboxGroup label="Consumidor" name="consumidor" />
        </Box>
      </Box>
    </Box>
  )
}
