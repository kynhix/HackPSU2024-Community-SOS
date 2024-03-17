import LoginButton from '@/components/LoginButton'

export default function LoginPage() {
  return <div className='flex w-screen h-screen justify-center items-center'>
    <div className='flex justify-between flex-col mb-20 bg-gray-100 border items-center border-black/10 p-10 w-[400px] h-[500px] rounded-xl'>
      <h1 className='text-center text-3xl font-medium -mb-6'>Sign In</h1>
      <img src="/communitySOS_logo.png" />
      <LoginButton />
    </div>
  </div>
}
