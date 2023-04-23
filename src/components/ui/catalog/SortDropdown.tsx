import { FC } from 'react'

import { EnumProductSort } from '@/services/product/product.types'

const SortDropdown: FC = () => {
	return (
		<div className='text-right mb-5'>
			<select
				className='appearance-none w-36 py-0.5 px-2 bg-white rounded-md'
				id='categoryFilter'
			>
				{(
					Object.keys(EnumProductSort) as Array<
						keyof typeof EnumProductSort
					>
				).map(key => {
					return (
						<option value={EnumProductSort[key]}>
							{EnumProductSort[key]}
						</option>
					)
				})}
			</select>
		</div>
	)
}

export default SortDropdown
