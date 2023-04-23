import { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

import { IProduct } from '@/types/product.interface'

const ProductRating: FC<{ product: IProduct }> = ({ product }) => {
	const [rating, setRating] = useState<number>(
		Math.round(
			product.reviews.reduce((acc, review) => acc + review.rating, 0) /
				product.reviews.length
		) || 0
	)

	return (
		<div className='mb-2'>
			{!!product.reviews.length && (
				<span className='mr-1'>
					<Rating
						readonly
						initialValue={rating}
						SVGstyle={{
							display: 'inline-block'
						}}
						size={22}
						allowFraction
						transition
					/>
					<span className='text-primary ml-1 text-sm'>{rating}</span>
				</span>
			)}

			<span className='text-sm'>({product.reviews.length} reviews)</span>
		</div>
	)
}

export default ProductRating
