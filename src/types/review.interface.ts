import { IUserState } from '@/store/user/user.interface'

export interface IReview {
	id: number
	user: IUserState
	createdAt: string
	text: string
	rating: string
}
