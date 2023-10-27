declare global {
  var prisma: PrismaClient // must be a "var"
}

import { PrismaClient } from '@prisma/client'

if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaClient()
} else {
	if (!global.prisma) {
		global.prisma = new PrismaClient()
	}
	prisma = global.prisma
}

export default prisma