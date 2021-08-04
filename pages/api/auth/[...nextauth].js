import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default async function AuthHandler(req, res) {
    return NextAuth(req, res, {
        providers: [
            Providers.GitHub({
                clientId: process.env.GITHUB_CLIENT_ID,
                clientSecret: process.env.GITHUB_CLIENT_SECRET
            })
        ]
    })
}