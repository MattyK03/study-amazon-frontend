import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { useAuth } from '@/hooks/useAuth'
import { useProfile } from '@/hooks/useProfile'

import { userService } from '@/services/user.service'

const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
	const { user } = useAuth()

	if (!user) return null

	const { profile } = useProfile()

	if (!profile) return null

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

	const isExists = profile.favorites.some(
		favorite => favorite.id === productId
	)

	return (
		<div>
			<button onClick={() => mutate()}>
				{isExists ? <AiFillHeart /> : <AiOutlineHeart />}
			</button>
		</div>
	)
}

export default FavoriteButton
