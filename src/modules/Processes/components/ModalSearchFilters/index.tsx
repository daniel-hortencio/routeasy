'use client'

import { Dispatch, SetStateAction } from 'react'
import {
  Box,
  CheckboxGroup,
  RadioGroup,
  SelectSimple,
  Text
} from '../../../../shared/components/elements'

import S from './styles.module.css'

interface Props {
  filters: any
  orderBy: any
  setOrderBy: Dispatch<SetStateAction<number>>
  handleCheck: (param: any) => void
}

export const ModalSearchFilters = ({
  filters,
  orderBy,
  setOrderBy,
  handleCheck
}: Props) => {
  return (
    <Box
      className={`${S.ModalSearchFilters__Content} overflow-y-auto mt-6 pl-5`}
    >
      <Text className={`font-bold text-2xl mb-4`}>Filtros</Text>
      <Box className="mb-7 md:mb-8">
        <Text className="font-bold md:text-lg mb-2">Ordenação</Text>

        <Box className="mb-3">
          <RadioGroup
            isSelected={orderBy === 1}
            onSelect={() => setOrderBy(1)}
            label="Consultas mais recentes"
          />
        </Box>
        <Box className="mb-3">
          <RadioGroup
            isSelected={orderBy === 2}
            onSelect={() => setOrderBy(2)}
            label="Consultas mais antigas"
          />
        </Box>
        <Box className="mb-3">
          <RadioGroup
            isSelected={orderBy === 3}
            onSelect={() => setOrderBy(3)}
            label="Movimentações mais recentes"
          />
        </Box>
        <Box className="mb-3">
          <RadioGroup
            isSelected={orderBy === 4}
            onSelect={() => setOrderBy(4)}
            label="Movimentações mais antigas"
          />
        </Box>
      </Box>

      <Box className="mb-7 md:mb-8 pr-5">
        <Text className="font-bold md:text-lg mb-2">Por tribunal</Text>
        <SelectSimple />
      </Box>

      <Box className="mb-7 md:mb-8">
        <Text className="font-bold md:text-lg mb-2">Por competência</Text>

        <Box className="mb-3">
          <CheckboxGroup
            isChecked={filters.civil}
            onCheck={() => handleCheck('civil')}
            label="Civil"
          />
        </Box>
        <Box className="mb-3">
          <CheckboxGroup
            isChecked={filters.penal}
            onCheck={() => handleCheck('penal')}
            label="Penal"
          />
        </Box>
        <Box className="mb-3">
          <CheckboxGroup
            isChecked={filters.tributario}
            onCheck={() => handleCheck('tributario')}
            label="Tributário"
          />
        </Box>
        <Box className="mb-3">
          <CheckboxGroup
            isChecked={filters.trabalhista}
            onCheck={() => handleCheck('trabalhista')}
            label="Trabalhista"
          />
        </Box>
        <Box className="mb-3">
          <CheckboxGroup
            isChecked={filters.contratual}
            onCheck={() => handleCheck('contratual')}
            label="Contratual"
          />
        </Box>
        <Box className="mb-3">
          <CheckboxGroup
            isChecked={filters.ambiental}
            onCheck={() => handleCheck('ambiental')}
            label="Ambiental"
          />
        </Box>
        <Box className="mb-3">
          <CheckboxGroup
            isChecked={filters.empresarial}
            onCheck={() => handleCheck('empresarial')}
            label="Empresarial"
          />
        </Box>
        <Box className="mb-3">
          <CheckboxGroup
            isChecked={filters.consumidor}
            onCheck={() => handleCheck('consumidor')}
            label="Consumidor"
          />
        </Box>
      </Box>
    </Box>
  )
}
