import { useQuery } from '@tanstack/react-query'

import { errorCatch } from '@/api/api.helper'

import { userService } from '@/services/user.service'

export const useProfile = () => {
	const { data } = useQuery(['get profile'], () => userService.getProfile(), {
		select: ({ data }) => data,
		onError: error => {
			console.log(errorCatch(error))
		}
	})

	return { profile: data }
}
