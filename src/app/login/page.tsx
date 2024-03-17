import LoginButton from '@/components/LoginButton'

export default function LoginPage() {
  return <div className='flex w-screen h-screen justify-center items-center'>
    <div className='flex flex-col h-fit bg-gray-900 border border-white/10 p-12 rounded-lg'>
      <h1 className='text-center mb-20 text-3xl'>Login</h1>
      <LoginButton />
    </div>
  </div>
}
