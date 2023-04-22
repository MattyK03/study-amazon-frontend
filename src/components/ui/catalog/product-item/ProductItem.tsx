import Image from 'next/image'
import { FC } from 'react'

import { IProduct } from '@/types/product.interface'

import FavoriteButton from './FavoriteButton'
import ProductRating from './ProductRating'
import AddToCartButton from './addToCartButton'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	const src = `${product.images[0]}`

	return (
		<div>
			<div>
				<FavoriteButton productId={product.id} />
				<AddToCartButton product={product} />
				<Image
					width={300}
					height={300}
					src={product.images[0]}
					alt={product.name}
					loader={() => src}
				/>
			</div>
			<h3>{product.name}</h3>
			<div>{product.category.name}</div>
			<ProductRating product={product} />
			<div>{product.price}</div>
		</div>
	)
}

export default ProductItem
