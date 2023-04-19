'use client'

import {
  Box,
  Icon,
  InputSearch,
  Text,
  Wrapper,
  Button
} from '../../../../shared/components/elements'
import { DashboardLayoutHeader } from '../../../../shared/components/layouts/DashboardLayout/Header'
import { Table } from '../../../../shared/components/elements/Table'
import ProcessesSummary from '../../components/ProcessesSummary'
import {
  TableHeaderProcessHistory,
  TableRowProcessHistory
} from '../../components/TableRowProcessHistory'
import { useToast } from '../../../../shared/contexts/Toast/UseToast'
import { useEffect, useState, useCallback, FormEvent } from 'react'
import Modal from '../../../../shared/components/elements/Modal'
import { ModalSearchFilters } from '../../components/ModalSearchFilters'

import S from './styles.module.css'
import { SearchEmpty } from '../../components/SearchEmpty'

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
  const { createToast } = useToast()
  const [isOpenModalSearchFilters, setIsOpenModalSearchFilters] =
    useState(false)
  const [filters, setFilters] = useState(init_filters)
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
  const [valueSearched, setValueSearched] = useState('')

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
    (e: FormEvent) => {
      e.preventDefault()

      setValueSearched(search)

      if (search.length > 0) setProcesses([])
    },
    [search]
  )

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
                  value={search}
                  onChange={setSearch}
                  onSubmit={handleSubmitSearchProcess}
                />

                <Box className="ml-5">
                  <Button
                    color="primary"
                    text={<Icon name="Funnel" />}
                    onClick={() => setIsOpenModalSearchFilters(true)}
                  />
                </Box>
              </Box>

              <Box className="hidden md:flex md:items-center">
                <InputSearch
                  variant="collapsible"
                  placeholder="Pesquisar Processo"
                  value={search}
                  onChange={setSearch}
                  onSubmit={handleSubmitSearchProcess}
                />

                <Box className="w-24 ml-5">
                  <form onSubmit={handleSubmitSearchProcess}>
                    <Button
                      color="primary"
                      text="Filtrar"
                      onClick={() => setIsOpenModalSearchFilters(true)}
                      size="large"
                    />
                  </form>
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
            <SearchEmpty
              onSubmit={handleSubmitSearchProcess}
              searched={valueSearched}
            />
          </Box>
        )}

        <Modal
          isOpen={isOpenModalSearchFilters}
          onClose={() => setIsOpenModalSearchFilters(false)}
          positionX="right"
          className={`${S.ModalSearchFilters}`}
          isCustom
          footer={
            <Box className="flex justify-end">
              <Box className="hidden md:block md:w-28">
                <Button text="Limpar" size="large" onClick={clearFilters} />
              </Box>
              <Box className="md:hidden">
                <Button
                  text={<Icon name="TrashSimple" />}
                  onClick={clearFilters}
                />
              </Box>

              <Box className="ml-5 w-full md:w-40">
                <Button text="Filtrar processos" size="large" color="primary" />
              </Box>
            </Box>
          }
        >
          <ModalSearchFilters
            filters={filters}
            orderBy={orderBy}
            setOrderBy={setOrderBy}
            handleCheck={handleCheck}
          />
        </Modal>
      </Wrapper>
    </>
  )
}
