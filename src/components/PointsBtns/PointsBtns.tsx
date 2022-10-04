import { PointsToAdd } from '@/models/pointsToAdd'
import styled from 'styled-components'
import { Button } from '../Button'

type Props = {
  handleClick: (points: PointsToAdd) => void
}
export const PointsBtns = ({ handleClick }: Props) => {
  return (
    <>
      <H4>Points To add</H4>
      <Actions>
        <Button onClick={() => handleClick(PointsToAdd.MINOR)}>
          {PointsToAdd.MINOR}
        </Button>
        <Button onClick={() => handleClick(PointsToAdd.MEDIUM)}>
          {PointsToAdd.MEDIUM}
        </Button>
        <Button onClick={() => handleClick(PointsToAdd.MAJOR)}>
          {PointsToAdd.MAJOR}
        </Button>
      </Actions>
    </>
  )
}

const H4 = styled.h4`
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 1rem;
`

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
`
