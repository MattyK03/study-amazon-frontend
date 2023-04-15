import { NextPage } from 'next'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Meta from '@/components/ui/Meta'

import Heading from '@/ui/Heading'
import Button from '@/ui/button/Button'
import Field from '@/ui/input/Field'
import Loader from '@/ui/loader/Loader'

import { IEmailPassword } from '@/store/user/user.interface'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { validEmail } from './valid-email'
import { useAuthRedirect } from '@/services/auth/useAuthRedirect'

const Auth: NextPage = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const { login, register } = useActions()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IEmailPassword>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		if (type === 'login') {
			login(data)
		} else {
			register(data)
		}
		reset()
	}

	return (
		<Meta title='Auth'>
			<section className='flex h-screen'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='rounded-lg bg-white shadow-sm p-8 m-auto'
				>
					<Heading className='capitalize text-center mb-4'>
						{type}
					</Heading>

					{isLoading ? (
						<Loader />
					) : (
						<>
							<Field
								{...formRegister('email', {
									required: 'Email is required',
									pattern: {
										value: validEmail,
										message:
											'Please enter a valid email address'
									}
								})}
								placeholder='Email'
								error={errors.email?.message}
								className=''
							/>
							<Field
								{...formRegister('password', {
									required: 'Password is required',
									minLength: {
										value: 6,
										message:
											'Min length should more 6 symbols'
									}
								})}
								type='password'
								placeholder='Password'
								error={errors.password?.message}
							/>
							<Button type='submit' variant='orange'>
								Auth
							</Button>
							<div>
								<button
									type='button'
									className='inline-block opacity-50 mt-3 text-sm'
									onClick={() =>
										setType(
											type === 'login'
												? 'register'
												: 'login'
										)
									}
								>
									{type === 'login' ? 'register' : 'login'}
								</button>
							</div>
						</>
					)}
				</form>
			</section>
		</Meta>
	)
}

export default Auth
