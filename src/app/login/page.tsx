import LoginButton from '@/components/LoginButton'

export default function LoginPage() {
  return <div className='flex w-screen h-screen justify-center items-center'>
    <div className='flex flex-col mb-20 h-fit bg-gray-100 border border-black/10 px-12 pt-6 pb-8 rounded-xl'>
      <h1 className='text-center mb-20 text-3xl'>Sign In</h1>
      <LoginButton />
    </div>
  </div>
}
