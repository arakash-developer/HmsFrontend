import CredentialProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const authOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    CredentialProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials

        try {
          const res = await fetch(`${process.env.BASE_API}/api/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ identifier: email, password })
          })

          const contentType = res.headers.get('content-type') || ''
          let data

          if (contentType.includes('application/json')) {
            data = await res.json()
          } else {
            const text = await res.text()

            throw new Error(JSON.stringify({ message: [text || 'Unexpected server response'] }))
          }

          if (!res.ok || !data.user) {
            throw new Error(JSON.stringify({ message: [data.message || 'Login failed'] }))
          }

          return data.user
        } catch (error) {
          // Always return JSON-encoded error message for frontend parsing
          if (typeof error.message === 'string' && error.message.startsWith('{')) {
            throw new Error(error.message) // already JSON
          } else {
            throw new Error(JSON.stringify({ message: [error.message || 'Authentication failed'] }))
          }
        }
      }
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },

  pages: {
    signIn: '/login'
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.name = user.name
        token.email = user.email
        token.username = user.username
        token.status = user.status
        token.hospitals = user.hospitals
      }

      return token
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.username = token.username
        session.user.status = token.status
        session.user.hospitals = token.hospitals
      }

      return session
    }
  }
}
