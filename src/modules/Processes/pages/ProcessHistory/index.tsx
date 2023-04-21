'use client'

import { useEffect, useState, useCallback } from 'react'

import ProcessesSummary from '../../components/ProcessesSummary'
import {
  TableHeaderProcessHistory,
  TableRowProcessHistory
} from '../../components/TableRowProcessHistory'
import { ModalSearchFilters } from '../../components/ModalSearchFilters'
import { SearchEmpty } from '../../components/SearchEmpty'
import {
  Box,
  Icon,
  InputSearch,
  Text,
  Wrapper,
  Button,
  Table
} from 'shared/components/elements'
import { useToast } from 'shared/contexts/Toast/UseToast'
import { DashboardLayoutHeader } from 'shared/components/layouts/DashboardLayout/Header'
import { useModal } from 'shared/contexts/Modal'

import S from './styles.module.css'

const init_filters = {
  civil: false,
  penal: false,
  tributario: false,
  trabalhista: false,
  contratual: false,
  ambiental: false,
  empresarial: false,
  consumidor: false
}

export default function ProcessHistory() {
  const [filters, setFilters] = useState(null)
  const [orderBy, setOrderBy] = useState(0)
  const [processes, setProcesses] = useState([
    {
      id: '1',
      updated_at: '05/03/23 às 15h38',
      number: '0136156-24.2023.8.09.0001',
      processo: '(Ativo) CESAR SANTOS x VOLVO...',
      tribunal: 'PJERJ',
      tipo: 'Web'
    },
    {
      id: '2',
      updated_at: '05/03/23 às 15h38',
      number: '0136156-24.2023.8.09.0001',
      processo: '(Cancelado) CESAR SANTOS x VOLVO BRASIL LTDA...',
      tribunal: 'PJERJ',
      tipo: 'Web'
    }
  ])
  const [search, setSearch] = useState('')

  const { createToast } = useToast()
  const { createModal } = useModal()

  useEffect(() => {
    createToast({
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, onec facilisis neque!',
      status: 'danger'
    })
  }, [])

  const handleCheck = useCallback(
    param => {
      setFilters(() => ({ ...filters, [param]: !filters[param] }))
    },
    [filters]
  )

  const clearFilters = useCallback(() => {
    setFilters(() => init_filters)
    setOrderBy(0)
  }, [])

  const handleSubmitSearchProcess = useCallback(
    (search_value: string) => {
      setSearch(search_value)

      // Remover ao integrar
      if (search_value.length > 0) setProcesses([])
    },
    [search]
  )

  const createModalFilters = () => {
    if (filters === null) {
      setFilters(init_filters)
    }

    createModal({
      className: `${S.ModalSearchFilters}`,
      positionX: 'right',
      isCustom: true,
      body: (
        <ModalSearchFilters
          filters={filters}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          handleCheck={handleCheck}
        />
      ),
      footer: (
        <Box className="flex justify-end">
          <Box className="hidden md:block md:w-28">
            <Button text="Limpar" size="large" onClick={clearFilters} />
          </Box>
          <Box className="md:hidden">
            <Button text={<Icon name="TrashSimple" />} onClick={clearFilters} />
          </Box>

          <Box className="ml-5 w-full md:w-40">
            <Button text="Filtrar processos" size="large" color="primary" />
          </Box>
        </Box>
      )
    })
  }

  useEffect(() => {
    if (filters) {
      createModalFilters()
    }
  }, [filters, orderBy])

  return (
    <>
      <DashboardLayoutHeader />

      <ProcessesSummary />

      <Wrapper>
        {processes.length > 0 ? (
          <>
            <Box className="mb-8 md:mb-12 mt-8 md:flex justify-between items-center">
              <Text
                as="h1"
                className="font-bold text-2xl md:text-28px mb-4 md:mb-0"
              >
                Total de 459.235 processos
              </Text>

              <Box className="flex items-center md:hidden w-full">
                <InputSearch
                  placeholder="Pesquisar Processo"
                  onSubmit={handleSubmitSearchProcess}
                />

                <Box className="ml-5">
                  <Button
                    color="primary"
                    text={<Icon name="Funnel" />}
                    onClick={createModalFilters}
                  />
                </Box>
              </Box>

              <Box className="hidden md:flex md:items-center">
                <InputSearch
                  variant="collapsible"
                  placeholder="Pesquisar Processo"
                  onSubmit={handleSubmitSearchProcess}
                />

                <Box className="w-24 ml-5">
                  <Button
                    color="primary"
                    text="Filtrar"
                    onClick={createModalFilters}
                    size="large"
                  />
                </Box>
              </Box>
            </Box>

            <Table
              data={processes}
              HeaderComponent={TableHeaderProcessHistory}
              RowComponent={TableRowProcessHistory}
            />
          </>
        ) : (
          <Box className="my-20 md:my-44">
            <SearchEmpty onSubmit={() => {}} searched={search} />
          </Box>
        )}
      </Wrapper>
    </>
  )
}
