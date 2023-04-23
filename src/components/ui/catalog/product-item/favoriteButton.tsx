import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { useProfile } from '@/hooks/useProfile'

import { userService } from '@/services/user.service'

const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
	const { profile } = useProfile()

	const QueryClient = useQueryClient()

	const { mutate } = useMutation(
		['toggleFavorite'],
		() => userService.toggleFavorite(productId),
		{
			onSuccess() {
				QueryClient.invalidateQueries(['get profile'])
			}
		}
	)

	if (!profile) return null

	const isExists = profile.favorites.some(
		favorite => favorite.id === productId
	)

	return (
		<div>
			<button className='text-primary' onClick={() => mutate()}>
				{isExists ? <AiFillHeart /> : <AiOutlineHeart />}
			</button>
		</div>
	)
}

export default FavoriteButton
