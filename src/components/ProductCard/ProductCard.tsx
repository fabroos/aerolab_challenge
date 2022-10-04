import { Image } from '@/components'
import { useUserContext } from '@/context/userContext'
import { BagIcon, Cancel, CheckO, Coin } from '@/Icons'
import { Product } from '@/models'
import { FC, useState } from 'react'
import styled from 'styled-components'
import { Button } from '../Button'
import { Loading } from '../Loading'
import { Modal } from '../Modal/Modal'

type Props = {
  product: Product
}

export const ProductCard: FC<Props> = ({ product }) => {
  const {
    user: { response: user },
    reedemProduct
  } = useUserContext()
  const [state, setState] = useState<'idle' | 'loading' | 'error' | 'succes'>(
    'idle'
  )

  function handleReedem () {
    if (user && user.points >= product.cost) {
      setState('loading')
      reedemProduct(product._id, product.cost)
        .then(() => {
          setState('succes')
        })
        .catch(() => {
          setState('error')
        })
    }
  }
  return (
    <Card>
      <Image src={product.img.url} alt={`product ${product.name}`} />
      <ProductInfo>
        <h3>{product.name}</h3>
        <p>{product.category}</p>
      </ProductInfo>
      {user && user?.points >= product.cost && (
        <HoverContent>
          <span>
            <p>${product.cost}</p>
            <Coin />
          </span>
          <Button hoverBg='gray' colorBg='#000' onClick={handleReedem}>
            Buy
          </Button>
        </HoverContent>
      )}
      <IconContainer>
        {user && user?.points >= product.cost ? (
          <BagIcon />
        ) : (
          <FloatNeed>
            <span>you need {product.cost - user!.points}</span> <Coin />
          </FloatNeed>
        )}
      </IconContainer>
      {state !== 'idle' && (
        <Modal
          onClose={() => setState('idle')}
          isOpen={true}
          icon={
            state === 'loading' ? (
              <Loading />
            ) : state === 'succes' ? (
              <CheckO />
            ) : (
              <Cancel />
            )
          }
        >
          {state === 'loading' && <p>loading...</p>}
          {state === 'succes' && <p>success!</p>}
          {state === 'error' && <p>error!</p>}
        </Modal>
      )}
    </Card>
  )
}

const IconContainer = styled.div`
  color: ${({ theme }) => theme.colors['light-blue']};
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 100;
  &:hover {
    filter: brightness(0.8);
  }
`
const HoverContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  opacity: 0;
  background-color: ${({ theme }) => `${theme.colors['light-blue']}cc`};
  z-index: 10;
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  font-size: 2rem;
  align-items: center;
  span {
    display: flex;
    align-items: center;
  }
`

const Card = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  transition: all 0.2s ease-in-out;
  &:hover ${HoverContent} {
    visibility: visible;
    opacity: 1;
  }
  &:hover {
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-0.5rem);
  }
`

const ProductInfo = styled.div`
  padding: 1rem;
  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors['dark-gray']};
  }
`

const FloatNeed = styled.div`
  background-color: #0000006f;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
