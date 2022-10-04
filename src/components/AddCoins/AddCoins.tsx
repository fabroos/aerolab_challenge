import { useUserContext } from '@/context/userContext'
import { CheckO, Coin } from '@/Icons'
import { useState } from 'react'
import { Loading } from '../Loading'
import { Modal } from '../Modal/Modal'
import { PointsBtns } from '../PointsBtns/PointsBtns'

export const AddCoins = () => {
  const { chargePoints } = useUserContext()
  const [state, setState] = useState<
    'idle' | 'loading' | 'error' | 'succes' | 'opened'
  >('idle')
  function handleCharge (points: number) {
    setState('loading')
    chargePoints(points)
      .then(() => {
        setState('succes')
      })
      .catch(() => {
        setState('error')
      })
  }

  return (
    <>
      <p onClick={() => setState('opened')}>Add Points +</p>
      {state !== 'idle' && (
        <Modal
          isOpen
          onClose={() => setState('idle')}
          icon={
            state === 'loading' ? (
              <Loading />
            ) : state === 'error' ? (
              <CheckO />
            ) : state === 'succes' ? (
              <CheckO />
            ) : (
              <Coin />
            )
          }
        >
          <PointsBtns handleClick={handleCharge} />
        </Modal>
      )}
    </>
  )
}
