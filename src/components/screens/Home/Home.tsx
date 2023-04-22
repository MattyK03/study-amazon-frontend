import { FC } from 'react'

import Heading from '@/ui/Heading'
import Meta from '@/ui/Meta'
import Catalog from '@/ui/catalog/product-item/Catalog'

import { TypePaginationProduct } from '@/types/product.interface'

const Home: FC<TypePaginationProduct> = ({ products, length }) => {
	return (
		<Meta title='Home'>
			<Heading>Hello world!</Heading>

			<Catalog products={products} />
		</Meta>
	)
}

export default Home
