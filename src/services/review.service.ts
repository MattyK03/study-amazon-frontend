import { IReview } from '@/types/review.interface'

import { instance } from '@/api/api.interceptor'

const REVIEWS = 'reviews'

type TypeData = {
	rating: number
	text: string
}

export const reviewService = {
	async getAll() {
		return instance<IReview[]>({
			url: REVIEWS,
			method: 'GET'
		})
	},

	async leave(productId: string | number, data: TypeData) {
		return instance<IReview>({
			url: `${REVIEWS}/leave/${productId}`,
			method: 'POST',
			data
		})
	}
}