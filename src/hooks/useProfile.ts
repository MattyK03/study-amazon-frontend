import { useQuery } from '@tanstack/react-query'

import { IFullUser } from '@/types/user.interface'

import { userService } from '@/services/user.service'

export const useProfile = () => {
	const { data } = useQuery(['get profile'], () => userService.getProfile(), {
		select: ({ data }) => data
	})

	return { profile: data || ({} as IFullUser) }
}
