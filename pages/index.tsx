import { GetStaticProps, NextPage } from 'next'

import { TypeProducts } from '@/types/product.interface'

import Home from '@/screens/Home/Home'
import { ProductService } from '@/services/product/product.service'

const HomePage: NextPage<TypeProducts> = ({ products }) => {
	return <Home products={products} />
}

export const getStaticProps: GetStaticProps<TypeProducts> = async () => {
	const { data: products } = await ProductService.getAll({
		page: 1,
		perPage: 4
	})

	return {
		props: {
			products
		}
	}
}

export default HomePage
