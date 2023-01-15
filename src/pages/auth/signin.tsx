import { type NextPage } from "next";
import { getProviders, useSession, signOut, signIn } from "next-auth/react"

type SignInProps = {
  providers: {
    name: string,
    id: string
  }[]
}

const SignIn:NextPage<SignInProps> = ({ providers }: SignInProps) => {
  const { data: sessionData } = useSession()

  return (
    <main className="w-full h-screen flex justify-center items-center">
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className="bg-slate-900 text-white dark:bg-slate-50 dark:text-slate-800 py-2 px-4 rounded-lg"
            onClick={sessionData ?
              () => signOut() :
              () => signIn(provider.id)
          }>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </main>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

export default SignIn;