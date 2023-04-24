import { Dispatch, FC, SetStateAction } from 'react'

import { EnumProductSort } from '@/services/product/product.types'

interface ISortDropdown {
	sortType: EnumProductSort
	setSortType: Dispatch<SetStateAction<EnumProductSort>>
}

const SortDropdown: FC<ISortDropdown> = ({ setSortType, sortType }) => {
	return (
		<div className='text-right mb-5'>
			<select
				value={sortType}
				onChange={e => setSortType(e.target.value as any)}
				className='appearance-none w-36 py-0.5 px-2 bg-white rounded-md'
				id='categoryFilter'
			>
				{(
					Object.keys(EnumProductSort) as Array<
						keyof typeof EnumProductSort
					>
				).map(key => {
					return (
						<option
							key={key}
							onChange={() => setSortType(EnumProductSort[key])}
							value={EnumProductSort[key]}
						>
							{EnumProductSort[key]}
						</option>
					)
				})}
			</select>
		</div>
	)
}

export default SortDropdown
