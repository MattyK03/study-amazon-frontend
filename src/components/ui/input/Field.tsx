import cn from 'clsx'
import { forwardRef } from 'react'

import { IField } from './field.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{ placeholder, error, className, type = 'text', style, Icon, ...rest },
		ref
	) => {
		return (
			<div className={cn('mb-3', className)} style={style}>
				<label htmlFor='' className='flex justify-between flex-wrap'>
					<span>
						{Icon && <Icon className='mr-3' />}
						{placeholder}
					</span>
					<input
						ref={ref}
						type={type}
						placeholder={placeholder}
						{...rest}
						className={cn(
							'px-4 py-2 w-full outline-none border border-solid border-gray rounded-md focus:border-primary transition-all placeholder:text-gray',
							{ 'border-red': !!error }
						)}
					/>
				</label>
				{error && <div className='text-red mt-1 text-sm'>{error}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
