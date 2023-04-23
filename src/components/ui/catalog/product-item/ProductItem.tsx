import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IProduct } from '@/types/product.interface'

import { convertPrice } from '@/utils/convertPrice'

import ProductRating from './ProductRating'
import AddToCartButton from './addToCartButton'

const DynamicFavoriteButton = dynamic(() => import('./FavoriteButton'))

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	const src = `${product.images[0]}`

	return (
		<div>
			<div className='bg-white rounded-xl relative overflow-hidden'>
				<div className='absolute top-2 right-3 z-10'>
					<DynamicFavoriteButton productId={product.id} />
					<AddToCartButton product={product} />
				</div>
				<Link href={`/product/${product.category.slug}`}>
					<Image
						width={250}
						height={250}
						src={product.images[0]}
						alt={product.name}
						loader={() => src}
					/>
				</Link>
			</div>
			<Link href={`/product/${product.category.slug}`}>
				<h3 className='mt-2 font-semibold'>{product.name}</h3>
			</Link>
			<Link
				href={`/category/${product.category.slug}`}
				className='text-aqua text-xs mb-2'
			>
				{product.category.name}
			</Link>
			<ProductRating product={product} />
			<div className='text-1.5xl font-semibold'>
				{convertPrice(product.price)}
			</div>
		</div>
	)
}

export default ProductItem
