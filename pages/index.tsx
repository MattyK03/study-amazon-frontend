import { GetStaticProps, NextPage } from 'next'

import { TypePaginationProduct, TypeProducts } from '@/types/product.interface'

import Home from '@/screens/Home/Home'
import { ProductService } from '@/services/product/product.service'

const HomePage: NextPage<TypePaginationProduct> = ({ length, products }) => {
	return <Home products={products} length={length} />
}

export const getStaticProps: GetStaticProps<TypeProducts> = async () => {
	const { data } = await ProductService.getAll({
		page: 1,
		perPage: 4
	})

	return {
		props: data
	}
}

export default HomePage
