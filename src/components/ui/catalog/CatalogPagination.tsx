import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'

import Heading from '@/ui/Heading'
import Loader from '@/ui/loader/Loader'

import { TypePaginationProduct } from '@/types/product.interface'

import Button from '../button/Button'

import SortDropdown from './SortDropdown'
import ProductItem from './product-item/ProductItem'
import { ProductService } from '@/services/product/product.service'
import { EnumProductSort } from '@/services/product/product.types'

interface ICatalogPagination {
	data: TypePaginationProduct
	title?: string
}

const CatalogPagination: FC<ICatalogPagination> = ({ data, title }) => {
	const [page, setPage] = useState(1)

	const [sortType, setSortType] = useState<EnumProductSort>(
		EnumProductSort.NEWEST
	)

	const { data: response, isLoading } = useQuery(
		['products', sortType, page],
		() =>
			ProductService.getAll({
				page,
				perPage: 4,
				sort: sortType
			}),
		{
			initialData: data
		}
	)

	if (isLoading) return <Loader />

	return (
		<section>
			{title && <Heading className='mb-5'>{title}</Heading>}
			<SortDropdown sortType={sortType} setSortType={setSortType} />
			{response.products.length ? (
				<>
					<div className='grid grid-cols-4 gap-10'>
						{response.products.map(product => (
							<ProductItem key={product.id} product={product} />
						))}
					</div>
					<div className='text-center mt-16'>
						{Array.from({ length: response.length / 4 }).map(
							(_, index) => {
								const pageNumber = index + 1
								return (
									<Button
										className='mx-3'
										onClick={() => {
											setPage(pageNumber)
										}}
										variant={
											page === pageNumber
												? 'orange'
												: 'white'
										}
										size='sm'
									>
										{pageNumber}
									</Button>
								)
							}
						)}
					</div>
				</>
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}

export default CatalogPagination
