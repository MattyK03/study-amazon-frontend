import Meta from '@/ui/Meta'
import Catalog from '@/ui/catalog/Catalog'
import Layout from '@/ui/layout/Layout'

import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'

import { useProfile } from '@/hooks/useProfile'

const FavoritePage: NextPageAuth = () => {
	const { profile } = useProfile()

	return (
		<Meta title='Favorites'>
			<Layout>
				<Catalog
					products={profile?.favorites || []}
					title='Favorites'
				/>
			</Layout>
		</Meta>
	)
}

FavoritePage.isOnlyUser = true

export default FavoritePage
